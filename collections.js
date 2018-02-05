import { Mongo } from "meteor/mongo";

// without importing messages, goes and finds them and then compiles them
// isomorphic environment, clones code between the client and the server
// meteor syncs the environment of code between client and server
const Messages = new Mongo.Collection("messages");
