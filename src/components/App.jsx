import { useState } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { usmanRaza } from '../sampleData.js'
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
    usmanRaza
  );

  const updatePersonal = (field, value) => {
    setData(prev => {
      return {
        ...prev,
        personal: {
          ...prev.personal,
          [field]: value
        }
      }
    });
  }

  const addGenListItem = (section) => {
    const id = crypto.randomUUID();

    setData(prev => {
      return {
        ...prev,
        [section]: [
          ...prev[section],
          {
            id: id,
            from: "",
            to: "",
            location: "",
            title: "",
            description: ""
          }
        ]
      }
    });

    return id;
  }

  const delGenListItem = (section, itemId) => {
    setData(prev => {
      return {
        ...prev,
        [section]: prev[section].filter(item => item.id !== itemId)
      }
    });
  }

  const updateGenListItem = (section, itemId, field, value) => {
    setData(prev => {
      return {
        ...prev,
        [section]: prev[section].map(item => {
          if(item.id === itemId){
            return {
              ...item,
              [field]: value
            }
          }
          else {
            return item;
          }
        })
      }
    });
  }

  const handlers = {
    updateGenListItem,
    addGenListItem,
    delGenListItem,
    updatePersonal
  }

 return (
  <>
  <div className='flex justify-between h-screen'>

    <div className='flex flex-col bg-[#062243] h-full w-150 px-10 py-5 overflow-y-auto print:hidden'>

      <header className='mt-5 mb-8 w-full border-b border-slate-600 pb-6'>
        <h1 className='text-2xl text-center'>CV Builder</h1>
        <button className='text-slate-400 border border-slate-500 p-1.5 text-sm rounded-lg cursor-pointer' onClick={() => {window.print()}}>Print</button>
      </header>

      <Editor data={data} {...handlers} />

      <footer className='flex justify-center text-sm text-slate-400 mt-5'>
        <h1 className='flex items-center gap-1'>Made by <a className='flex items-center gap-1' href="https://github.com/3psilon0" target="_blank" rel="noopener noreferrer">{<FaGithub/>} 3psilon0</a> </h1>
      </footer>

    </div>


    <div className='flex flex-col items-center w-full h-full overflow-y-auto'>
      <div className='py-10 print:p-0'>
        <Preview data={data} />
      </div>
    </div>

  </div>
  </>
 );
}

export default App
