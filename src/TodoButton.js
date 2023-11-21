import React from "react";
import "./TodoButton.css"

function CreateTodoButton() {
  return <button className="TodoButton"
    onClick={()=>console.log("Hizo click en el botón")}
  >+</button>;
}

export { CreateTodoButton };