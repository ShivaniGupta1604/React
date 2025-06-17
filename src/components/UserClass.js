import react from "react";

//react.Component is class given to us by react
// class based component is a class which extends react.Component and has a render method which returns JSX

class UserClass extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "NAME",
        location: "LOCATION",
        avatar_url:
          "https://www.dreamstime.com/vector-illustration-avatar-dummy-logo-set-image-stock-isolated-object-icon-collection-image137161298",
      },
    };

    console.log(this.state.userInfo.name, "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.state.userInfo.name, "Child Component DidMount");

    const data = await fetch("https://api.github.com/users/ShivaniGupta1604");
    const json = await data.json();

    if (json.length === 0) {
      return <Shimmer />;
    }

    console.log("JSON", json);

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log(" Component DidUpdate");
  }

  componentWillUnmount() {
    console.log(" Component Will Unmount");
  }

  //NEVER UPDATE STATE VARIABLES DIRECTLY..in fundtioanl component we use setState to update state variables while in class based components we use this.setState{}

  render() {
    //const { count1, count2 } = this.state;

    const { name, location, avatar_url } = this.state.userInfo;
    //debugger;

    console.log(name, "Child Render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>contact: {this.props.contact}</h3>
      </div>
    );
  }
}

export default UserClass;

/***
 * When the page loads:
 *
 * 1. the parent constructor is called
 * 2. parent render is called
 * 3. child constructor is called
 * 4. child renver is called
 * 5. child component didMount is called
 * 6. Parent component didMount is called
 *
 *
 * componentDidMount() is used to make API Calls ->
 */

/***
 *
 * ---MOUNTING--------
 *
 * Constructor is called witgh dummy data
 * Render happens with dummy data
 *     <HTML DUMMY>
 * Component DidMount
 *     <API CALL>
 *     <this.setState>   --> state variable is updated
 *
 *
 * ---UPDATE----------
 *
 *     render (API Data)
 *     <HTML new API Data>
 *     Component DidUpdate
 *
 *
 *
 *
 */
