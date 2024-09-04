import React from "react";

const Modal = ({ children }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out hover:opacity-90"
    role="dialog"
    aria-modal="true"
  >
    <div className="bg-white p-6 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105">
      {children}
    </div>
  </div>
);

export default Modal;
