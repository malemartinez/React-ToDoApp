import React, {useState} from 'react';
//import { useState } from 'react/cjs/react.production.min';


function useLocalStorage (itemName , initialValue){

  const [ item, setItem ]= React.useState(initialValue)
  const [ loading, setLoading] = useState(true)
  const [ error, setError] = useState(false)

  React.useEffect( () =>{
    setTimeout(()=>{
      try {
            //persistencia de datos en el local storage
          const LocalStorageItem = localStorage.getItem(itemName)
          let parsedItem;
          if (!LocalStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(LocalStorageItem);
        }
            setItem(parsedItem)
            setLoading(false)

      } catch (error) {
        setError(error)
        setLoading(false)
      }
  
      
    }, 2000)
  } )


  //funcion auxiliar para guardar en el local storage
  const saveItem = (newItem)=>{

    try {
      const stringifyItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifyItem);
      setItem(newItem )
      
    } catch (error) {

        setError(error)
    }
  }

  return { item , saveItem , loading , error}

}

export { useLocalStorage };