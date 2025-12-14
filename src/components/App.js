
import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const[input, setInput] = useState("");
  const items = [
    { name: "Apple", price: 20 },
    { name: "Banana", price: 10 },
    { name: "Neutella", price: 30 },
    { name: "Razor", price: 5 },
    { name: "CornFlakes", price: 15 },
    { name: "Sound Bar", price: 50 },
    { name: "Iphone", price: 80 },
  ];
  return (
    <div>
        <h3>Enter your budget to check available items:</h3>
        <input type="number" value={input} onChange={e=>setInput(e.target.value)}/>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Items you can buy are in Green color</th>
            </tr>
              </thead>
          <tbody>
            {items.map((item)=>(
            <tr key={item.name}>
              <td>{item.name}</td>
              <td style={{color:Number(input)>=item.price ? "green" : "red"}}>{item.price}</td>
            </tr>
          ))}
          </tbody>
        </table>
    </div>
  )
}

export default App
