- Basically we use throttling in writing paragraph or textArea.
  const throttle = (callback, delay) => {
  let now = Date.now();
  console.log(now - lastExecuted, delay);
  if (now - lastExecuted >= delay) {
  callback();
  setLastExecuted(now);
  }
  };
