import {useState, createContext, useContext} from 'react';

const UserContext = createContext();
 
// state is maintained using create context and used only by the particular 
// component that requires the state.
const App1 =()=>{
    const [name, setName] = useState('Madhan')
    return (
        <div>
            <UserContext.Provider value = {name}>
                <p>Hello {name}</p>
                <button onClick={()=>setName('Madhan Paidimarla')}>Click</button>
                <ChildComponent />
            </UserContext.Provider>
        </div>
    )
}

const ChildComponent = ()=>{
    return (
        <div>
            <p>Child Component</p>
            <ChildComponent1 />
        </div>
    )
}

const ChildComponent1 = ()=>{
    return (
        <div>
            <p>Child Component1</p>
            <ChildComponent2 />
        </div>
    )
}

const ChildComponent2 = ()=>{
    const name = useContext(UserContext);
    return (
        <div>
            <p>Child Component2</p>
            <p>Finally you have reached the destination component {name}</p>  
        </div>
    )
}
export default App1;