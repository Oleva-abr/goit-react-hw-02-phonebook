const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          {name}: {number}
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      );
    })}
  </ul>
);

export default ContactList;
