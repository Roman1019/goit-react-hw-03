import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className={css.contactForm}>
      <ul className={css.contactUl}>
        {contacts.map((contact) => (
          <li className={css.contactItem} key={contact.id}>
            <div>
              <div className={css.contactHeadDiv}>
                <div className={css.contactHeadIconDiv}>
                  <FaUser />
                </div>

                <h3 className={css.contactHead}>{contact.name}</h3>
              </div>
              <div className={css.contactParDiv}>
                <div className={css.contactHeadIconDiv}>
                  <FaPhoneAlt />
                </div>
                <p className={css.contactPar}>{contact.number}</p>
              </div>
            </div>
            <div className={css.contactButtonDiv}>
              <button
                className={css.contactButton}
                onClick={() => onDelete(contact.id)}
                type="button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
