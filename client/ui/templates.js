import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";

const messages = [
  { author: "me", content: "aaaaaaa" },
  { author: "me", content: "aaaaaaa" }
];

Template.chatwindow.helpers({
  messages() {
    return messages;
  }
});

Template.chatinput.events({
  "submit #chat-input form"(e) {
    e.preventDefault();
    const content = e.target[0].value;
    messages.push({ author: "me", content });
    console.log(messages);
  }
});

Template.chatinput.helpers({});
