import { useCount } from '../../context/CountContext'
import Text from '../Text/Text'
export const Button = () => {
  const {count , setCount} = useCount()

  const onButtonClick = () => {
    setCount(count+1)
  }
  return (
    <>
      <button onClick = {onButtonClick}>Increment Button</button>
      <button onClick={() => {setCount(count-1)}}>Decrement Button</button>
        <Text /> 
    </>
  )
}