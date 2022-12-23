import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['uno']);

    const addCategory= (newCategory) => {  
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ... categories]);         
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory  
            onNewCategory ={ addCategory }
            /> 
           
                {categories.map((category) => (
                <GifGrid 
                    key = {category} 
                    category = {category}/>)
                )
                }
        </>
    )
}
