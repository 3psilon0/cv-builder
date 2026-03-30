import { useState } from "react";
import { FaGithub, FaPrint } from "react-icons/fa6";
import { spongeBob } from "../sampleData.js";
import Preview from "./Preview.jsx";
import Editor from "./Editor.jsx";
import "../index.css";

function App() {
    const [data, setData] = useState({
        personal: {
            name: "",
            email: "",
            phone: "",
            location: "",
            profession: "",
            aboutme: "",
        },
        skills: [],
        experience: [],
        education: [],
    });

    const updatePersonal = (field, value) => {
        setData((prev) => {
            return {
                ...prev,
                personal: {
                    ...prev.personal,
                    [field]: value,
                },
            };
        });
    };

    const addGenListItem = (section) => {
        const id = crypto.randomUUID();

        setData((prev) => {
            return {
                ...prev,
                [section]: [
                    ...prev[section],
                    {
                        id: id,
                        from: "Before",
                        to: "After",
                        location: "XYZ",
                        title: "Title",
                        description: "Description",
                    },
                ],
            };
        });

        return id;
    };

    const delGenListItem = (section, itemId) => {
        setData((prev) => {
            return {
                ...prev,
                [section]: prev[section].filter((item) => item.id !== itemId),
            };
        });
    };

    const updateGenListItem = (section, itemId, field, value) => {
        setData((prev) => {
            return {
                ...prev,
                [section]: prev[section].map((item) => {
                    if (item.id === itemId) {
                        return {
                            ...item,
                            [field]: value,
                        };
                    } else {
                        return item;
                    }
                }),
            };
        });
    };

    const addSkill = () => {
        setData((prev) => {
            return {
                ...prev,
                skills: [...prev.skills, { id: crypto.randomUUID(), skill: "" }],
            };
        });
    };

    const delSkill = (skillId) => {
        setData((prev) => {
            return {
                ...prev,
                skills: prev.skills.filter((skillItem) => skillItem.id !== skillId),
            };
        });
    };

    const updateSkill = (skillId, value) => {
        setData((prev) => {
            return {
                ...prev,
                skills: prev.skills.map((skillItem) => {
                    if (skillItem.id === skillId) {
                        return {
                            ...skillItem,
                            skill: value,
                        };
                    } else {
                        return skillItem;
                    }
                }),
            };
        });
    };

    const handlers = {
        updateGenListItem,
        addGenListItem,
        delGenListItem,
        updatePersonal,
        addSkill,
        delSkill,
        updateSkill,
    };

    return (
        <>
            <div className="flex justify-between h-screen">
                <div className="flex flex-col bg-[#062243] h-full w-135 px-10 py-5 overflow-y-auto print:hidden">
                    <header className="flex flex-col gap-8 items-center mt-5 mb-8 w-full">
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl tracking-wide">
                                Simple CV Builder <br />
                            </h1>
                            <h2 className="text-slate-400 text-sm italic tracking-wider leading-5 mt-2">
                                Minimalist editor for your resume needs
                            </h2>
                        </div>
                        <div className="flex justify-center items-center gap-5 w-full border-y border-slate-700 py-4">
                            <button
                                className="text-slate-400 border border-slate-600 text-sm tracking-wider rounded-lg cursor-pointer px-2 py-1"
                                onClick={() => {
                                    setData(spongeBob);
                                }}
                                title="Load Sample"
                            >
                                Load Sample
                            </button>

                            <button
                                className="text-slate-100 bg-green-800 text-sm tracking-wider rounded-lg cursor-pointer px-2 py-1"
                                onClick={() => {
                                    window.print();
                                }}
                                title="Print"
                            >
                                Print
                            </button>
                        </div>
                    </header>

                    <Editor data={data} {...handlers} />

                    <footer className="flex justify-center text-sm text-slate-400 mt-5">
                        <h1 className="flex items-center gap-1">
                            Made by{" "}
                            <a
                                className="flex items-center gap-1"
                                href="https://github.com/3psilon0"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {<FaGithub />} 3psilon0
                            </a>{" "}
                        </h1>
                    </footer>
                </div>

                <div className="flex flex-col items-center w-full h-full overflow-y-auto">
                    <div className="py-10 print:p-0">
                        <Preview data={data} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
