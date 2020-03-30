
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import './Chat.css'
import InforBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Meaasges/Messages";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://reactchatapplicationss.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    console.log(name)
    console.log(room)
    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }
  console.log(message,messages)
    return(
        <div className="outerContainer">
           <div className="container">
             <InforBar room={room}/>
             <Messages messages={messages} name={name}/>
             <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
           </div>
           {/* <TextContainer users={users} /> */}
        </div>
    )
}
export default Chat;

