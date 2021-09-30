import React,{useState, useEffect} from 'react'
// UseState is used to set the default state and what you want the state to change to
// UseEffect is used to keep track of what happen in the system system

const UseState = () => {

     const [state, setstate] = useState({count:0, theme:'blue'})

     const[num, setNum] = useState(0)

    const count = state.count;
     const theme = state.theme;

     function increment(){
         setstate(prev => {
             return{...prev,count: prev.count + 1}
         })
     }

     function decrement(){
         setstate(prev => {
             return {...prev,count: prev.count - 1}
         })
     }

     function numIncrement() {
         setNum(num + 1)
     }

     function numDecrement(){
         setNum(num - 1)
     }

     useEffect(() => {
        // Update the document title using the browser API
        // document.write = `You clicked ${count} times`;
        console.log(`You clicked ${num} times`)
      });

    return (
        <div>
        <button onClick={increment}>Plus</button>
            <span>{count}</span>
            <span>{theme}</span>
        <button onClick={decrement}>Minus</button>

        <h1>Num</h1>

        <button onClick={ numIncrement}>Add to cart</button>

        <h1>Product price: #500</h1>
        <h1>product qty: {num}</h1>
        <h1>total price:{num * 500}</h1>
        
       <button onClick={() => setNum(num - 1)}>Minus from cart</button>
        
        </div>
    )
}
export default UseState
