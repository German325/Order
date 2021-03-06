import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "./NewOrder.css"


const NewOrder = () => {

        const [order, setOrder] = useState([]);
        const [date, setDate] = useState('')
        const [searchTitle, setSearchTitle] = useState('')
        const [listItems, setListItems] = useState([])
        const [itemsForNewList, setItemsForNewList] = useState([])
        const [products, setProducts] = useState([])
        

        const clickHandlerAddToList = () => {
            setListItems([
                ...listItems,
                {
                    id:Date.now(),
                    title:searchTitle,
                    quantity:1
                }
            ])
            setSearchTitle('') 
            
        }

        const clickHandlerDelete = (id) => {
            const orders = JSON.parse(localStorage.getItem('order'))
            let newOrders = orders.filter((item) => item.id !== id)
            localStorage.setItem('order', JSON.stringify(newOrders))
            setOrder([
                ...newOrders
            ])
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
            setItemsForNewList(listItems)
        } 

        const clickHandlerDeleteItem = (id) => {
            
            const newItemList = listItems.filter((item) => item.id !== id)
            setListItems([
                ...newItemList
            ])
            
        }

        const clickHandlerClear = () => {
            setDate('');
            setListItems([])
        }

        useEffect(()=> {
            const raw = localStorage.getItem('order') || []
            setOrder(JSON.parse(raw))
            console.log(raw)
            
            const productsProd = JSON.parse(localStorage.getItem('prod'))
            
            setProducts([
                ...productsProd
            ])
            //console.log(products)
        },[])
        
        useEffect(() => {
            localStorage.setItem('order', JSON.stringify(order))
        },[order])

        const clickHandlerPlus = () => {
                
        }

        const clickHandlerMinus = () => {
            
        }

        const mappedNewOrders = 
            order.map(el => <div key={el.id} className="saved-order">
                    <button className="deleteBtn" onClick={() => clickHandlerDelete(el.id)}>??????????????</button>
                   <h2 className="saved-order__title">???????????? ????</h2>
                   <p className="saved-order__date">{el.date}</p>
                   <div className="listItems">
                        <ul>
                        {itemsForNewList.map(item=> 
                                <li className="listItems">{item.title}<p></p></li>
                        )} 
                        </ul>
                    </div>
               </div>)


        return(
        <div className="main-container">
            <div className="newOrder">
                <h3 className="add_title">?????????? ????????????</h3>
                <input 
                    type="date" 
                    className="newOrder__date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
                <div className="newOrder__quantity_product">
                    {/* <input
                    className="products_for_order" 
                    type="text" 
                    placeholder="?????????????? ???? ????????????????????????"
                    value={searchTitle}
                    onChange={(event) => setSearchTitle(event.target.value)}
                    /> */}
                    <select 
                    value={searchTitle} 
                    onChange={(event) => setSearchTitle(event.target.value)} 
                    className="products_for_order"><option>??????????????????????</option>
                    {products.map(item => <option  className="products-from-prod">{item.title}</option>)}
                         
                    </select>
                    <button className="add-to-list" onClick={()=>clickHandlerAddToList()} >+</button>
                </div>
                <div className="listItems">
                    <ul>
                    {listItems.map(el=> 
                        <li 
                        className="listItems">{el.title}
                            {/* <span className="quantityBtn">
                            <button onClick={()=>clickHandlerPlus()} className="quantity-plus">+</button>
                            <p className="quantity-title">{el.quantity}</p>
                            <button onClick={clickHandlerMinus} className="quantity-minus">-</button></span> */}
                            <button onClick={() => clickHandlerDeleteItem(el.id)} 
                            className="delete-item">X</button>
                        </li>
                    )} 
                    </ul>
                </div>
                <div className="orders-btn">
                    <button className="save" onClick={clickHandlerSave}>???</button>
                    <button className="delete" onClick={clickHandlerClear}>X</button>
                </div>
            </div>
                        
            <main className="container">
               {mappedNewOrders}
            </main>


            <img className="logo-project" src={"Logo.png"} alt="logo"/>
        </div>
        )
        
}

export default NewOrder;