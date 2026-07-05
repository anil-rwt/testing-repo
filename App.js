import {useState} from "react";
const menu=[{id:1,name:"Dal",price:120},{id:2,name:"Chawal",price:100},{id:3,name:"Raita",price:60},{id:4,name:"Chilli Chicken",price:260}];
export default function App(){const[c,setC]=useState([]);
const add=i=>{const e=c.find(x=>x.id===i.id);if(e){setC(c.map(x=>x.id===i.id?{...e,q:e.q+1}:x));}else setC([...c,{...i,q:1}]);};
const rem=i=>{const e=c.find(x=>x.id===i.id);if(!e)return;if(e.q===1)setC(c.filter(x=>x.id!==i.id));else setC(c.map(x=>x.id===i.id?{...e,q:e.q-1}:x));};
const t=c.reduce((a,b)=>a+b.price*b.q,0);
return <div style={{padding:20,fontFamily:"Arial"}}><h1>Restaurant Order App</h1><h2>Menu</h2>{menu.map(i=><div key={i.id}><b>{i.name}</b> ₹{i.price} <button onClick={()=>add(i)}>Add</button></div>)}<h2>Cart</h2>{c.map(i=><div key={i.id}>{i.name} ({i.q}) <button onClick={()=>rem(i)}>-</button><button onClick={()=>add(i)}>+</button></div>)}<h3>Total ₹{t}</h3></div>}