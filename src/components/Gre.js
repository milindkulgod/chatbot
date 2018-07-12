import React, { Component } from 'react';
import { Chat , addResponseMessage } from 'react-chat-popup';
class Gre extends React.Component{
  ComponentDidMount(){
    addResponseMessage("Hi! How may I help you?");
  }
  render(){
    return(
      <div className="Gre">
    
      <Chat
      handleNewUserMessage={this.handleNewUserMessage}
      />
      </div>
    );
  }
}
export default Gre;
