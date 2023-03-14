import React, { useState } from 'react'


export default function TextForm(props) {
    const [Text, setText] = useState('');
    const handleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLoClick = () => {
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        var newText = document.getElementById('myBox')
        newText.select()
        navigator.clipboard.writeText(newText.value)
        props.showAlert("copied to Clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Remove!", "success")
    }

    return (
        <>
            <div className='container' style={{color: props.mode === 'dark'?'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" onChange={handleOnChange} value={Text} style={{backgroundColor: props.mode === 'dark'?'grey' : 'white', color: props.mode === 'dark'?'white' : 'black'}} rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button> 
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button> 
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
            </div>
            <div className="container" style={{color: props.mode === 'dark'?'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p>{Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").length} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text:"Enter Text above textBox "}</p>
            </div>
        </>
    )
}
