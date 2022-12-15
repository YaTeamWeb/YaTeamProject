import React, { useEffect, useRef } from 'react';

export const CircleCanvas = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const context = canvasRef.current.getContext('2d');

		context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		context.fillStyle = '#ffffff';
		context.beginPath();
		context.arc(75, 75, 60, 0, 2 * Math.PI);
		context.fill();

		window.requestAnimationFrame(() => {});
	}, []);

	return <canvas ref={canvasRef} />;
};
