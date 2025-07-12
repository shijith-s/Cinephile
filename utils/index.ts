const DEBOUNCE_DELAY = 500;

const debounce = (func: Function) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, DEBOUNCE_DELAY);
  };
};

export { debounce };
