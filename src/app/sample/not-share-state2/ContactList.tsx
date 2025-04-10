import { Contact } from "./page";

type ContactListProps = {
  contacts: Contact[];
  selectedContact: Contact;
  onSelect: (contact: Contact) => void;
};

export const ContactList = ({
  contacts,
  selectedContact,
  onSelect,
}: ContactListProps) => {
  return (
    <section className="contact-list">
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {contacts.map((contact) => (
          <li key={contact.id} style={{ marginBottom: "10px" }}>
            <button
              onClick={() => onSelect(contact)}
              style={{
                padding: "8px 16px",
                backgroundColor:
                  contact.id === selectedContact.id ? "#007bff" : "#fff",
                color: contact.id === selectedContact.id ? "#fff" : "#000",
                border: "1px solid #007bff",
                borderRadius: "4px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
