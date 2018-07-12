import React, { Component } from 'react';
import { Chat , addResponseMessage } from 'react-chat-popup';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import * as firebase  from 'firebase';
//import popup from './components/popup';
class App extends Component {

  constructor(){
    super();
    this.state={
      speed: 10
    };
  }

  componentDidMount(){
const rootref = firebase.database().ref();
// const speedref = rootref.child('speed');
const nameref = rootref.child('Name');
const natref = rootref.child('Nationality');
const marref = rootref.child('Marks');
const pnoref = rootref.child('phone');
/*speedref.on('value',snap=>{
  this.setState({
    speed: snap.val()

  });
});
*/
nameref.on('value',snap=>{
  this.setState({
    Name: snap.val()

  });
});
natref.on('value',snap=>{
  this.setState({
    Nationality: snap.val()

  });
});
marref.on('value',snap=>{
  this.setState({
    Marks: snap.val()

  });
});
pnoref.on('value',snap=>{
  this.setState({
    phone: snap.val()

  });
});
  }

  //  componentDidMount() {
  //    addResponseMessage("Welcome to this awesome chat!, i am still learing so please go easy!! xD");
  //  }


  handleNewUserMessage = (text) => {
    console.log(`New message incomig! ${text}`);
    // Now send the message throught the backend API
  //   kar = {this.state.speed}
  var text = text.toLowerCase();
  if(text == "hi")
  {
    addResponseMessage('hi');
  }
  else if(text == "bye" ||  text == "goodbye")
  {
    addResponseMessage('bye man');
  }
else  if(text == "vis")
{
addResponseMessage("Name : " + this.state.Name)
addResponseMessage("Nationality : " + this.state.Nationality)
addResponseMessage("Marks :" + this.state.Marks)
addResponseMessage("Marks :" + this.state.phone)
}
else if( text == "dev")
{

const rootref1 = firebase.database().ref("vis");

  const nameref1 = rootref1.child('Name1');
  nameref1.on('value',snap=>{
    this.setState({
      Name1: snap.val()

    });
  });
  addResponseMessage("Name : " + this.state.Name1)
}
else if (text == "who made you" )
{
  addResponseMessage("my name is ava, i was made by a team of interns at quess")
}
else if (text == "plan")
{

}
else {
  addResponseMessage("sorry i cant understand ")
}
}

      render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to simple bot</h1>
        </header>
        <p className="App-intro">
        <h2>  To get started, click on the little blue button at the bottom to interact with a simple bot!!
  </h2>
        </p>
        <Projects />
        <Chat
        handleNewUserMessage={this.handleNewUserMessage}
        profileAvatar={logo}
        title="VIS BOT"


        />

      </div>
    );
  }
}

export default App;
