import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component DidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        {/* <h2>This is the about page</h2> */}
        {/* <User name="Shivani Gupta" location="Patna" contact="sGupta" /> */}
        <UserClass name="First" location="Patna" contact="sGupta" />
        {/* <UserClass name="Second" location="Faridabad" contact="mGosain" /> */}
      </div>
    );
  }
}

export default About;