import React, { Component } from 'react';
import { Chat, addResponseMessage } from 'react-chat-popup';

class popup extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage("hi i am a bot");
  }

  render() {
    return (
      <div className="popup">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
        />
        <p  className="pop-intro">
        to interact with a bot
        </p>
      </div>
    );
  }
}

export default popup;
