- Basically we use throttling in writing paragraph or textArea.
  const throttle = (callback, delay) => {
  let now = Date.now();
  console.log(now - lastExecuted, delay);
  if (now - lastExecuted >= delay) {
  callback();
  setLastExecuted(now);
  }
  };

# Feature and Functionality

1. Debounce functionality. ⭐️
2. Add, Delete, Edit functionality.
3. local storage.
4. Redux Toolkit
5. Pagination
