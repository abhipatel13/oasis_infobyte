import { useState } from 'react';
import './List.css';
function List(props) {

    
    
    const [isedititem,setIsedititem] = useState();
    const deleteItem = key => {

        const newList = props.itemList.filter(itemObj => {
            return itemObj.key !== key});
        props.updateItemList(newList);
    }

    // const addItem = key =>{
    //     // const filterList = props.itemList.filter(itemObj => {itemObj.key !== key});
    //     const selectedList = props.itemList.filter(itemObj =>{
            
    //       return itemObj.key = key
           
    //     })
    //     // settogglesubmit(false);
    //     setIsedititem(key);
    //     console.log(selectedList);
    // }


    return <div>
        {props.itemList.map((itemObj) => {
            return <div>
                       

                <div className="addedItem">     
              <p>{itemObj.item}</p>
                {/* <button className="ListButton" onClick = {() => addItem(itemObj.key)}>E</button> */}
                    <button className="ListButton" onClick={() => deleteItem(itemObj.key)}>X</button>
                </div>



            </div>
        })}
    </div>
}

export default List;