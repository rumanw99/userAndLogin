// src/components/SuccessDialog.tsx
import React from 'react';

interface SuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Add a backdrop with opacity */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="bg-white rounded-lg p-6 shadow-md relative"> {/* Add relative positioning */}
        <h2 className="text-2xl font-semibold mb-4">Success!</h2>
        <p>Your process was successful.</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessDialog;
