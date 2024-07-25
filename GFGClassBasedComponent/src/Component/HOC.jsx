import React, { useState } from 'react'

function HOC(Component) {
    return function UpdatedComponent() {
      const [count, setCount] = useState(0);

      const onhandleClick = () => {
        setCount(count + 1);
      };
      return <Component count={count} onhandleClick={onhandleClick} />;
    }
}

export default HOC
