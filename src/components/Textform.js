import React,{useState} from 'react'


export default function Textform(props) {
  const handleupClick =()=>{
    //console.log("Uppercase was clicked");
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase!","success")
  }
  const handlelowerClick=() =>{
    let newText=text.toLowerCase()
    setText(newText);
    props.showAlert("Converted to lowercase!","success")
  }
  const handleclearClick=()=>{
    let newText=""
    setText(newText)
    props.showAlert("Textbox cleared!","success")
  }
  const handleCopy=()=>{
    var text=document.getElementById("Mybox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Coppied to clipboard!","success")

  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space removed!","success")
  }

  const handleOnchange = (event)=>{
    //console.log("on change");
    setText(event.target.value)
  }
  const [text,setText]=useState("");

  return (
    <>
    <div className="container" style={{color:props.mode==="dark"? "white":"#042743"}}>

        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==="dark"? "grey":"white" ,color:props.mode === 'dark' ? 'white':'#042743'}} id="Mybox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleupClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handlelowerClick}>convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleclearClick}>clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>

      
    </div>

    <div className="container my-3" style={{color:props.mode === "dark" ? "white":"#042743"}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"Enter something in the textbox above to preview here"}</p>
    </div>
    </>
    
  )
}
