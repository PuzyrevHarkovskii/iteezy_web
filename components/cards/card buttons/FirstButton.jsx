// FirstButton.js

import React, { useState } from "react";
import Modal from "./Modal";

const FirstButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="rounded bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600"
      >
        Open drawer
      </button>

      <Modal open={open} setOpen={setOpen}>
        <h2 className="text-4xl font-bold text-neutral-200">
          Drag the handle at the top of this modal downwards 100px to close it
        </h2>
        {/* Добавьте остальной контент модального окна */}
      </Modal>
    </div>
  );
};

export default FirstButton;
