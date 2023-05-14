export default function debounce(func, timeout) {

  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => { func(args); }, timeout);
  };

}
