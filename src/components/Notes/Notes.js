import React, { useState } from "react";
import Modal from "../Modal";

const Notes = () => {
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState(getNotesFromLocal);

  localStorage.setItem("notes", JSON.stringify(notes));

  const inputHandler = (e) => {
    if (e.target.id === "type") {
      setType(e.target.value);
    } else {
      setDesc(e.target.value);
    }
  };
  const addInfoHandler = (e) => {
    e.preventDefault();
    if (type !== "" && desc !== "") {
      setNotes((note) => {
        return [
          ...note,
          {
            type: type,
            desc: desc,
            id: Math.random(),
          },
        ];
      });
    }
    setType("");
    setDesc("");
  };
  const removeHandler =(id)=>{
   const newNotes= notes.filter((item)=>{
        if(item.id!==id){
            return item
        }
    })
    setNotes(newNotes)
  }
  return (
    <div>
      <div>
        <button className="btn" onClick={() => window.my_modal_2.showModal()}>
          Add new
        </button>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <input
              name="type"
              id="type"
              type="text"
              value={type}
              placeholder="Type here"
              onChange={inputHandler}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="desc"
              id="desc"
              type="text"
              value={desc}
              onChange={inputHandler}
              placeholder="Desc here"
              className="input input-bordered w-full max-w-xs"
            />
            <button onClick={addInfoHandler} type="submit" className="btn">
              Submit
            </button>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Ticket Type</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.type}</td>
                  <td>{data.desc}</td>
                  <Modal />
                  <button onClick={()=>{removeHandler(data.id)}} className="btn">delete</button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
  function getNotesFromLocal() {
    const note = JSON.parse(localStorage.getItem("notes"));
    if (!note) {
      setNotes([]);
    } else {
      return note;
    }
  }
};

export default Notes;
