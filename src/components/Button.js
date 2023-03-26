import React,{useEffect} from "react";
/* bir component mutlaka return satırına sahip olmalı */
/* JSX denilen yapıyı döndürür */
import "../styles/global.css";
const Button = (props) => {

    useEffect(()=>{
        return()=>{
            console.log("ben buton componentının wilUnmount anıyım")
        }
    },[])

  if (props.type === "primary") {
    return (
      <button
        className="primaryBtn"
        onClick={props.onClick}>
        {props.butonunTexti}
      </button>
    );
  }
  if (props.type === "danger") {
    return (
      <button
        className="dangerBtn"
        onClick={props.onClick}>
        {props.butonunTexti}
      </button>
    );
  }
};

export default Button;
