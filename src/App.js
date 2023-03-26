import React, { useState, useEffect } from "react";

import "./styles/global.css";
import Button from "./components/Button";
import MyClassComponent from "./components/MyClassComponent";
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
  /* HOOKS */
  /* 
    1. class based componentlarda bulunan yetenekleri function based
    componentlara kazandırmak için geliştirilmiş özel yetenekli fonksiyonlar
    2. hook denilen özel yetenekli fonksiyonlar use ile başlamalı
    3. state kavramını, yeteneğini temsil eden, bu yeteneği function based
    componentlara kazandıran hook'un adı useState'tir
    4. lifecycle methodları yeteneğini kazandırmak için de useEffect isimli 
    hook kullanılır.
    5. function based componentlarda render fonksiyonun karşılığı return satırıdır
    6. function based componentlardaki return satırının üzeri, yani fonksiyonun gövdesi
    constructor methodunu temsil eder.
    7. useEffect hook'u ile lifecycle methodlardan componentDidMount,
    componentDidUpdate ve componentWillUnmount metodları yakalanbilir

  */
  const [sayac, setSayac] = useState(0);
  //console.log("function based componentın constructor'ı");

  /* 
    useEffect yazım şekli
    ->iki parametre alır, 1. yapılacak iş (fonk) 2. dependencies (bağımlılıklar,dizi)
    useEffect(()=>{},[])
    -> lifecycle method ile yazım şekilleri
     useEffect(()=>{},[]) (componentDidMount)
      useEffect(()=>{},[sayac]) (hem componentDidMount hem de componentDidUpdate)
       useEffect(()=>{

        componentWillUnmount
        return ()=>{}
       },[])
  */

  /* componentDidMount */
  useEffect(() => {
    /* console.log("ben componentDidMountum. bağımlılığım yok"); */
  }, []);
  useEffect(() => {
    /* console.log(
      "ben hem componentDidMountum, hem de componentDidUpdate'im. Bana bağımlılık olarak sayac state'i verildi."
    ); */
  }, [sayac]);
  return (
    <div className="container">
      
      {/* <MyClassComponent /> */}
      <p>Sayac: {sayac}</p>
      <Button
        butonunTexti="Azalt"
        type="primary"
        onClick={() => {
          setSayac(sayac - 1);
        }}
      />
      {sayac <= 10 && (
        <Button
          butonunTexti="Arttır"
          type="danger"
          onClick={() => {
            setSayac(sayac + 1);
          }}
        />
      )}
    </div>
  );
}

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
