import React, { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="w-10 h-14 bg-white rounded-lg shadow-lg flex items-center justify-center focus:outline-none border border-gray-300">
          <span className="text-black font-bold text-40">i</span>
        </button>
      )}

      {isOpen && (
        <div className="absolute bottom-12 right-0 bg-white p-4 rounded-lg shadow-lg w-64 border border-gray-300 z-50">
          <div className="flex justify-between items-center">
            <p className="text-sm mb-2 font-bold text-red-600">Hubungi kami</p>
            <button onClick={() => setIsOpen(false)} className="text-black font-bold focus:outline-none">
              ×
            </button>
          </div>
          <p className="text-sm mb-2">melalui IG atau WA</p>
          <div className="flex space-x-2">
            <a href="https://instagram.com/your-account" target="_blank" rel="noopener noreferrer" className="text-pink-600">
              <FaInstagram size={24} />
            </a>
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="text-green-600">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactButton;
