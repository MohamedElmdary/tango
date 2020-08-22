import { MessageModel } from "../interfaces";

const messages: MessageModel[] = [];

for (let i = 0; i < 50; i++) {
  messages.push({
    id: i,
    type: "text",
    me: i % 2 === 0,
    message:
      "Lorem ipsum, dolor sit amet constea dipisicin elit. Cumque, necessitatus? " +
      i,
    time: "8:10 am",
  });
}

export { messages };
