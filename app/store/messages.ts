import { MessageModel } from "../interfaces";

let messages: MessageModel[] = [];

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

messages.push({
  id: messages.length,
  me: messages.length % 2 === 0,
  type: "image",
  message: ["http://placehold.it/180x180"],
  time: "8:11 pm",
});

messages.push({
  id: messages.length,
  me: messages.length % 2 === 0,
  type: "image",
  message: ["http://placehold.it/180x180", "http://placehold.it/180x180"],
  time: "8:11 pm",
});

messages.push({
  id: messages.length,
  me: messages.length % 2 === 0,
  type: "image",
  message: [
    "http://placehold.it/180x180",
    "http://placehold.it/180x180",
    "http://placehold.it/180x180",
  ],
  time: "8:11 pm",
});

messages.push({
  id: messages.length,
  me: true,
  type: "image",
  message: [
    "http://placehold.it/180x180",
    "http://placehold.it/180x180",
    "http://placehold.it/180x180",
    "http://placehold.it/180x180",
    "http://placehold.it/180x180",
    "http://placehold.it/180x180",
    "http://placehold.it/180x180",
    "http://placehold.it/180x180",
    "http://placehold.it/180x180",
    "http://placehold.it/180x180",
    "http://placehold.it/180x180",
    "http://placehold.it/180x180",
  ],
  time: "8:11 pm",
});

messages.push({
  id: messages.length,
  me: false,
  type: "voice",
  message: "https://www.soundjay.com/nature/breaking-ice-03.mp3",
  time: "8:15 pm",
});

messages.push({
  id: messages.length,
  me: true,
  type: "voice",
  message: "https://www.soundjay.com/nature/breaking-ice-03.mp3",
  time: "8:15 pm",
});

messages = messages.reverse();

export { messages };
