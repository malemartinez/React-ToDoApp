import React , {useContext} from "react";
import "./TodoSearch.css"
import { TodoContext } from "./TodoContext";

// antigua forma de hacer componentes en react

/* class componente extends React.Component{
  constructor(){
    this.state = {
      nombre: 'Aleja',
    }
  }

  render(){
    return (
      <div onClick = {()=>this.setState('Mayra')} >{this.state.nombre}</div>
    )
  }
} */





function TodoSearch(){

  // llamanos a useContext para usar las value
  const { searchValue, setSearchValue } = useContext(TodoContext);

  // const [searchValue, setSearchValue]= React.useState('')

  // funcion que me va a cambiar el valor de un atributo
  const onSearchValueChange = (event)=>{
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return(

    <div className='searchContainer'>
      <input 
        value= {searchValue}
        className='searchBox' type = 'text' placeholder='Estudiar Platzi' 
        onChange ={onSearchValueChange}
      />
    </div>
  )
  
}

export { TodoSearch };