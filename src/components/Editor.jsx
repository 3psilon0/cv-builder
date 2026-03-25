import { useState } from 'react';
import { FaAngleDown, FaCircleUser, FaGraduationCap, FaBriefcase, FaScroll } from 'react-icons/fa6';
import EditorGeneral from './EditorGeneral';
import '../index.css'


function Accordion({title, icon, open = false , children}) {
    const [isOpen, setIsOpen] = useState(open);
    
    return (
        <div className='bg-[#061c34] w-full rounded-lg p-4'>

            <div className='flex items-center gap-4'>
                <button onClick={() => {setIsOpen(!isOpen)}} className='rounded-lg cursor-pointer'>
                    <FaAngleDown className={`transition-all duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className='flex items-center gap-3'>
                    {icon}
                    <h2 className='text-lg font-semibold'>{title}</h2>
                </div>
            </div>
            
            <div className={`grid transition-all duration-300 ease-in-out ${
                isOpen 
                ? 'grid-rows-[1fr] opacity-100 mt-2'
                : 'grid-rows-[0fr] opacity-0'
            }`}>

                <div className=' overflow-hidden text-slate-300 text-sm'>
                    {children}
                </div>
                
            </div>
            
        </div>

);
}

function Editor({data, handleData}) {
    
    return (
        <div className='grow-2 flex flex-col gap-5'>
            <Accordion title='General Information' icon={<FaCircleUser/>} open={true}>
                <EditorGeneral data={data} handleData={handleData} />
            </Accordion>

            <Accordion title='Education' icon={<FaGraduationCap/>}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat ex quos fuga cum enim blanditiis non, nobis a reiciendis repudiandae. Beatae laborum voluptates fugit eaque consequatur earum natus ipsum.
            </Accordion>

            <Accordion title='Experience' icon={<FaBriefcase/>}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat ex quos fuga cum enim blanditiis non, nobis a reiciendis repudiandae. Beatae laborum voluptates fugit eaque consequatur earum natus ipsum.
            </Accordion>
            
            <Accordion title='Skills' icon={<FaScroll/>}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat ex quos fuga cum enim blanditiis non, nobis a reiciendis repudiandae. Beatae laborum voluptates fugit eaque consequatur earum natus ipsum.
            </Accordion>
        </div>
    );
}

export default Editor