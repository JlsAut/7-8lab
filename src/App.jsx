import React from "react";
import "./styles.css";
import "./split.css";
import UserList from "./components/UserList";
import BestFriendsList from "./components/BestFriendsList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="split left">
          <UserList />
        </div>
        <div className="split right">
          <BestFriendsList />
        </div>
      </div>
    );
  }
}
export default App;
