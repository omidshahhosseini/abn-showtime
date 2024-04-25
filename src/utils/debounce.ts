export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay = 300 // default delay of 300ms
): (...args: Parameters<T>) => void {
  let timerId: ReturnType<typeof setTimeout>;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
