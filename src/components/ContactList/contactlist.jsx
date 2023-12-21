import css from './contactlist.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts().map(contact => (
        <li key={contact.id} id={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            className={css.deleteBtn}
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.func,
  deleteContact: PropTypes.func,
};