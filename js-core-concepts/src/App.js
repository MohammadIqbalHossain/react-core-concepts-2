import logo from './logo.svg';
import './App.css';



function App() {
  const nayoks = ['skip khan', 'BappaRaz', 'sakib khan', 'Riaz', 'Amir khan'];

  const randomMan = [
    {name: "Kkan banu", isHealthy: true, job: 'athlete'},
    {name: "akabr", isHealthy: true, job: 'Great king'},
    {name: "Shah jahan", isHealthy: false, job: 'king'},
    {name: "Jalil uddin", isHealthy: 'Yes', job: 'Shahen shah'},
    {name: "Babar", isHealthy: 3950, job: 'father of kings'},
  ]
  return (
    <div className="App">
     {
      nayoks.map(nayok => <Person name={nayok}></Person>)
     }
     <h1>This is different fragment</h1>
     {
       randomMan.map(king => <Person name={king.name} job={king.job} health={king.isHealthy}></Person>)
     }

      <h1>This is also different fragment</h1>
      <p>This is first component</p>
      <Person name="khan saheb" job="nothing"></Person>
      <Person name="Abul" job="remitance"></Person>
      <Person name="Kabir sing" job="Doctor"></Person>
    
    


      <p>This is last component</p>
      <Friend descrip="This is for learning"></Friend>
      <Friend descrip="This is for practicing"></Friend>

      
 
    </div>
  );
}


function Person(props) {
 console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.job}</p>
      <h4>{props.health}</h4>
   </div>
   
  )
}


function Friend(props) {
  return (
    <div className="container">
      <h1>{props.descrip}</h1>
      <p>Plase try to find me out</p>
    </div>
  )
}

export default App;
