export const debounce = (callback, delay = 250) => {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			timeoutId = null;
			callback(...args);
		}, delay);
	};
};

export const throttle = (callback, limit = 250) => {
	let wait = false;
	return () => {
		if (!wait) {
			callback.call();
			wait = true;
			setTimeout(() => {
				wait = false;
			}, limit);
		}
	};
};
