import './PaintWindow.css'
import Moveable from 'react-moveable'
import React, { useRef, useState } from 'react'

const Top = () => {
    return (
    <div className='top'>
        <p className='paint-text'>untitled - paint</p>
    </div>
    );
}
function PaintWindow() {
    const targetRef = useRef(null);
    const [frame, setFrame] = useState({
        translateX: 0,
        translateY: 0,
    });

    return (
        <>
            <div 
            ref={targetRef}
            className="paint-window"
            style={{
                transform: `translate(${frame.translateX}px, ${frame.translateY}px)`,
            }}
            >
                <Top />
            </div>

            <Moveable
                target={targetRef.current}
                draggable={true}
                bounds={'window'}
                onDrag={({ target, left, top, delta }) => {
                    setFrame((prev) => ({
                        translateX: prev.translateX + delta[0],
                        translateY: prev.translateY + delta[1],
                    }));
                }}
            />
        </>
    )
}

export default PaintWindow;