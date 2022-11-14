import React from 'react';

const Modal = ({title, children, onClose, ...props}) => {
  return (
    <div
      className="top-0 left-0 w-screen h-screen z-50 fixed bg-[rgba(0,0,0,.7)] pt-[2%] flex flex-col-reverse justify-center content-center items-center"
      onClick={onClose}
    >
      <div className="flex flex-col p-4 w-[95%] animate-[fromBottom_0.4s] h-auto max-h-[95vh] max-w-[600px] relative overflow-hidden rounded m-4 bg-darkerShade"
        onClick={e => e.stopPropagation()} {...props}>
        {onClose &&
          <span className="absolute top-1 right-2 text-4xl opacity-80 cursor-pointer hover:opacity-100 z-10"
            onClick={onClose}
          >
            &times;
          </span>
        }
        <div className="relative min-h-[4rem] h-[4rem]">
          <div className="m-0 text-center text-3xl">
            {title}
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal