import React, { useEffect, useState } from "react";


function Catalog() {
        
    const [prod, setProd] = useState([])
    const [prodTitle, setProdTitle] = useState('')      
        
    const clickHandlerSave = (event) => {
        setProd([
            ...prod,
            {
                id: Date.now(),
                title: prodTitle   
            }
        ])
        setProdTitle('')
        console.log(prod)
    }   
    

    useEffect(()=> {
        const raw = localStorage.getItem('prod') || []
        setProd(JSON.parse(raw))
    },[])
    
    useEffect(()=> {
        localStorage.setItem('prod', JSON.stringify(prod))
    },[prod])


    const clickHandlerDelete = (id) => {
        const cards = JSON.parse(localStorage.getItem('prod'))
        let newCards = cards.filter((item) => item.id !== id)
        localStorage.setItem('prod', JSON.stringify(newCards))
        setProd([
            ...newCards
        ])
    }

    
    
        return(
        <div>
            <div className="add">
                <h3 className="add_title">Добавить</h3>
                <input
                className="nameProduct" 
                type='text' 
                placeholder='Название продукта' 
                value={prodTitle} 
                onChange={event => setProdTitle(event.target.value)}       
                />
                <button className="add_button" onClick={clickHandlerSave}>+</button>
            </div>
            <main >
            <div className="container">
            {prod.map(el => <div key={el.id} className="product">
                <button className="deleteBtn" onClick={()=>clickHandlerDelete(el.id)}>Удалить</button>
                <h2 className="product_name">{el.title}</h2>
               </div> 
            )}
            </div>
            </main>
            <img className="logo-project" src={"Logo.png"} alt="logo"/> 
        </div>
        )
   
}



export default (Catalog);

