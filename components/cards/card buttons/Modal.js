// Modal.js

import React from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";

const Modal = ({ open, setOpen, children }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && ReactDOM.createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex justify-center items-center bg-neutral-950/70"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: "easeInOut" }}
            className="fixed bottom-0 left-0 right-0 top-0 flex justify-center items-center"
          >
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
              {children}
            </div>
          </motion.div>
        </motion.div>,
        document.body // Рендерим в конец body
      )}
    </>
  );
};

export default Modal;
