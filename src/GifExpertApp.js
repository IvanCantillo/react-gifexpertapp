import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState([{id: new Date().getTime(), name: 'Shingeki No Kyojin'}]);

    return (
        <>
            <h1> GifExpertApp </h1>   
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                { 
                    categories.map( ({id, name}) => (
                        <GifGrid 
                            key={id}
                            category={name}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
