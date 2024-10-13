import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handClick}>
      Clicked {count} times
    </button>
  )
}

export default MyButton