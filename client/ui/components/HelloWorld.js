import React, { Component } from "react";
import { withTracker} from 'meteor/react-meteor-data'
export default class HelloWorld extends Component {
  render() {
    return (<div>
        <ul>
        {this.props.messages.map(messages => {
            <li key={messages._id}>
            {message.author}: {message.content}</li>
        })}
        </ul>
    </div>)
  }
}

//keeps track of server changes behind the scenes
export default withTracker(() => {
    return {
        messages: Messages.find().fetch()
    }
})(HelloWorld)
