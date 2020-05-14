import React from 'react';
import VerticalProgress from '../componets/VerticalProgress/VerticalProgress';
import Menu from '../componets/Menu/Menu';
import "./style.css";
//import withStyle from '../componets/Login/Login';
import SignUp from '../componets/Login/Login';
//import Chart from '../componets/chart/chart';
//from './componets/VerticalProgress/VerticalProgress';
const mqtt=require('mqtt');

 class MainView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            progress1:'',
            progress2:'',
            progress3:'',
            progress: 10,
            //host:"mqtt://broker.mqttdashboard.com",
            user:"pKGeOCpyFia9Dhy",
            psswd:"5bJSp0QQKGvuIWM",
            port:"8093"
        }
    }
 
    componentDidMount() {
        this.ssChange("friday");
        this.client= mqtt.connect('https://ioticos.org:8093/mqtt',{
           clientId: 'my device',
           keepalive: 60, // Seconds which can be any positive number, with 0 as the default setting
           username: this.state.user ,
           password: this.state.psswd,
           connectTimeout: 2*1000
        });
        console.log('try to connect')
         const that=this;
         
         this.client.on('connect',function() {
         that.client.subscribe("3EyLfoLCMSY8seG/nivel1")
         that.client.subscribe("3EyLfoLCMSY8seG/nivel2")
         that.client.subscribe("3EyLfoLCMSY8seG/temperatura")
         console.log("Connected");
    });
    
     this.client.on('message', function (topic, message) {
            if(topic==="3EyLfoLCMSY8seG/nivel1"){
                switch(message.length){
                    case 1:
                        this.progress1=message[0]-48
                        break;
                    case 2:
                        var decena= message[0]-48
                        var unidad=message[1]-48
                        this.progress1=decena*10+unidad
                        break;
                    case 3:
                        this.progress1=100
                        break;
                    default:
                        console.log('Dato incorrecto')
                        break;
                }
                console.log(this.progress1)
                //console.log(this.convert(message))
            }

        if(topic==="3EyLfoLCMSY8seG/nivel2"){
            switch(message.length){
                case 1:
                    this.progress2=message[0]-48
                    break;
                case 2:
                    var decena= message[0]-48
                    var unidad=message[1]-48
                    this.progress2=decena*10+unidad
                    break;
                case 3:
                    this.progress2=100
                    break;
                default:
                    console.log('Dato incorrecto')
                    break;
                }
                console.log(this.progress2)
            }

        if(topic==="3EyLfoLCMSY8seG/temperatura"){
            switch(message.length){
                case 1:
                    this.progress3=message[0]-48
                    break;
                case 2:
                    var decena= message[0]-48
                    var unidad=message[1]-48
                    this.progress3=decena*10+unidad
                    break;
                case 3:
                    this.progress3=100
                    break;
                default:
                    console.log('Dato incorrecto')
                    break;
                }
                console.log(this.progress3)
           
        }
        }); 

        this.client.on('disconnect',function() {
            console.log("DesConectado");
        });

    setInterval(() => {
        this.setState(prevState => ({
            progress:
            (prevState.progress + Math.floor(Math.random() * 20) + 1) % 100
        }));
        }, 1000);
    }
      
    componentWillUnmount() {
      
    }

    
    ssChange = (message) => {
        console.log(message);
    }

    convert= (Uint8Arr) => {
        let length = Uint8Arr.length;
        let buffer = Buffer.from(Uint8Arr);
        let result = buffer.readUIntBE(0, length);
        return result;
    }
    

    render (){
        return (
            
          <div className="MainView">
              <SignUp/>
             
               
                
                
                 
        </div>
           
      )
      }

       

    }


export default MainView;

{/* //<h1>HOlA {this.props.katy}</h1>
               // <h2>MUNDO {this.state.user}</h2>
               //this.client= mqtt.connect(this.state.host+":"+this.state.port+"/mqtt",{ */}

            //    <h1>MONITORING</h1>
            //    <h2>Nivel</h2>
            //    <VerticalProgress progress={this.state.progress} />
            //    <VerticalProgress progress={this.state.progress} />
            //    <VerticalProgress progress={this.state.progress} />
               
              
             
               
            //    <Menu/>
               


                 

