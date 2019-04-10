import React,{Component} from 'react';
import './css/styles.css';


class Background extends Component{
  
    constructor(){
        super();
        this.RefResult=React.createRef();
        this.Refsum=React.createRef();
        this.state={
            number:"",
            StateButton:false
        }
    }
    clean=() =>{
        this.setState({
            number:""
        });
    }
    PrintScreen =(ValueNumber) =>{

        let Arraynum=["1","2","3","4","5","6","7","8","9","0"];
        let ArrayOpe=["+","-","*","/"];
        let ConcatNumber=this.RefResult.current.value;
        ConcatNumber+=ValueNumber;
        this.setState({
            number:ConcatNumber
        });
        for (let i = 0; i < Arraynum.length; i++) {
            if(ValueNumber==Arraynum[i]){ 
                this.setState({
                    StateButton:false
                });
        }
        }
       for (let i = 0; i < ArrayOpe.length; i++) {
            if(ValueNumber==ArrayOpe[i]){  
                this.setState({
                    StateButton:true
                });
        }
        }
    }
    operaciones =() =>{
        let intNumero="0"; 
        intNumero=this.RefResult.current.value;
        let result = eval(intNumero);
        this.setState({
            number:result
        });
     }
    render(){
    return(
    <div className="principal">  
      <div>
      <input type="text" className="entrada" ref={this.RefResult} value={this.state.number}></input>    
      </div>
      <div className="ContenButton">  
      <div>
      <button className="boton"  disabled={this.state.suma} onClick={() => this.PrintScreen("7")} >7</button>    
      <button className="boton"  onClick={() => this.PrintScreen("8")} >8</button>    
      <button className="boton"  onClick={() => this.PrintScreen("9")} >9</button>  
      </div>  
      <div>  
      <button className="boton"  onClick={() => this.PrintScreen("6")} >6</button>    
      <button className="boton"  onClick={() => this.PrintScreen("5")} >5</button>    
      <button className="boton"  onClick={() => this.PrintScreen("4")} >4</button>  
     </div>
    <div>  
      <button className="boton"  onClick={() => this.PrintScreen("3")} >3</button>    
      <button className="boton"  onClick={() => this.PrintScreen("2")} >2</button>    
      <button className="boton"  onClick={() => this.PrintScreen("1")} >1</button>  
    </div>
    <div>  
     <button className="boton"  onClick={() => this.PrintScreen("0")}>0</button>    
     <button className="boton" disabled={this.state.StateButton} onClick={() => this.PrintScreen("+")}>+</button>    
     <button className="boton" disabled={this.state.StateButton} onClick={() => this.PrintScreen("-")}>-</button>    
    </div>
    <div>  
     <button className="boton" disabled={this.state.StateButton} onClick={() => this.PrintScreen("*")}>*</button>    
     <button className="boton" disabled={this.state.StateButton} onClick={() => this.PrintScreen("/")}>/</button>  
     <button className="boton"  onClick={this.clean} >C</button>         
    </div>
    <div>
     <button className="botonigual"  onClick={this.operaciones} >=</button>       
    </div>
    </div>
    </div>

    );
   }
  }
export default Background;