import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import "../index.css";

function EditorSkillList({ skillData, actions }) {
    const skillCards = skillData.map((skillItem) => {
        return (
            <div
                className="flex items-center bg-sky-800/40 rounded-lg border-l-8 border-sky-700 py-2 px-4"
                key={skillItem.id}
                data-skill-id={skillItem.id}
                onClick={(event) => {
                    const button = event.target.closest("button");

                    if (!button) return;

                    switch (button.dataset.buttonType) {
                        case "SkillListDel":
                            actions.delSkill(event.currentTarget.dataset.skillId);
                            break;
                    }
                }}
            >
                <div className="grow">
                    <input
                        className="p-1 mr-4 outline-none"
                        type="text"
                        value={skillItem.skill}
                        placeholder="Type skill here"
                        onChange={(event) => {actions.updateSkill(skillItem.id, event.target.value)}}
                    />
                </div>

                <button
                    className="opacity-70 hover:opacity-100 cursor-pointer"
                    data-button-type={"SkillListDel"}
                >
                    <FaTrash size={"1.1rem"} />
                </button>
                
            </div>
        );
    });

    return (
        <div className="flex flex-col items-center p-4">
            <div className="grid grid-flow-row gap-3 w-full">{skillCards}</div>

            <div className="flex justify-center mt-5">
                <button
                    className="flex items-center gap-1 text-white text-sm bg-sky-600/90 hover:bg-sky-500 rounded-md px-4 py-2 cursor-pointer"
                    onClick={actions.addSkill}
                >
                    <FaPlus />
                    Add
                </button>
            </div>
        </div>
    );
}

export default EditorSkillList;
