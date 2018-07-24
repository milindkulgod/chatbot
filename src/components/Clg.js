import React, { Component } from 'react';
import { Chat , addResponseMessage } from 'react-chat-popup';
import * as firebase  from 'firebase';
export const tesx = (text) => {
  const rootref = firebase.database().ref();
//const user = rootref.child('event attendees/fm');
//user.on('child_added',snap=>{
const aref = rootref.child('event attendees');
const uref = rootref.child('users');
//aref.child('fm').once('value', snap => console.log(snap.val())) for only attendees
function gu(key , cb){
  uref.child(key).once('child_added', snap => {
    let usref = uref.child(snap.key);
//  addResponseMessage(" "+ snap.val());

    usref.once('value',cb);
  });
}
 var a = text.substr(text.length-1);
  gu( a, snap => console.log(snap.val()))
  addResponseMessage("Name : ");


}
