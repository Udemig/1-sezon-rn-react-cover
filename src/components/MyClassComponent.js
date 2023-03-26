import React from "react";

class MyClassComponent extends React.Component{
    constructor(props){
        super(props)
        console.log("ben constructor anıyım");
        this.state={sayac:0}
    }
    componentDidMount(){
        console.log("ben ekrana basıldım")
    }
    render(){
        console.log("ben render fonksiyonuyum");
        return(
            <h1>ben class component'ım</h1>
        )
    }
}

export default MyClassComponent