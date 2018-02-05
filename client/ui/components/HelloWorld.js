import React, { Component } from "react";
import { withTracker} from 'meteor/react-meteor-data'
export default class HelloWorld extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

export default withTracker(() => {
    return {
        messages: Messages.find().fetch()
    }
})(HelloWorld)
