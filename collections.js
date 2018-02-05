import { Mongo } from "meteor/mongo";

// without importing messages, goes and finds them and then compiles them
const Messages = new Mongo.Collection("messages");
