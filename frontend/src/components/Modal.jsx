import React from 'react'

export default function Modal({isVisible, close, children}) {  

    const handleClose = (e) => {
        e.target.id === "wrapper"  && close() 
    }

    if(!isVisible) return; 

    return (
        <div className = "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" 
        id = "wrapper" onClick = {(e) => {handleClose(e)}}> 
            <div className = "w-full max-w-3xl flex flex-col px-3"> 
                <div className="flex justify-end items-center w-full">  
                    <button onClick = {() => {close()}}><i className="fa-solid fa-xmark text-xl text-white"></i></button>
                </div>

                <div className="bg-white cursor-default rounded-md my-3">
                    {children} 
                </div>
            </div>
        </div>
  )
}
