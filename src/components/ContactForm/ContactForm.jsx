import { FormContainer, Button, FormTitle } from './ContactForm.styled';
import { useState } from 'react';

import PropTypes from 'prop-types';

const ContactForm = ({ contacts, newContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = evt => {
    setName(evt.target.value);
  };

  const handleChangeNumber = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      window.alert(`Контакт ${name} вже є в списку`);
      return;
    }
    newContact(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer>
      <FormTitle>Телефонна книга</FormTitle>

      <form onSubmit={handleSubmit}>
        <label>
          <span>{'Ім`я'}</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name (Rosie Simpson)"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label>
          <span>{'Телефон'}</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone (111-11-11)"
            value={number}
            onChange={handleChangeNumber}
          />
        </label>

        <Button type="submit">
          <span>{'Додати контакт'}</span>
        </Button>
      </form>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  newContact: PropTypes.func.isRequired,
};

export default ContactForm;
