import Contact from "../Contact/Contact.jsx";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <Contact contacts={contacts} onDelete={onDelete} />
    </div>
  );
}
