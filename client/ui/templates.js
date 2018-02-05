import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";

// this queries the database for all Messages
Template.chatwindow.helpers({
  messages() {
    return Messages.find();
  }
});

// this sets the values, gets messages const then sets new author and content
Template.chatinput.events({
  "submit #chat-input form"(e) {
    e.preventDefault();
    const content = e.target[0].value;
    content && Messages.insert({ author: "me", content });
    e.target[0].value = "";
  }
});

Template.chatinput.helpers({});
