import { ContactModal } from "../interfaces/contactModal";

const contacts: ContactModal[] = [];

for (let i = 0; i < 40; i++) {
  contacts.push(
    new ContactModal(
      i,
      "Eugene Hanson " + i,
      "Hey! How are you?",
      `5:${30 + i} AM`,
      i % 2 ? Math.ceil(Math.random() * 10) : 0,
      { uri: `http://lorempixel.com/${100 + i}/${100 + i}/` },
      i % 2 === 0,
    ),
  );
}

export { contacts };
