import { useState } from 'react'
function App (){
  const [count,setCount]=useState(1)
  const Add =() =>{
    setCount(count+1)
  };
  const Sub =() =>{
    setCount(count-1)
  };
  const Mul =() =>{
    setCount(count*3)
  };
  const Div =() =>{
    setCount(count/5)
  };
  return (
    <div className='abc'>
      <h1>counting={Math.round(count)}</h1>
      <button onClick={Sub}>Sub</button>&nbsp;
      <button onClick={Add}>Add</button>&nbsp;
      <button onClick={Mul}>Mul</button>&nbsp;
      <button onClick={Div}>Div</button>

    </div>
  );
};

export default App;
