// Code EyesOnMe Component Here

function handleBlur(event){
    console.log('Hey! Eyes on me!')
}

function handleFocus(event){
    console.log('Good!')
}

function EyesOnMe(){
   return( <button onBlur={handleBlur} onFocus={handleFocus} >Eyes on me</button>
)}

export default EyesOnMe;