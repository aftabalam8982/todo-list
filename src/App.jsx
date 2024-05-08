import "./App.css";
import { useRef, useState } from "react";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState(["need to complete task", "get vegetables"]);
  const [text, setText] = useState("");
  const [timeoutId, setTimeOutId] = useState(null);
  const inputRef = useRef();

  const handleClick = () => {
    if (text) {
      setData([...data, text]);
      inputRef.current.value = "";
    }
  };
  const handleChange = (value) => {
    console.log(value);
    setText(value);
  };
  const debounce = (callback, delay, value) => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      callback(value);
    }, delay);
    setTimeOutId(id);
  };
  return (
    <div className='flex flex-col justify-center items-center pt-20 w-screen'>
      <div className='flex justify-center w-1/2'>
        <input
          ref={inputRef}
          type='text'
          className='py-1 px-2  text-2xl outline-none rounded-l-md w-full'
          onChange={(e) => debounce(handleChange, 500, e.target.value)}
        />
        <button
          type='button'
          onClick={() => debounce(handleClick, 500)}
          className=' font-bold bg-slate-500 text-white py-2 px-3 rounded-r-lg hover:bg-slate-400 active:bg-slate-600 active:translate-y-0.5'
        >
          ADD
        </button>
      </div>

      <Table data={data} />
    </div>
  );
}

export default App;
