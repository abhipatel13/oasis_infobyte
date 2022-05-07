import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import List from './List';

function App() {
const [currentItem,setCurrentItem] = useState(null);
const [itemList,updateItemList] = useState([]);
// const [togglesubmit,settogglesubmit] = useState(true);

const onChangeHandler = (e) =>{

  console.log(e.target.value);
  setCurrentItem(e.target.value);

};

const addItemToList = () =>{
  if(currentItem=="")
  {
    alert("Please Add Some Item");
  }

  else {
  updateItemList([...itemList,{item : currentItem , key : Date.now() }]);
  }
  console.log("List Items",itemList);
};

  return (
    <div className="App">
      <header className="App-header">
    
      <div className="Wrapper">
      <h1>TODO APP</h1>
        <div className="Input-wrapper">
          <input value={currentItem} onChange={onChangeHandler} placeholder="Add ToDo"/> 
         <button onClick={addItemToList}>ADD</button> 
          
        </div>
        <List itemList={itemList} currentItem={currentItem} updateItemList={updateItemList}/>
     
      </div>
      </header>
    </div>
  );
}

export default App;
