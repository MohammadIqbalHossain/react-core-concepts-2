import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: "laptop", price: 47534},
    {name: "Mobile", price: 957},
    {name: "watch", price: 9859},
    {name: "Tablet", price: 7598},
    {name: "PC", price: 57983475},
  ]
  return (
    <div className="App">
     {/* <Product name="Laptop" description="this is a great computer"></Product> */}

     {
       products.map(product => <Product name={product.name} price={product.price}></Product>)
     }
    </div>
  );
}


function Product(props) {
  
  return (
    <div className='product'>
      <h1>Name: {props.name}</h1>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
