import { useCount } from "../../context/CountContext";
const Text = () => {

  const {count} = useCount()
  return (
    <p>The count is {count}</p>
  );
};

export default Text;
