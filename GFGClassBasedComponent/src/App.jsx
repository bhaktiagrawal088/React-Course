import { useState, Component , memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter1 from './Component/Counter1'
import Counter2 from './Component/Counter2'
class Welcome extends Component{
  render(){
    return(
      <h1>Hi, {this.props.name} Welcome to React world</h1>
    )
  }
}
class App1 extends Component{
  state =  {
    name : "Bhakti",
    count: 0
  }
  render(){
    return(
      <>
      <div>
      <h1>This is {this.state.name}</h1>
        <input  type='text' value = {this.state.name} onChange={(e) => this.setState({name : e.target.value})}  placeholder='Enter your name'/>
      </div>
        <h2>Count - {this.state.count}</h2>
        <button onClick={() => this.setState({count: this.state.count + 1})}> Click me </button>
      </>
    )
  }
}
// class App extends Component{
//   render(){
//     return(
//     <>
//     <Welcome name = "Bhakti Agrawal" />
//     <Counter />
//     </>
//     )
//   }
// }

const Greeting = memo(function Greeting({name}){
  console.log("re-render")
  return (
    <h1>Hi, {name} Welcome to React world</h1>
  )
})
function App() {

  const [name , setName] = useState("")
  const [city, setCity] = useState("")

  

  return (
   <>
    {/* <div>
      <h1>Hi, Higher order Function</h1>
    </div>
    <div >
      <Counter1/>
    </div>
    <div>
      <Counter2/>
    </div> */}

    <div>
      <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)}></input>
    </div>
    <div>
      <input placeholder='city' value={city} onChange={(e) => setCity(e.target.value)}></input>
    </div>
    <Greeting name={name}/>
    
   </>
  )
}

export default App
