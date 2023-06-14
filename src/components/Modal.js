import React from "react";

const Modal = () => {
  return (
    <div>
      {/* Open the modal using ID.showModal() method */}
      <button className="btn" onClick={() => window.my_modal_3.showModal()}>
        edit
      </button>
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
          <button type="submit" className="btn">
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

export default Modal;
