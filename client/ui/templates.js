import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";

Template.chatwindow.helpers({
  messages() {
    return [
      { author: "me", content: "aaaaaaa" },
      { author: "me", content: "aaaaaaa" }
    ];
  }
});

Template.chatinput.helpers();
