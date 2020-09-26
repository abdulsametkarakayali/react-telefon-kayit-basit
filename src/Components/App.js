import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts'

class  App extends Component{
  constructor(props){
    super(props);
    this.addContact =this.addContact.bind(this);

  }
  state= {
    contacts:[
     {
        name:"samet",
        phone:"123456"
    },
    {
     name:"güner",
     phone:"5848484"
     },
     {
         name:"zeynep",
         phone:"5848848"
     }
 ]
};
addContact(contact){
  
  const{contacts} =this.state;
  contacts.push(contact);

  this.setState({
    contacts:contacts
  })
}
  render() {
    return(
    <div className="App">
        <Contacts 
        addContact={this.addContact}
        contacts={this.state.contacts}/>
    </div>
    )};
}

export default App;
