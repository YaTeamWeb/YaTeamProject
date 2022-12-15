import React, { useEffect, useRef } from 'react';

export const GrowingCircleCanvasTime = () => {
	const canvasRef = useRef(null);
	const RADIUS_INCREASE_PER_MS = 0.05;
	let timeAtPreviousDraw = Date.now();
	const draw = (ctx, radius) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = '#FFF';
		ctx.beginPath();
		ctx.arc(50, 100, radius, 0, 2 * Math.PI);
		ctx.fill();
	};

	useEffect(() => {
		const context = canvasRef.current.getContext('2d');
		let radius = 0;
		let animationFrameId;

		const render = () => {
			const timeAtRenderStart = Date.now();
			const timePastSincePreviousDraw = timeAtRenderStart - timeAtPreviousDraw;
			// In the future, we will get computers so fast that the difference between
			// previous and current frame is less than 1ms. Math.max() ensures that we
			// still grow the circle even if the computer is super fast.
			const timePastSinceLastDraw = Math.max(1, timePastSincePreviousDraw);
			radius += RADIUS_INCREASE_PER_MS * timePastSinceLastDraw;
			timeAtPreviousDraw = timeAtRenderStart;
			draw(context, radius);
			animationFrameId = window.requestAnimationFrame(render);
		};
		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
	}, [draw]);

	return <canvas ref={canvasRef} />;
};
