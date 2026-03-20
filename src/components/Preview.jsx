import '../index.css'
import { FaPhone, FaEnvelopeOpen, FaLocationDot, FaCircle } from 'react-icons/fa6'

function PreviewHeader({name, profession}) {
    return (
        <div className='text-center w-full'>
            {name === null ? null : <h1 className='font-bold text-cv-primary text-5xl tracking-widest mb-2 text-ellipsis overflow-hidden'>{name.toUpperCase()}</h1>}
            {profession === null ? null : <h2 className='text-cv-primary text-lg tracking-wider'>{profession.toUpperCase()}</h2>}
        </div>
    );
}

function Contact({email, phone, location}) {
    if (email === null && phone === null && location === null) {
        return null
    }
    return (
        <section className='flex justify-between items-center gap-5 border-t border-b border-cv-primary my-6 p-4 w-full'>
            {phone === null || phone === '' ? null : 
            <div className='flex items-center gap-4 text-sm text-cv-primary'>
                <FaPhone size="1.4em" />
                {phone}
            </div>
            }

            {location === null || location === '' ? null : 
            <div className='flex items-center gap-4 text-sm text-cv-primary'>
                <FaLocationDot size="1.4em" />
                {location}
            </div>
            }

            {email === null || email === '' ? null : 
            <div className='flex items-center gap-4 text-sm text-cv-primary'>
                <FaEnvelopeOpen size="1.4em" />
                {email}
            </div>
            }
        </section>
    );
}

function AboutMe({aboutme}) {
    if (aboutme === null || aboutme === '') {
        return null
    }
    return (
        <section className='flex flex-col gap-5 my-10'>
            <h2 className='text-xl font-bold border-b border-cv-primary pb-2'>ABOUT ME</h2>
            <p className='text-xs tracking-wide text-justify'>{aboutme}</p>
        </section>
    );
}

function Education({programs}) {
    if(programs.length === 0) {
        return null
    }
    
    return (
        <section className='flex flex-col gap-5 my-10'>
            <h2 className='text-xl font-bold border-b border-cv-primary pb-2'>EDUCATION</h2>
            {
                programs.map((program, index) => {

                    return (
                        <div className='flex justify-start items-start gap-20 text-xs tracking-wide' key={index}>
                            <div className='flex flex-col justify-start items-start gap-2'>
                                <h3 className='font-bold w-25'>{program.from} - {program.to}</h3>
                                <h3 className='w-25'>{program.location}</h3>
                            </div>
                            <div className='flex flex-col justify-center items-start gap-2'>
                                <h3 className='font-bold'>{program.title}</h3>
                                <p>{program.description}</p>
                            </div>
                        </div>

                    );
                })
            }
        </section>
    );
}

function Experience({work}) {
    if(work.length === 0) {
        return null
    }
    
    return (
        <section className='flex flex-col gap-5 my-10'>
            <h2 className='text-xl font-bold border-b border-cv-primary pb-2'>EXPERIENCE</h2>
            {
                work.map((place, index) => {

                    return (
                        <div className='flex justify-start items-start gap-20 text-xs tracking-wide' key={index}>
                            <div className='flex flex-col justify-center items-start gap-2'>
                                <h3 className='font-bold w-25'>{place.from} - {place.to}</h3>
                                <h3 className='w-25'>{place.location}</h3>
                            </div>
                            <div className='flex flex-col justify-center gap-2'>
                                <h3 className='font-bold'>{place.title}</h3>
                                <p>{place.description}</p>
                            </div>
                        </div>

                    );
                })
            }
        </section>
    );
}

function Skills({skills}) {
    if(skills.length === 0) {
        return null
    }

    return (
        <section className='flex flex-col gap-5 my-10'>
            <h2 className='text-xl font-bold border-b border-cv-primary pb-2'>SKILLS</h2>
            <div className='grid grid-cols-4 gap-2 text-xs tracking-wide'>
                {
                    skills.map((skill, index) => {
                        return (
                            <div className='flex items-center gap-3' key={index}>
                                <FaCircle size="0.35rem"/>
                                <p>{skill}</p>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

function Preview({data}) {
    return (
        <div className='bg-[#f9f9f9] text-cv-primary font-Montserrat w-200 min-h-280 p-15 box-border'>
            <PreviewHeader name={data.personal.name} profession={data.personal.profession}/>
            <Contact email={data.personal.email} phone={data.personal.phone} location={data.personal.location} />
            <AboutMe aboutme={data.personal.aboutme} />
            <Education programs={data.education} />
            <Experience work={data.experience} />
            <Skills skills={data.skills} />
        </div>
    );
}

export default Preview;