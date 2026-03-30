import '../index.css'

function EditorPersonal({name, phone, email, profession, location, aboutme, updatePersonal}) {

    const handleGeneralInput = (event) => {
        const field = event.currentTarget.id;
        const value = event.currentTarget.value;

        updatePersonal(field, value);
    };

    return (
        <div className="grid gap-4 p-4">
            <label htmlFor="name" className="flex flex-col">
                <span className="text-slate-200">Name</span>
                <input
                    className="bg-[#1b4576] rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900"
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleGeneralInput}
                    value={name}
                    placeholder='Tim Cook'
                />
            </label>

            <label htmlFor="phone" className="flex flex-col">
                <span className="text-slate-200">Phone</span>
                <input
                    className="bg-[#1b4576] rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900"
                    type="tel"
                    name="phone"
                    id="phone"
                    onChange={handleGeneralInput}
                    value={phone}
                    placeholder='+123-456-789'
                />
            </label>

            <label htmlFor="email" className="flex flex-col">
                <span className="text-slate-200">Email</span>
                <input
                    className="bg-[#1b4576] rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900"
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleGeneralInput}
                    value={email}
                    placeholder='tcook@apple.com'
                />
            </label>

            <label htmlFor="profession" className="flex flex-col">
                <span className="text-slate-200">Profession</span>
                <input
                    className="bg-[#1b4576] rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900"
                    type="text"
                    name="profession"
                    id="profession"
                    onChange={handleGeneralInput}
                    value={profession}
                    placeholder='CEO'
                />
            </label>

            <label htmlFor="location" className="flex flex-col">
                <span className="text-slate-200">Location</span>
                <input
                    className="bg-[#1b4576] rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900"
                    type="text"
                    name="location"
                    id="location"
                    onChange={handleGeneralInput}
                    value={location}
                    placeholder='Palo Alto, California'
                />
            </label>

            <label htmlFor="aboutme" className="flex flex-col">
                <span className="text-slate-200">About Me</span>
                <textarea
                    className="bg-[#1b4576]/80 rounded-lg px-2 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-blue-900"
                    rows={5}
                    name="aboutme"
                    id="aboutme"
                    onChange={handleGeneralInput}
                    value={aboutme}
                    placeholder='Visionary CEO of Apple, driving innovation, operational excellence, and a strong commitment to privacy and sustainability while expanding global impact beyond technology.'
                />
            </label>
        </div>
    );
}

export default EditorPersonal;
