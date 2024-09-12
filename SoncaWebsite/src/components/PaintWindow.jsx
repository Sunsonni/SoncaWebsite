import './PaintWindow.css'

const Top = () => {
    return (
    <div className='top'>
        <p className='paint-text'>Apples and oranges</p>
    </div>
    );
}

const PaintWindow = () => {
    return (
        <div className="paint-window">
            <Top />
            <h1>Hello</h1>
        </div>
    )
}

export default PaintWindow;