import React, { Component } from "react";
import { connect } from "react-redux";
import BestFriendCard from "./BestFriendCard";

class BestFriendsList extends Component {

  TableHead = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Userpic</th>
          <th></th>
        </tr>
      </thead>
    )
  }

  render() {
    return (
      <div>
        <div className="list_title">
          <h1>Friends</h1>
        </div>
        <table>
          <this.TableHead />
          <tbody>
            {this.props.friends.map((u, i) => (<BestFriendCard friend={u} key={i} />))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps)(BestFriendsList);
