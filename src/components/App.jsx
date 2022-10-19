import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Message } from './Message/Message';
import { AiOutlineRead } from 'react-icons/ai';
import { Container, ContainerTitle, SubHeading, IconTitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const localContacts = JSON.parse(localStorage.getItem('contacts'));
  //   // console.log(localContacts);
  //   localContacts ? setContacts(localContacts) : setContacts([]);
  // }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    const someContacts = contacts.some(contact => contact.name === name);

    someContacts
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK'
        )
      : setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <ContainerTitle>
        Phonebook
        <IconTitle>
          <AiOutlineRead />
        </IconTitle>
      </ContainerTitle>
      <ContactForm onSubmit={addContact} />

      <SubHeading>Contacts</SubHeading>
      <Filter filter={filter} changeFilter={changeFilter} />
      {contacts.length > 0 ? (
        <ContactList
          contacts={filtredContacts()}
          onDeleteContact={deleteContact}
        />
      ) : (
        <Message text="Contact list is empty." />
      )}
    </Container>
  );
};
