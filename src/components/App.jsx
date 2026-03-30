import { useState } from "react";
import { FaGithub, FaPrint } from "react-icons/fa6";
import { usmanRaza } from "../sampleData.js";
import Preview from "./Preview.jsx";
import Editor from "./Editor.jsx";
import "../index.css";

function App() {
    const [data, setData] = useState(
        {
          personal: {
            name: '',
            email: '',
            phone: '',
            location: '',
            profession: '',
            aboutme: ''
          },
          skills: [],
          experience: [],
          education: []
        }
    );

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

    const addSkill = (skill) => {
      const id = crypto.randomUUID();

      setData((prev) => {
          return {
              ...prev,
              skills: [...prev.skills, {id, skill}],
          };
      });
    };

    const handlers = {
        updateGenListItem,
        addGenListItem,
        delGenListItem,
        updatePersonal,
        addSkill,
    };

    return (
        <>
            <div className="flex justify-between h-screen">
                <div className="flex flex-col bg-[#062243] h-full w-135 px-10 py-5 overflow-y-auto print:hidden">
                    <header className="flex justify-between items-center mt-5 mb-8 w-full border-b border-slate-600 pb-6">
                        <h1 className="text-2xl">Simple CV Builder</h1>
                        <div>
                            <button
                                className="text-slate-400 text-lg rounded-lg cursor-pointer"
                                onClick={() => {
                                    window.print();
                                }}
                                title="Print"
                            >
                                <FaPrint />
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
