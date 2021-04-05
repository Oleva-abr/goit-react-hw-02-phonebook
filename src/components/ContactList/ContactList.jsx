import style from './contactList.module.css';
const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={style.contactList}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li className={style.item} key={id}>
          {name}: {number}
          <button className={style.btn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

export default ContactList;
