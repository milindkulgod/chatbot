import React, { Component } from 'react';
import { Chat , addResponseMessage } from 'react-chat-popup';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import * as firebase  from 'firebase';
import Gre from './components/Gre';
//import popup from './components/popup';
class App extends Component {

  constructor(){
    super();
    this.state={
    //  Name : " "
    };

  }

  componentDidMount(){
addResponseMessage("Welcome to this awesome chat!, i am still learing so please go easy!! xD");
addResponseMessage("please enter a usn number to fetch detials ")







const rootref = firebase.database().ref();
// const speedref = rootref.child('speed');
const nameref1 = rootref.child('Name');
const natref = rootref.child('Nationality');
const marref = rootref.child('Marks');
const pnoref = rootref.child('phone');
/*speedref.on('value',snap=>{
  this.setState({
    speed: snap.val()

  });
});
*/
nameref1.on('value',snap=>{
  this.setState({
    Name1: snap.val()

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




  handleNewUserMessage = (textt) => {
    console.log(`New message incomig! ${textt}`);
    // Now send the message throught the backend API
  //   kar = {this.state.speed}
  var text = textt.toLowerCase();
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
addResponseMessage("Name : " + this.state.Name1)
addResponseMessage("Nationality : " + this.state.Nationality)
addResponseMessage("Marks :" + this.state.Marks)
addResponseMessage("Marks :" + this.state.phone)

}
else if (text == "stud" || text  == "stud1") {
  const rootref1 = firebase.database().ref();
  const user = rootref1.child(text);
  const namref1 = user.child('Name');
  //const mark1 = user.child('Marks');
  namref1.on('value',snap=> {
    this.setState({
      Name: snap.val()

    });


  });

  addResponseMessage(this.state.Name)
}
else if( text == "section b")
{
  const rootref = firebase.database().ref();
//const user = rootref.child('event attendees/fm');
//user.on('child_added',snap=>{
const aref = rootref.child('event attendees');
const uref = rootref.child('users');
//aref.child('fm').once('value', snap => console.log(snap.val())) for only attendees
function gu(key , cb){
  aref.child(key).on('child_added', snap => {
    let usref = uref.child(snap.key);
    addResponseMessage(" "+ snap.val());

    usref.once('value',cb);
  });
}
gu('fm', snap => console.log(snap.val()));
/*uref.once('value', function(snapshot) {
var post=snapshot.val();

console.log(post);
const n1 = uref.child('name');
const a1 = uref.child('age');

const key = 'fm'

var keys = Object.keys(post);
console.log(keys);
for(var i=0; i <  keys.length; i++)
{
  var k = keys[i];
  var inits = post[k].inits;
  var user = post[k];
  console.log(inits);


}



});*/



}
else if ( text == text.match(/1/g))
{
  const rootref = firebase.database().ref();
//const user = rootref.child('event attendees/fm');
//user.on('child_added',snap=>{
const aref = rootref.child('event attendees');
const uref = rootref.child('users');
//aref.child('fm').once('value', snap => console.log(snap.val())) for only attendees
function gu(key , cb){
  uref.child(key).on('child_added', snap => {
    let usref = uref.child(snap.key);
    addResponseMessage(" "+ snap.val());

    usref.once('value',cb);
  });
}
 var a = text.substr(text.length-1);
gu( a, snap => console.log(snap.val()));
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
