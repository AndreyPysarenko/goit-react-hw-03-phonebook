import css from '../app.module.css';
import itemCss from './contactListItem.module.css';

const ContactListItem = ({ contacts, handleDelete }) => {
  return (
    <>
      <li className={itemCss.listItem}>
        <p className={itemCss.listItemText}>
          {contacts.name}: {contacts.number}
        </p>

        <button
          className={css.btn}
          type="button"
          onClick={() => handleDelete(contacts.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactListItem;
