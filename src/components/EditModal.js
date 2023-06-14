import React from "react";
import { FaEdit } from "react-icons/fa";
const EditModal = ({ data, notes, editId, setNotes, setEditId }) => {
  const editHandler = (id) => {
    setEditId(id);
    notes.filter((itm) => {
      document.getElementById("editType").value = itm.type;
      document.getElementById("editDesc").value = itm.desc;
    });
  };

  const updateHandler = () => {
    const updateNotes = notes.map((item) => {
      if (editId === item.id) {
        return {
          ...item,
          type: document.getElementById("editType").value,
          desc: document.getElementById("editDesc").value,
        };
      } else {
        return item;
      }
    });
    console.log(updateNotes);
    setNotes(updateNotes);
  };
  return (
    <div>
      {/* Open the modal using ID.showModal() method */}

      <p
        onClick={() => {
          editHandler(data.id);
        }}
      >
        {" "}
        <FaEdit
          onClick={() => window.my_modal_3.showModal(data.id)}
          className="text-2xl"
        ></FaEdit>
      </p>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg text-blue-600 text-left">
            Edit Ticket Type
          </h3>
          <div className="flex items-center gap-5 my-5">
            <p>Ticket Type</p>
            <input
              name="type"
              id="editType"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex items-center gap-5">
            <p>Description</p>
            <input
              name="desc"
              id="editDesc"
              type="text"
              placeholder="Desc here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex items-center gap-5 ml-44">
            <div className="modal-action">
              <button className="btn">Close</button>
            </div>
            <button
              onClick={updateHandler}
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
    </div>
  );
};

export default EditModal;
