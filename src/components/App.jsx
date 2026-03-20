import { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { aishaMalik } from '../sampleData.js'
import Preview from './Preview.jsx'
import Editor from './Editor.jsx'
import '../index.css'

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

    <div className='flex flex-col bg-[#062243] h-full w-150 px-10 py-5 overflow-y-auto'>

      <header className='mt-5 mb-10 w-full'>
        <h1 className='text-2xl text-center'>CV Builder</h1>
      </header>

      <Editor data={data} handleData={handleData} />

      <footer className='flex justify-center text-sm text-slate-400 mt-5'>
        <h1 className='flex items-center gap-1'>Made by {<FaGithub/>} 3psilon0 </h1>
      </footer>

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
