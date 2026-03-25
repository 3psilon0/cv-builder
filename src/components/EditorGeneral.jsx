import '../index.css'

function EditorGeneral({data, handleData}) {

    const handleGeneralInput = (event) => {
        const newData = {
            ...data,
        };
        newData.personal[event.currentTarget.getAttribute("id")] = event.currentTarget.value;
        handleData(newData);
    };

    return (
        <div className="grid gap-3 p-5">
            <label htmlFor="name" className="flex flex-col">
                <span className="text-slate-400">Name</span>
                <input
                    className="bg-sky-800/40 rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900"
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleGeneralInput}
                    value={data.personal.name}
                />
            </label>

            <label htmlFor="phone" className="flex flex-col">
                <span className="text-slate-400">Phone</span>
                <input
                    className="bg-sky-800/40 rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900"
                    type="tel"
                    name="phone"
                    id="phone"
                    onChange={handleGeneralInput}
                    value={data.personal.phone}
                />
            </label>

            <label htmlFor="email" className="flex flex-col">
                <span className="text-slate-400">Email</span>
                <input
                    className="bg-sky-800/40 rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900"
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleGeneralInput}
                    value={data.personal.email}
                />
            </label>

            <label htmlFor="profession" className="flex flex-col">
                <span className="text-slate-400">Profession</span>
                <input
                    className="bg-sky-800/40 rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900"
                    type="text"
                    name="profession"
                    id="profession"
                    onChange={handleGeneralInput}
                    value={data.personal.profession}
                />
            </label>

            <label htmlFor="location" className="flex flex-col">
                <span className="text-slate-400">Location</span>
                <input
                    className="bg-sky-800/40 rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900"
                    type="text"
                    name="location"
                    id="location"
                    onChange={handleGeneralInput}
                    value={data.personal.location}
                />
            </label>

            <label htmlFor="aboutme" className="flex flex-col">
                <span className="text-slate-400">About Me</span>
                <textarea
                    className="bg-sky-800/40 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-blue-900"
                    rows={5}
                    name="aboutme"
                    id="aboutme"
                    onChange={handleGeneralInput}
                    value={data.personal.aboutme}
                />
            </label>
        </div>
    );
}

export default EditorGeneral;
