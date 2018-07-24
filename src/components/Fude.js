import React, { Component } from 'react';
import { Chat , addResponseMessage } from 'react-chat-popup';

export const sample1 = (text) => {
  addResponseMessage("what details do you want for the id " +text + " Name or marks?");
}
/*export const sample2 = (text) => {
      const rootref = firebase.database().ref();
    //const user = rootref.child('event attendees/fm');
    //user.on('child_added',snap=>{
    const aref = rootref.child('event attendees');
    const uref = rootref.child('users');
    //aref.child('fm').once('value', snap => console.log(snap.val())) for only attendees
    function gu(key , cb){
      uref.child(key).on('child_added', snap => {
        let usref = uref.child(snap.key);
      // addResponseMessage(" "+ snap.val());

        usref.once('value',cb);
      });
    }

      gu( 1, snap => console.log(snap.val()))
    }
*/
