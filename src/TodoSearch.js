import "./TodoSearch.css"
function TodoSearch() {
  return <input
  placeholder="Cortar cebolla"
  className="TodoSearch"
  onChange={(evento)=>{
    console.log(evento.target.value)
  }}
  />;
}

export { TodoSearch };
