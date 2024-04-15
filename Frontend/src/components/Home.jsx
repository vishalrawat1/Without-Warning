import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios.get('https://bookstore2-d9fv.onrender.com/books')
//       .then((res) => {
//         setBooks(res.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className='text-dark' style={{ paddingLeft: '0%' }}>
        DATA
        <hr></hr>
      </div>
      <table className='border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className='border border-slate-600 rounded-md'>Sno</th>
            <th className='border border-slate-600 rounded-md'>Name</th>
            <th className='border border-slate-600 rounded-md'>Email</th>
            <th className='border border-slate-600 rounded-md'>Risk Score</th>
            <th className='border border-slate-600 rounded-md'>Prompt</th>
          </tr>
        </thead>
        <tbody>
            <tr className='h-8'>
              <td className='border border-slate-600 rounded-md text-center'>
                {/* {index + 1} */} 
              </td>
              <td className='border border-slate-600 rounded-md text-center'>
                {/* {book.title} */}
              </td>
              <td className='border border-slate-600 rounded-md text-center'>
                {/* {book.author} */}
              </td>
              <td className='border border-slate-600 rounded-md text-center'>
                {/* {book.publishyear} */}
              </td>
              <td className='border border-slate-600 rounded-md text-center'>
                {/* {book.publishyear} */}
              </td>
              <td className='border border-slate-600 rounded-md text-center'>
                {/* {book.publishyear} */}
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
