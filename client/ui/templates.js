import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";

const messages = new ReactiveVar([
  { author: "me", content: "aaaaaaa" },
  { author: "me", content: "aaaaaaa" }
]);

// this gets all the messages
Template.chatwindow.helpers({
  messages() {
    return messages.get();
  }
});

// this sets the values, gets messages const then sets new author and content
Template.chatinput.events({
  "submit #chat-input form"(e) {
    e.preventDefault();
    const content = e.target[0].value;
    content &&
      messages.set([
        ...messages.get(),
        { author: "me", content }
      ]);
    e.target[0].value = "";
  }
});

Template.chatinput.helpers({});
