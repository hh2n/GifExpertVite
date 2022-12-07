import { useState } from "react"
import {AddCategory} from './components/AddCategory'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Drgon Ball'])
    const onAddCategory = ( newCategory ) => {
        setCategories([ newCategory , ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                /* setCategories={setCategories}  */
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                {
                    categories.map( category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}

