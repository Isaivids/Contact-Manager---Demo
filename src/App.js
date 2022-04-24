import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import ListContacts from './components/ListContacts';

function App() {
  const [contacts, setContacts] = useState([])
  const LOCAL_STORAGE_KEY= "contacts"
  const addContact =(contact)=>{
    setContacts([...contacts, {id: Math.random(), ...contact}]);
  } 

  const removeContact = (id) =>{
    const newContacts = contacts.filter((contact)=>{
      return contact.id !==id;
    })
    setContacts(newContacts);
  }

  useEffect(() => {
    const retrivedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrivedContacts) setContacts(retrivedContacts);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])
  
  return (
    <div>
      <Header/>
      <InputContainer addContact={addContact}/>
      <ListContacts contacts={contacts} getId={removeContact}/>
    </div>
  );
}

export default App;
