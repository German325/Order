import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "./NewOrder.css"


const NewOrder = () => {

        const [order, setOrder] = useState([]);//изменить на множ число
        const [date, setDate] = useState('')
        // const [product, setProducts] = useState(localStorage.getItem('prod'))
        const [searchTitle, setSearchTitle] = useState('')
        const [listItems, setListItems] = useState([])
        
        // const getProducts = () => {
        //     const productName =  JSON.parse(localStorage.getItem('prod'))
        //     setProducts([
        //         ...productName.title
        //     ])
        
        // }

        const clickHandlerDelete = (id) => {
            const orders = JSON.parse(localStorage.getItem('order'))
            let newOrders = orders.filter((item) => item.id !== id)
            localStorage.setItem('order', JSON.stringify(newOrders))
            setOrder([
                ...newOrders
            ])
        }

        const clickHandlerAddToList = () => {
            setListItems([
                ...listItems,
                {
                    title:searchTitle
                }
            ])
            setSearchTitle('')
            
        }

        

        const clickHandlerSave = () => {
            setOrder([
                ...order,
                {
                    id:Date.now(),
                    date: date,
                    products:[...listItems]
                }
            ])
            setDate('')
           
        } 

        const clickHandlerDeleteItem = (id) => {
            
            const newItemList = listItems.filter((item) => item.id !== id)
            setListItems([
                ...newItemList
            ])
            
        }

        // const changeHandlerSearch = () => {
        //     fetch(`http://localhost:5000/products`)
        //     .then(res => res.json())
        //     .then((data)=>{
        //         console.log(data)
        //     })
        // }
        //onChange={(event)=>changeHandlerSearch(event.target.value)}


        useEffect(()=> {
            const raw = localStorage.getItem('order') || []
            setOrder(JSON.parse(raw))
            console.log(raw)
        },[])

        useEffect(() => {
            localStorage.setItem('order', JSON.stringify(order))
        },[order])


        return(
        <div>
            <div className="newOrder">
                <h3 className="add_title">Новая заявка</h3>
                <input 
                type="date" 
                className="newOrder__date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                />
                <div className="newOrder__quantity_product">
                <input
                className="products_for_order" 
                type="text" 
                placeholder="выбрать из ассортимента"
                value={searchTitle}
                onChange={(event) => setSearchTitle(event.target.value)}
                />
                <button className="add-to-list" onClick={()=>clickHandlerAddToList()} >+</button>
                {/* <button className="quantity_product__plus">+</button>
                <button className="quantity_product__minus">-</button> */}
                </div>
                <div className="listItems">
                <ul>
                   {listItems.map(el=> 
                        <li>{el.title}<button onClick={() => clickHandlerDeleteItem(el.id)} className="delete-item">X</button></li>
                   )} 
                </ul>
                </div>
                <div className="orders-btn">
                <button className="save" onClick={clickHandlerSave}>✓</button>
                <button className="delete">X</button>
                </div>
            </div>

            <main className="container">
               {order.map(el => <div key={el.id} className="saved-order">
                    <button className="deleteBtn" onClick={() => clickHandlerDelete(el.id)}>Удалить</button>
                   <h2 className="saved-order__title">Заявка на</h2>
                   <p className="saved-order__date">{el.date}</p>
                   <div className="listItems">
                        <ul>
                        {listItems.map(el=> 
                                <li>{el.title}</li>
                        )} 
                        </ul>
                    </div>
               </div>)} 
            </main>

            <img className="logo-project" src={"Logo.png"} alt="logo"/>
        </div>
        )
        
}

export default NewOrder;