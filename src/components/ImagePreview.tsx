import React from 'react';

interface ImagePreviewModalProps {
  image: string | null;
  onClose: () => void;
}

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
        <button
          className="absolute -top-12 -right-12 m-2 text-gray-100 hover:text-gray-400 border border-1 rounded-full p-1"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="Preview" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ImagePreviewModal;
