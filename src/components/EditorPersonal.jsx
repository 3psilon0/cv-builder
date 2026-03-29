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
                />
            </label>
        </div>
    );
}

export default EditorPersonal;
