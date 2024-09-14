import './PaintWindow.css'
import Draggable from 'react-draggable'
import React, { useRef, useState } from 'react'
import minimize from '../../../Content/minimize.svg'
import fullscreen from '../../../Content/fullscreen.svg'
import close from '../../../Content/close.svg'

const Top = () => {
    return (
    <div className='top'>
        <p className='paint-text'>untitled - paint</p>
        <div className='spacer'></div>
        <img src={minimize} className='minimize'/>
        <img src={fullscreen} className='minimize'/>
        <img src={close} className='minimize close'/>
    </div>
    );
}
const PaintWindow = () => {


    return (
        <Draggable bounds='parent'>
            <div className="paint-window">
                <Top />
            </div>
        </Draggable>
    )
}

export default PaintWindow;