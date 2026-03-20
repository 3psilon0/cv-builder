import { useState } from 'react';
import { FaAngleDown, FaCircleUser, FaGraduationCap } from 'react-icons/fa6';
import '../index.css'


function Accordion({title, icon, children}) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='bg-[#051E3A] w-full rounded-lg p-5'>

            <div className='flex items-center gap-4'>
                <button onClick={() => {setIsOpen(!isOpen)}} className='rounded-lg cursor-pointer'>
                    <FaAngleDown className={`${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className='flex items-center gap-3'>
                    {icon}
                    <h2 className='text-lg'>{title}</h2>
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
    
    const handleGeneralInput = (event) => {
        const newData = {
            ...data
        }
        newData.personal[event.currentTarget.getAttribute("id")] = event.currentTarget.value;
        handleData(newData);
    }
    

    return (
        <div className='flex flex-col gap-5'>
            <Accordion title='General Information' icon={<FaCircleUser/>}>
                <div className='grid gap-3 p-5'>
                    <label htmlFor="name" className='flex flex-col'>
                        <span>Name</span>
                        <input className='outline-0 border-2 border-sky-900 rounded-lg p-1 mt-2' type="text" name='name' id='name' onChange={handleGeneralInput} value={data.personal.name} />
                    </label>

                    <label htmlFor="phone" className='flex flex-col'>
                        <span>Phone</span>
                        <input className='outline-0 border-2 border-sky-900 rounded-lg p-1 mt-2' type="tel" name='phone' id='phone' onChange={handleGeneralInput} value={data.personal.phone} />
                    </label>

                    <label htmlFor="email" className='flex flex-col'>
                        <span>Email</span>
                        <input className='outline-0 border-2 border-sky-900 rounded-lg p-1 mt-2' type="email" name='email' id='email' onChange={handleGeneralInput} value={data.personal.email} />
                    </label>

                    <label htmlFor="profession" className='flex flex-col'>
                        <span>Profession</span>
                        <input className='outline-0 border-2 border-sky-900 rounded-lg p-1 mt-2' type="text" name='profession' id='profession' onChange={handleGeneralInput} value={data.personal.profession} />
                    </label>

                    <label htmlFor="location" className='flex flex-col'>
                        <span>Location</span>
                        <input className='outline-0 border-2 border-sky-900 rounded-lg p-1 mt-2 col-span-full' type="text" name='location' id='location' onChange={handleGeneralInput} value={data.personal.location} />
                    </label>


                    <label htmlFor="aboutme" className='flex flex-col'>
                        <span>About Me</span>
                        <textarea className='outline-0 border-2 border-sky-900 rounded-lg p-2 mt-2 col-span-full' rows={5} name='aboutme' id='aboutme' onChange={handleGeneralInput} value={data.personal.aboutme} />
                    </label>
                    
                </div>
            </Accordion>

            <Accordion title='Education' icon={<FaGraduationCap/>}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat ex quos fuga cum enim blanditiis non, nobis a reiciendis repudiandae. Beatae laborum voluptates fugit eaque consequatur earum natus ipsum.
            </Accordion>

            <Accordion title='General Information'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat ex quos fuga cum enim blanditiis non, nobis a reiciendis repudiandae. Beatae laborum voluptates fugit eaque consequatur earum natus ipsum.
            </Accordion>
            
            <Accordion title='General Information'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat ex quos fuga cum enim blanditiis non, nobis a reiciendis repudiandae. Beatae laborum voluptates fugit eaque consequatur earum natus ipsum.
            </Accordion>
        </div>
    );
}

export default Editor