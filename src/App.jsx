import "./App.css";
import { useEffect, useRef, useState } from "react";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState(["need to complete task", "get vegetables"]);
  const [text, setText] = useState("");
  const [timeoutId, setTimeOutId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const id = setTimeout(() => {
      setMessage("");
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, [message]);

  const handleClick = () => {
    if (text.trim()) {
      if (editId !== null) {
        const newData = [...data];
        newData[editId] = text;
        setData(newData);
        setMessage("Edit successful!");
      } else {
        setData([...data, text]);
        setMessage("Added successful!");
      }
      setText("");
      setEditId(null);
    }
  };
  const handleChange = (value) => {
    setText(value);
  };
  const handleEdit = (id) => {
    setText(data[id]);
    setEditId(id);
  };
  const handleDelete = (id) => {
    setData(data.filter((val, i) => i !== id));
    setMessage("successfully deleted");
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
      <div className='absolute top-5 right-5'>
        {message !== "" ? (
          <h3 className='bg-green-500 text-white py-1 px-2 '>{message}</h3>
        ) : (
          ""
        )}
      </div>

      <div className='flex justify-center mt-3 w-1/2'>
        <input
          ref={inputRef}
          placeholder='type here...'
          value={text}
          type='text'
          className='py-1 px-2  text-2xl outline-none rounded-l-md w-full'
          onChange={(e) => handleChange(e.target.value)}
        />
        <button
          type='button'
          onClick={() => debounce(handleClick, 500)}
          className=' font-bold bg-slate-500 text-white py-2 px-3 rounded-r-lg hover:bg-slate-400 active:bg-slate-600 active:translate-y-0.5'
        >
          ADD
        </button>
      </div>

      <Table data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
