import React, { useState } from "react";
import EditModal from "../EditModal";
import "./Notes.css";
import { FaTrash } from "react-icons/fa";
import img from "../../assets/images/a.jpg";

const Notes = () => {
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState(getNotesFromLocal);
  const [editId, setEditId] = useState("");

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
  const removeHandler = (id) => {
    const newNotes = notes.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setNotes(newNotes);
  };
  return (
    <div className="notes-area rounded-lg">
      <div className="avatar relative left-3/4">
        <div className="w-20 rounded-full">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="total-area">
        <div className="sub-area">
          {/* modal button  */}
          <button
            className="btn relative left-3/4 mb-5 bg-blue-700 text-white hover:bg-blue-600"
            onClick={() => window.my_modal_2.showModal()}
          >
            Add ticket type
          </button>
          <dialog id="my_modal_2" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg text-blue-600">
                Add Ticket Type
              </h3>
              <div className="flex items-center gap-5 my-5">
                <p>Ticket Type</p>
                <input
                  name="type"
                  id="type"
                  type="text"
                  value={type}
                  placeholder="Type here"
                  onChange={inputHandler}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="flex items-center gap-5">
                <p>Description</p>
                <input
                  name="desc"
                  id="desc"
                  type="text"
                  value={desc}
                  onChange={inputHandler}
                  placeholder="Description here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="flex items-center gap-5 ml-44">
                <div className="modal-action">
                  <button className="btn">Close</button>
                </div>
                <button
                  onClick={addInfoHandler}
                  type="submit"
                  className="btn bg-blue-600 text-white mt-6"
                >
                  Add ticket type
                </button>
              </div>
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          {/* table */}
          <div className="overflow-x-auto table-area ">
            <table className="table bg-white rounded-none table-zebra text-center">
              {/* head */}
              <thead className="bg-blue-100 text-blue-600 ">
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
                      <div className="flex gap-5 mt-2 justify-center">
                        <EditModal
                          data={data}
                          notes={notes}
                          setNotes={setNotes}
                          editId={editId}
                          setEditId={setEditId}
                        />
                        <div className="tooltip  tooltip-error" data-tip="Are You Sure To Delete?">
                          <FaTrash
                            className="text-2xl"
                            data-tip="hello"
                            onClick={() => {
                              removeHandler(data.id);
                            }}
                          ></FaTrash>
                        </div>
                      </div>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* pagination  */}
          <div className="join relative left-3/4 mt-5">
            <button className="join-item btn">«</button>
            <button className="join-item btn">1</button>
            <button className="join-item btn">»</button>
          </div>
        </div>
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
