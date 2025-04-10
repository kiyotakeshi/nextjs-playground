"use client";

import { useState } from "react";
import { ContactList } from "./ContactList";
import { Chat } from "./Chat";

export type Contact = {
  id: number;
  name: string;
  email: string;
};

export const contacts: Contact[] = [
  { id: 1, name: "mike", email: "mike@example.com" },
  { id: 2, name: "john", email: "john@example.com" },
];

const Messenger = () => {
  const [to, setTo] = useState(contacts[0]);
  return (
    // flex で横並びにして 20px の間隔を空ける
    <div style={{ display: "flex", gap: "20px" }}>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      {/* key を props で指定していないので Chat component はツリーの同じ位置に render される */}
      {/* そのため Chat component 内の state は保持されたままになる */}
      {/* to(送り先)を変えたのにメッセージは保持されたままになる */}
      {/* <Chat contact={to} /> */}
      <Chat contact={to} key={to.id} />
    </div>
  );
};

export default Messenger;
