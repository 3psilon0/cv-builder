import { useState, useEffect } from 'react'
import '../index.css'
import { aishaMalik } from '../sampleData.js'
import Preview from './Preview.jsx'
import Editor from './Editor.jsx'

function App() {
  
  const [data, setData] = useState(
    // {
    //   personal: {
    //     name: null,
    //     email: null,
    //     phone: null,
    //     location: null,
    //     profession: null,
    //     aboutme: null
    //   },
    //   skills: [],
    //   experience: [],
    //   education: []
    // }
    aishaMalik
  );
  
  useEffect(() => {
    document.title = "CV Builder";
  }, [])

  const handleData = (obj) => {
    setData(obj);
  }

 return (
  <>
  <div className='flex justify-between h-screen'>

    <div className='bg-[#062243] h-full w-150 px-10 py-5 overflow-y-auto'>

      <header className='mt-5 mb-10 w-full'>
        <h1 className='text-2xl text-center'>CV Builder</h1>
      </header>

      <Editor data={data} handleData={handleData} />

    </div>


    <div className='flex flex-col items-center w-full h-full overflow-y-auto'>
      <div className='py-10'>
        <Preview data={data} />
      </div>
    </div>

  </div>
  </>
 );
}

export default App
