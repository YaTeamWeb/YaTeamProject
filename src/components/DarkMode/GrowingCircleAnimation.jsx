import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { debounce, throttle } from '../../utils/Limitors';

const COLORS = {
	white: '#FFF',
	midnightBlack: '#111',
};

const RADIUS_GROWTH_PER_MS = 0.025;
const GROWTH_FUNCTION_EXPONENTIAL = 2.9;
const PIXEL_SCALING_FACTOR = 0.5;

const circleCenterCoordinates = {
	x: null,
	y: null,

	resetMouseState: () => {
		circleCenterCoordinates.x = null;
		circleCenterCoordinates.y = null;
	},
};

const m = {
	ctx: null,
	isDark: null,
	radiusMultiplier: null,
	maxRadiusMultiplier: null,
	timeAtPreviousDraw: null,
	height: null,
	width: null,

	createMachine: (ctx, isDark) => {
		m.ctx = ctx;
		m.isDark = isDark;
		m.height = Math.max(window.screen.height, window.innerHeight);
		m.width = Math.max(window.screen.width, window.innerWidth);
		m.maxRadiusMultiplier =
			Math.max(m.width, m.height) ** (1.0 / GROWTH_FUNCTION_EXPONENTIAL);
		m.timeAtPreviousDraw = Date.now();

		document.body.style.backgroundColor = m.isDark
			? COLORS.midnightBlack
			: COLORS.white;

		const { width, height } = m.ctx.canvas.getBoundingClientRect();
		if (m.ctx.canvas.width !== width || m.ctx.canvas.height !== height) {
			const { devicePixelRatio: originalRatio = 1 } = window;
			const lowerResolutionRatio = originalRatio * PIXEL_SCALING_FACTOR;
			m.ctx.canvas.width = width * lowerResolutionRatio;
			m.ctx.canvas.height = height * lowerResolutionRatio;
			m.ctx.scale(lowerResolutionRatio, lowerResolutionRatio);
		}

		if (
			circleCenterCoordinates.x == null ||
			circleCenterCoordinates.y == null
		) {
			m.radiusMultiplier = isDark ? 0 : m.maxRadiusMultiplier;
		}

		return m.start;
	},
	start: () => (m.isDark ? m.shrinkCircle : m.growCircle),

	growCircle: () => {
		m.radiusMultiplier +=
			RADIUS_GROWTH_PER_MS * Math.max(1, Date.now() - m.timeAtPreviousDraw);
		return m.verifyCircleBounds;
	},

	shrinkCircle: () => {
		m.radiusMultiplier -=
			RADIUS_GROWTH_PER_MS * Math.max(1, Date.now() - m.timeAtPreviousDraw);
		return m.verifyCircleBounds;
	},

	verifyCircleBounds: () => {
		if (
			(m.radiusMultiplier <= 0 && m.isDark) ||
			(m.radiusMultiplier >= m.maxRadiusMultiplier && !m.isDark)
		) {
			m.ctx.fillStyle = m.isDark ? COLORS.midnightBlack : COLORS.white;
			m.ctx.fillRect(0, 0, m.width, m.height);
			m.radiusMultiplier = m.isDark ? 0 : m.maxRadiusMultiplier;
			return null;
		}

		m.ctx.clearRect(0, 0, m.width, m.height);
		return m.drawCircle;
	},

	drawCircle: () => {
		m.ctx.fillStyle = COLORS.white;
		m.ctx.beginPath();
		m.ctx.arc(
			circleCenterCoordinates.x,
			circleCenterCoordinates.y,
			m.radiusMultiplier ** GROWTH_FUNCTION_EXPONENTIAL,
			0,
			2 * Math.PI
		);
		m.ctx.fill();

		m.timeAtPreviousDraw = Date.now();

		return new Promise((rtn) => {
			const returnAfterAnimating = () => {
				rtn(m.start);
			};
			window.requestAnimationFrame(returnAfterAnimating);
		});
	},
};

const GrowingCircleAnimation = ({ isDark }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const ctx = canvasRef.current.getContext('2d');

		let stateMachine = m.createMachine(ctx, isDark);
		let isStateMachinePowered = true;

		const stateMachineRunner = () => {
			if (stateMachine !== null && isStateMachinePowered) {
				if (stateMachine instanceof Function) {
					stateMachine = stateMachine();
					stateMachineRunner();
				} else {
					stateMachine.then((val) => {
						stateMachine = val();
						stateMachineRunner();
					});
				}
			}
		};

		stateMachineRunner();

		const handleClick = (event) => {
			circleCenterCoordinates.x = event.detail.x;
			circleCenterCoordinates.y = event.detail.y;
		};

		const handleResize = () => {
			circleCenterCoordinates.resetMouseState();
			stateMachine = m.createMachine(ctx, isDark);
			stateMachineRunner();
		};

		window.addEventListener('darkModeToggle', handleClick);
		window.addEventListener('resize', throttle(debounce(handleResize)), false);
		return () => {
			isStateMachinePowered = false;
			window.removeEventListener('darkModeToggle', handleClick);
			window.removeEventListener(
				'resize',
				throttle(debounce(handleResize)),
				false
			);
		};
	}, [isDark]);

	return <canvas className={'size'} ref={canvasRef} />;
};

GrowingCircleAnimation.propTypes = {
	isDark: PropTypes.bool.isRequired,
};

export default GrowingCircleAnimation;
