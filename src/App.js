import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';

function App() {
  const LOCAL_STORAGE_KEY = 'happykumar';
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContacts);
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<ContactList contacts={contacts} removeContactHandler={removeContactHandler} />} />
          <Route exact path='/add-contact' element={<AddContact addContactHandler={addContactHandler} />} />
          <Route exact path='/contact/:id' element={<ContactDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
