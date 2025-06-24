import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter ,setcounter] = useState(15);

  const valueadd=()=>{
    console.log('hello')
    if(counter < 20){
      setcounter(counter+1)
    }
  }
  const removevalue=()=>{
  
   if(counter > 0){
    setcounter(counter-1)
   }

  } 
  return (
    <>
     <h1>helllo ji ! i am anjali</h1>
     <h2>counter value : {counter}</h2>

     <button onClick={valueadd}>Add value {counter}</button>
     <br></br>
     <button onClick={removevalue}>Remove value {counter}</button>
    </>
  )
}

export default App
