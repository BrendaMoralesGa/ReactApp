import { useState } from 'react'; 

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setinputValue] = useState('One'); 

  const onInputChange = ({target}) =>{
    setinputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault(); 
    if(inputValue.trim().length <= 1) return; 
    onNewCategory(inputValue)
    setinputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
        <input
          type='text'
          placeholder='Buscar gifs'
          value={ inputValue } 
          onChange  ={ onInputChange }
        />
    </form>
  )

}
