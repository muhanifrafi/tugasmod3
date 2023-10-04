import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Hello from "./Hello";

function App() {
  const [count, setCount] = useState(0);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (count === 10) {
      setIsShown(true);
      return;
    }
    setIsShown(false);
  }, [count]);

  return (
    <>
      <Counter count={count} setCount={setCount} />
      {isShown && <Hello />}
    </>
  );
}

export default App;