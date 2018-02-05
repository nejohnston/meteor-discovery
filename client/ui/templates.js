import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";

const messages = new ReactiveVar([
  { author: "me", content: "aaaaaaa" },
  { author: "me", content: "aaaaaaa" }
]);

Template.chatwindow.helpers({
  messages() {
    return messages.get();
  }
});

Template.chatinput.events({
  "submit #chat-input form"(e) {
    e.preventDefault();
    const content = e.target[0].value;
    messages.set([...messages.get(), { author: "me", content }]);
    console.log(messages);
  }
});

Template.chatinput.helpers({});
