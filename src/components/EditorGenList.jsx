import { useState } from "react";
import { FaPen, FaTrash, FaPlus } from "react-icons/fa";
import "../index.css";

function ItemEditor({ item, handleChange, handleClose }) {
    return (
        <div className="flex flex-col gap-4 p-4 px-4 mt-5">
            <label htmlFor="title" className="flex flex-col">
                <span className="text-slate-200">Title</span>
                <input
                    className="bg-[#1b4576] rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900"
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={item.title}
                />
            </label>

            <label htmlFor="location" className="flex flex-col">
                <span className="text-slate-200">Location</span>
                <input
                    className="bg-[#1b4576] rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900"
                    type="text"
                    name="location"
                    onChange={handleChange}
                    value={item.location}
                />
            </label>

            <div className="flex gap-10">
                <label htmlFor="from" className="flex flex-col flex-1 min-w-0">
                    <span className="text-slate-200">From</span>
                    <input
                        className="bg-[#1b4576] rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900 "
                        type="text"
                        name="from"
                        onChange={handleChange}
                        value={item.from}
                    />
                </label>

                <label htmlFor="to" className="flex flex-col flex-1 min-w-0">
                    <span className="text-slate-200">To</span>
                    <input
                        className="bg-[#1b4576] rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900"
                        type="text"
                        name="to"
                        onChange={handleChange}
                        value={item.to}
                    />
                </label>
            </div>

            <label htmlFor="description" className="flex flex-col">
                <span className="text-slate-200">Description</span>
                <textarea
                    className="bg-[#1b4576]/80 rounded-lg p-2 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-blue-900"
                    name="description"
                    rows={5}
                    onChange={handleChange}
                    value={item.description}
                />
            </label>

            <div className="flex justify-center text-xs mt-5">
                <button
                    className="border-2 border-slate-700 hover:bg-slate-800 text-slate-400 text-sm px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md"
                    onClick={handleClose}
                >
                    Close
                </button>

                {/* <button className="border border-red-400 text-red-400 hover:bg-red-200/10 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 active:scale-95" onClick={handleCancel}>
                        Cancel
                    </button> */}
            </div>
        </div>
    );
}

function ItemContainer({ sectionName, itemList, handleAdd, handleEdit, handleDelete }) {
    const itemCards = itemList.map((item) => {
        return (
            <div
                className="flex items-center bg-sky-800/40 rounded-xl border-l-8 border-sky-700 p-4"
                key={item.id}
                data-item-id={item.id}
                onClick={(event) => {
                    const button = event.target.closest("button");

                    if (!button) return;

                    switch (button.dataset.buttonType) {
                        case "ListEdit":
                            handleEdit(event.currentTarget.dataset.itemId);
                            break;
                        case "ListDel":
                            handleDelete(sectionName, event.currentTarget.dataset.itemId);
                            break;
                    }
                }}
            >
                <div className="grow flex flex-col gap-2">
                    <h1 className="text-lg font-bold w-50 overflow-hidden text-ellipsis whitespace-nowrap">{item.title}</h1>
                    <h2 className="text-slate-300 w-50 overflow-hidden text-ellipsis whitespace-nowrap ">{item.location}</h2>
                    <h3 className="text-slate-400 text-xs italic w-50 overflow-hidden text-ellipsis whitespace-nowrap">
                        {item.from} - {item.to}
                    </h3>
                </div>

                <div className="flex flex-col gap-6">
                    <button
                        className="opacity-70 hover:opacity-100 cursor-pointer"
                        data-button-type={"ListEdit"}
                    >
                        <FaPen size={"1.1rem"} />
                    </button>
                    <button
                        className="opacity-70 hover:opacity-100 cursor-pointer"
                        data-button-type={"ListDel"}
                    >
                        <FaTrash size={"1.1rem"} />
                    </button>
                </div>
            </div>
        );
    });

    return (
        <div className="flex flex-col gap-4 p-4">
            {itemCards}
            <div className="flex justify-center mt-5">
                <button className="flex items-center gap-1 text-white text-sm bg-sky-600/90 hover:bg-sky-500 rounded-md px-4 py-2 cursor-pointer" onClick={handleAdd}>
                    <FaPlus />
                    Add
                </button>
            </div>
        </div>
    );
}

function EditorGenList({ sectionName, sectionData, actions }) {
    const [idToBeEdited, setidToBeEdited] = useState(null);

    const startEdit = (itemId) => {
        setidToBeEdited(itemId);
    };
    const stopEdit = () => {
        setidToBeEdited(null);
    };

    const editMode = idToBeEdited !== null;

    if (!editMode) {
        return (
            <ItemContainer
                sectionName={sectionName}
                itemList={sectionData}
                handleAdd={() => {
                    actions.addGenListItem(sectionName);
                }}
                handleEdit={startEdit}
                handleDelete={actions.delGenListItem}
            />
        );
    } else {
        return (
            <ItemEditor
                item={sectionData.find((item) => item.id === idToBeEdited)}
                handleChange={(event) => {
                    const field = event.currentTarget.getAttribute("name");
                    const value = event.currentTarget.value;

                    actions.updateGenListItem(sectionName, idToBeEdited, field, value);
                }}
                handleClose={stopEdit}
            />
        );
    }
}

export default EditorGenList;
