import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = newContact => {
    const { contacts } = this.state;
    const contactItem = {
      id: uuidv4(),
      name: newContact.name,
      number: newContact.number,
    };
    if (
      contacts
        .map(contact => contact.name.toLowerCase())
        .includes(newContact.name.toLowerCase())
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [contactItem, ...prevState.contacts],
      }));
    }
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filtercontact = () => {
    const { filter, contacts } = this.state;
    const filterLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase),
    );
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm OnSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.filtercontact()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
