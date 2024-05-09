import React from "react";

const Table = ({ data, handleEdit, handleDelete }) => {
  //   console.log(data);
  //   const { tableData } = data;
  //   const tableData = ["need to complete task", "get vegetables"];
  return (
    <div className='mt-6 flex flex-col w-1/2 '>
      <table className='min-w-full divide-y divide-gray-200 '>
        <thead className='bg-gray-50'>
          <tr>
            <th
              scope='col'
              className='px-12 py-3.5 text-left text-xl font-bold text-gray-700'
            >
              Todo List
            </th>
            <th scope='col' className='relative px-4 py-3.5'>
              <span className='sr-only'>Edit</span>
            </th>
            <th scope='col' className='relative px-4 py-3.5'>
              <span className='sr-only'>Delete</span>
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 bg-white'>
          {data.map((item, i) => (
            <tr key={item}>
              <td className='whitespace-nowrap px-12 py-4'>
                <div className='text-xl text-gray-900 '>{item}</div>
              </td>

              <td className='whitespace-nowrap px-1 py-2 text-sm text-gray-700'>
                <button
                  onClick={() => handleEdit(i)}
                  className='text-gray-700 text-lg px-2 py-1 rounded-md active:bg-slate-200 active:translate-y-0.5'
                >
                  Edit
                </button>
              </td>
              <td className='whitespace-nowrap px-1 py-2 text-right text-sm font-medium'>
                <button
                  onClick={() => handleDelete(i)}
                  className='text-gray-700 text-lg px-2 py-1 rounded-md active:bg-red-200 active:translate-y-0.5'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
