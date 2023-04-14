 const handleCopy=()=>{
    var text=document.getElementById("Mybox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Coppied to clipboard!","success")

  }