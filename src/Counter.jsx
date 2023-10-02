export default function Counter({ count, setCount }) {
  return (
    <div className="counter">
      <button className="minus" onClick={() => setCount(prev => prev - 1)}>-</button>
      <h2 className="count">{count}</h2>
      <button className="plus" onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>
  );
}
