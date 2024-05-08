import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [timeoutId, setTimeOutId] = useState(null);
  // const [lastExecuted, setLastExecuted] = useState(0);
  const handleClick = () => {
    console.log("clicked");
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const debounce = (callback, delay, e) => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      callback(e);
    }, delay);
    setTimeOutId(id);
  };
  /*
  Basically we use throttling in writing paragraph or textArea.
  const throttle = (callback, delay) => {
    let now = Date.now();
    console.log(now - lastExecuted, delay);
    if (now - lastExecuted >= delay) {
      callback();
      setLastExecuted(now);
    }
  };
*/
  return (
    <div className='flex justify-center items-center pt-20 w-full'>
      <input
        type='text'
        className='py-1 px-2 w-3/6 text-2xl outline-none rounded-l-md'
        onChange={(e) => debounce(handleChange, 1000, e)}
      />
      <button
        onClick={() => debounce(handleClick, 500)}
        className=' font-bold bg-slate-400 text-white py-2 px-3 rounded-r-lg hover:bg-slate-500 active:bg-slate-600'
      >
        Click
      </button>
    </div>
  );
}

export default App;
