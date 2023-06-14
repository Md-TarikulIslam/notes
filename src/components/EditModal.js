import React from "react";

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
    console.log(updateNotes)
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
        <button
          className="btn"
          onClick={() => window.my_modal_3.showModal(data.id)}
        >
          edit
        </button>
      </p>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Update</h3>
          <input
            name="type"
            id="editType"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            name="desc"
            id="editDesc"
            type="text"
            placeholder="Desc here"
            className="input input-bordered w-full max-w-xs"
          />
          <button onClick={updateHandler} type="submit" className="btn">
            Submit
          </button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default EditModal;
