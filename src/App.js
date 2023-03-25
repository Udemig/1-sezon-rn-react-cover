import React from "react";
var insanlar = [
  {
    tc: 1,
    isim: "emre",
    meslek: "frontend developer",
    yas: 34,
    seviye: 0,
  },
  {
    tc: 2,
    isim: "ahmet",
    meslek: "frontend developer",
    yas: 20,
    seviye: 1,
  },
  {
    tc: 3,
    isim: "mehmet",
    meslek: "frontend developer",
    yas: 18,
    seviye: 2,
  },
  {
    tc: 4,
    isim: "veli",
    meslek: "frontend developer",
    yas: 43,
    seviye: 2,
  },
];

function App() {
  /* bir component mutlaka return satırına sahip olmalı */
  /* JSX denilen yapıyı döndürür */
  /* 
    1. bir tane parent olabilir
    2. içerisine js kodu yazmak için {} açılır ve kapanır
    3. tek satırlık js kodları yazılabilir.işte burada devreye es6 girer
    (for için map, if için ternary operator)
    4. attribute yazarken camel case kullanılan yerleri vardır (class - className)
    (for - htmlFor)
    5. html tarafında self closed elementler <input> şeklinde kapanırken
    jsx içerisinde <input/> şeklinde kapanır
  */
 /* react'ta inline style verirken jsx bir js objesi bekler. */
 const container={color:"red",borderRadius:"5px",border:"1px solid"}
  return (
    <div style={container} className="App">
      <h1>Hello React</h1>
      <p>deneme</p>
      {insanlar.map((insan) => (
        <div>
          <div>
            <h1>{insan.isim}</h1>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

/* const div=document.createElement("div")
div.classList.add("App")
div.style.color="red"
const h1=document.createElement("h1")
h1.innerText="Hello React"
const p = document.createElement("p")
p.innerText="deneme"
div.appendChild(h1)
div.appendChild(p) */

export default App;

/* //void
const logName=(name)=>{
  console.log(name)
}

logName("emre")

const topla=(a,b)=>{
  const toplam = a+b
  return toplam
}

const toplam=topla(3,5) */
