import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number , setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenertor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(setNumber) str += '0123456789'
    if(setCharacter) str += '!@#$%^&*(){}~_+=[]'

    for(let i =1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, number, character, setPassword])

  const CopyPasswordToClibboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(()=> {
    passwordGenertor()
  } , [length, number, character, passwordGenertor])
  return (
    <>
      <h1 className="bg-yellow-600 justify-center shadow-xl text-center text-4xl px-2 py-3 bottom-4xl">
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto overflow-hidden shadow-md round-lg px-4 py-3 my-8 rounded-3xl bg-purple-600">
        <div className="flex rounded-lg overflow-hidden m-4">
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
            className="outline-none w-full py-1 px-3  "
          />
          <button 
          onClick={CopyPasswordToClibboard}  disabled={true}
          className="outline-none  bg-blue-700 text-white px-3 py-0.5  shrink-0">
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range" 
            min={6} 
            max={100}
            value={length} 
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex text-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked = {number}
            id='numberInput'
            onChange={() => {
              setNumber((prev) => !prev)
            }}/>
            <label htmlFor='numberInput'>Number</label>
          </div>

          <div className='flex text-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked = {character}
              id = 'characterInput'
              onChange={() => {
                setCharacter((prev) => !prev)
              }}
              />
              <label htmlFor='CharacterInput' >Character</label>

          </div>
        </div>
      </div>
    </>
  );
}

export default App
