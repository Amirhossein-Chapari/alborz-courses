import React from 'react';

const Alert = ({ message, onClose }) => {
    return (
        <div className="fixed top-5 inset-x-0 flex justify-center z-50">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-xs w-full shadow-lg" role="alert">
                <span className="block sm:inline">{message}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg 
                        className="fill-current h-6 w-6 text-red-500 cursor-pointer" 
                        role="button" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        onClick={onClose}
                    >
                        <title>Close</title>
                        <path d="M14.348 14.849a.5.5 0 01-.707 0L10 11.207l-3.641 3.642a.5.5 0 01-.707-.707L9.293 10.5 5.651 6.859a.5.5 0 11.707-.707L10 9.793l3.641-3.641a.5.5 0 01.707.707L10.707 10.5l3.641 3.641a.5.5 0 010 .708z"/>
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default Alert;
