import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactDetail from './ContactDetail';
import { v4 as uuid } from 'uuid';

function App() {
  const LOCAL_STORGE_KEY = "CONTACTS";
  // to avoid losing data on refresh
  let temp = [];
  if(JSON.parse(localStorage.getItem(LOCAL_STORGE_KEY))!==null)temp=JSON.parse(localStorage.getItem(LOCAL_STORGE_KEY));
  const [contacts,setContacts] = useState(temp);

  const addContactHandler = (contact) => {
      setContacts([...contacts, { id: uuid(), ...contact }]); // ...contacts -> as we need previous values of array as well.
        console.log("contacts");
        console.log(contacts);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
    });

    setContacts(newContactList);
  } 

  // the below useEffect is not setting the contacts value as we set UseState([]) but now it is fixed and we dont need nelow code.
  // useEffect( () => {
  //   console.log(localStorage.getItem(LOCAL_STORGE_KEY));

  //   console.log("1");
  //   const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORGE_KEY));
  //   console.log(retrieveContacts);
  //   if(retrieveContacts) setContacts(retrieveContacts);
  //   console.log(contacts);
  //   // eslint-disable-next-line
  // },[]); // [] -> run only once

  useEffect( () => {
    console.log("HI");
    localStorage.setItem(LOCAL_STORGE_KEY,JSON.stringify(contacts));
  }, [contacts]); // runs every time when contacts value changes

  return (
    <div className="ui container">
      <Router>
       <Header />
       <Routes>
        <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>} />
        <Route path="/contact/:id" element={<ContactDetail />} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
