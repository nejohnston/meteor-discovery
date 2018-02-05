import { Template } from "meteor/templating";

Template.chatwindow.helpers({
  messages() {
    return [
      { author: "me", content: "aaaaaaa" },
      { author: "me", content: "aaaaaaa" }
    ];
  }
});

Template.chatinput;
