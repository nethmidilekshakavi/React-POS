import './dialog.css';
import './dialog.css'
import React from "react";

interface DialogProps{
    title:string
    children:React.ReactNode
}

const Dialog = ({title,children} : DialogProps) => {
    return (
        <div className="dialog-backdrop">
            <div className="dialog-box">
                <div className="dialog-header">
                    <h2>{title}</h2>

                </div>

                <div className="dialog-body">
                    <p>{children}</p>

                </div>
            </div>

            <Dialog title={"Add Customer Form"} children={"This is Customer Form"}></Dialog>

        </div>



    );
};

export default Dialog;
