import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [timeoutId, setTimeOutId] = useState(null);
  const handleClick = () => {
    console.log("clicked");
  };
  const handleChange = (value) => {
    console.log(value);
  };
  const debounce = (callback, delay, value) => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      callback(value);
    }, delay);
    setTimeOutId(id);
  };

  return (
    <div className='flex justify-center items-center pt-20 w-full'>
      <input
        type='text'
        className='py-1 px-2 w-3/6 text-2xl outline-none rounded-l-md'
        onChange={(e) => debounce(handleChange, 500, e.target.value)}
      />
      <button
        onClick={() => debounce(handleClick, 200)}
        className=' font-bold bg-slate-400 text-white py-2 px-3 rounded-r-lg hover:bg-slate-500 active:bg-slate-600'
      >
        Click
      </button>
    </div>
  );
}

export default App;
