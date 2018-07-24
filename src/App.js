import React, { Component } from 'react';
import { Chat , addResponseMessage } from 'react-chat-popup';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import Clg from './components/Clg';
import * as firebase  from 'firebase';
import {sample} from './components/Chats';
import {sample1} from './components/Fude';
//import {sample2} from './components/Fude';
//import popup from './components/popup';
class App extends Component {

  constructor(){
    super();


  }

  componentDidMount(){
addResponseMessage("Welcome to this awesome chat!, i am still learing so please go easy!! xD");
addResponseMessage("please enter  a section name or iq to fetch ID details ")

var x;





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
addResponseMessage("Phone :" + this.state.phone)

}

else if ( text == "who are you" )
{
  addResponseMessage("my name is ava, i was made by a team of interns at quess");
}
else if (text == "stud" || text  == "stud1")
{
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
/*else if (text == "name of 1q1" || text == "id")
{
sample2(text);
}
*/
else if(text == "section a")
{
  const rootref = firebase.database().ref();
  //const user = rootref.child('event attendees/fm');
  //user.on('child_added',snap=>{
  const aref = rootref.child('sections');
  const uref = rootref.child('students');
  function gu(key , cb){
  aref.child(key).on('child_added', snap => {
    let usref = uref.child(snap.key);
    addResponseMessage(" "+ snap.val());

    usref.once('value',cb);
  });
  }
  gu('A', snap => console.log(snap.val()));
}
else if( text == "section b" )
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

sample(text);

}
else if(text == "name")
{
    const rootref = firebase.database().ref();
    const aref = rootref.child('users');
  var names =  sessionStorage.getItem("1",x);
  function gu(key , cb){
    aref.child(key).on('child_added', snap => {
      let usref = aref.child(snap.key);
    addResponseMessage(" "+ snap.val());

      usref.once('value',cb);
    });
  }
  gu( names, snap => console.log(snap.val()))



}
else if(text == "marks")
{
    const rootref = firebase.database().ref();
    const aref = rootref.child('Results');
  var names =  sessionStorage.getItem("1",x);
  function gu(key , cb){
    aref.child(key).on('child_added', snap => {
      let usref = aref.child(snap.key);
    addResponseMessage(" "+ snap.val());

      usref.once('value',cb);
    });
  }
  gu( names, snap => console.log(snap.val()))


}
else if ( text == "1q1" || text == "1q2" || text == "1q3" || text == "1q4")
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
  //addResponseMessage(" "+ snap.val());

    usref.once('value',cb);
  });
}

 var a = text.substr(text.length-1);
  gu( a, snap => console.log(snap.val()))
sample1(text);
var x = text;
sessionStorage.setItem("1",x);
}
else {
  {
      addResponseMessage(" sorry i can't understand");
    }
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
        <h2>
         To get started, click on the little blue button at the bottom to interact with a simple bot!!
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
