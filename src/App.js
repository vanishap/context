import {useState} from 'react';
import './App.css';


// prop drilling-- passing state into different components to reach the 
//child component that needs the state.

function App() {
  const [user, setUser] = useState('Vanisha');

  const clickHandler= ()=>{ 
      setUser('Vanisha Paidimarla') 
  }
  return (
    <div className="App">
   <h1>Welcome <span style={{color:'blue'}}>{user}</span>, Happy coding</h1>
   <button onClick={clickHandler}>Change name</button>
   <Component1 user ={user}/>
    </div>
  );
}

const Component1 =({user})=>{
  return (
    <div>
      <h2>Hello Component1</h2>
      <Component2 user ={user}/>
    </div>

  )
}
const Component2= ({user})=>{
  return (
    <div>
      <h2>Hello Component2</h2>
      <Component3 user ={user}/>
    </div>
  )
}
const Component3= ({user})=>{
  return (
    <div>
      <h2>Hello Component3</h2>
      <Component4 user ={user}/>
    </div>
  )
}
const Component4= ({user})=>{
  return (
    <div>
      <h2>Hello Component4</h2>
      <h3>Hope you are enjoying the course {user}</h3>
    </div>
  )
}
export default App;
