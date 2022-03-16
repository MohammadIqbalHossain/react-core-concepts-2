import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
  <div className="App">
     {/* <Counter></Counter> */}
     <NewUsers></NewUsers>
    
  </div>
  );
}


function UserData(props) {
  return (
    <div style={{border: '1px solid red', backgroundColor: "yellow", margin: "20px", padding: "10px", borderRadius: "10px"}}>
     <h2>{props.name}</h2>
     <p>{props.email}</p>
    </div>
  )
}





function NewUsers() {

  const [users, setUsers] = useState([]);
useEffect( () => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data))
}, [])
  

  return (
    <div>
      <h2>External Users</h2>
      <h1>{users.length}</h1>
      {
        users.map(user => <UserData name={user.name} email={user.email}></UserData>)
      }
    </div>
  )
}





function Counter() {
  const [count, setCount] = useState(0);
  const increseBtn = () =>  setCount( count + 1);
  const descreaseBtn = () => setCount(count - 1);
   
   

  // const increseBtn = () => {
  //   const newCount = count + 1;
  //   setCount(newCount)
  // }

  return (
    <div>
       <h1>Count: {count}</h1>
       <button onClick={increseBtn}>Increase</button>
       <button onClick={descreaseBtn}>Increase</button>
    </div>
  )
}




export default App;






// function Product(props) {
  
//   return (
//     <div className='product'>
//       <h1>Name: {props.name}</h1>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }






//This is reserved for revision.

// const products = [
//   {name: "laptop", price: 47534},
//   {name: "Mobile", price: 957},
//   {name: "watch", price: 9859},
//   {name: "Tablet", price: 7598},
//   {name: "PC", price: 57983475},
// ]
// return (
//   <div className="App">
//    {/* <Product name="Laptop" description="this is a great computer"></Product> */}

//    {
//      products.map(product => <Product name={product.name} price={product.price}></Product>)
//    }
//   </div>