import ContactListItem from 'components/ContactListItem';
import css from './contactList.module.css';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map(contact => (
          <ContactListItem
            contacts={contact}
            key={contact.id}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
