import React, { useEffect, useRef } from 'react';

export const GrowingCircleCanvas = () => {
	const canvasRef = useRef(null);

	const draw = (ctx, radius) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = '#ffffff';
		ctx.beginPath();
		ctx.arc(50, 100, radius, 0, 2 * Math.PI);
		ctx.fill();
	};

	useEffect(() => {
		const context = canvasRef.current.getContext('2d');
		let radius = 0;
		let animationFrameId;

		const { width, height } = context.canvas.getBoundingClientRect();
		if (context.canvas.width !== width || context.canvas.height !== height) {
			const { devicePixelRatio: originalRatio = 1 } = window;
			// we don't need such a high resolution for this type of animation. Plus it makes the edges
			// of the circle look blurred, which looks nicer. Also improves performance a lot on slow GPUs
			// change from 0.5 to 1 if you want to use display's native resolution.
			const lowerResolutionRatio = originalRatio * 0.5;
			context.canvas.width = width * lowerResolutionRatio;
			context.canvas.height = height * lowerResolutionRatio;
			context.scale(lowerResolutionRatio, lowerResolutionRatio);
		}

		const render = () => {
			radius += 0.05;
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
