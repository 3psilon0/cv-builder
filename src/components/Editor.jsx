import { useState } from "react";
import { FaAngleDown, FaCircleUser, FaGraduationCap, FaBriefcase, FaScroll } from "react-icons/fa6";
import EditorPersonal from "./EditorPersonal";
import EditorGenList from "./EditorGenList";
import "../index.css";
import EditorSkillList from "./EditorSkillList";

function Accordion({ title, icon, open = false, children }) {
    const [isOpen, setIsOpen] = useState(open);

    return (
        <div className="bg-[#061c34] border-2 border-sky-950 w-full rounded-xl p-4">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    className="rounded-lg cursor-pointer"
                >
                    <FaAngleDown
                        className={`transition-all duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
                    />
                </button>
                <div className="flex items-center gap-3">
                    {icon}
                    <h2 className="text-lg font-semibold">{title}</h2>
                </div>
            </div>

            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className=" overflow-hidden text-slate-300 text-sm">{children}</div>
            </div>
        </div>
    );
}

function Editor({ data, updatePersonal, addGenListItem, delGenListItem, updateGenListItem, addSkill, delSkill, updateSkill }) {
    return (
        <div className="grow-2 flex flex-col gap-5">
            <Accordion title="General Information" icon={<FaCircleUser />} open={true}>
                <EditorPersonal {...data.personal} updatePersonal={updatePersonal} />
            </Accordion>

            <Accordion title="Education" icon={<FaGraduationCap />}>
                <EditorGenList
                    sectionName="education"
                    sectionData={data.education}
                    actions={{ addGenListItem, delGenListItem, updateGenListItem }}
                />
            </Accordion>

            <Accordion title="Experience" icon={<FaBriefcase />}>
                <EditorGenList
                    sectionName="experience"
                    sectionData={data.experience}
                    actions={{ addGenListItem, delGenListItem, updateGenListItem }}
                />
            </Accordion>

            <Accordion title="Skills" icon={<FaScroll />}>
                <EditorSkillList
                    skillData={data.skills}
                    actions={{addSkill, delSkill, updateSkill}}
                />
            </Accordion>
        </div>
    );
}

export default Editor;
