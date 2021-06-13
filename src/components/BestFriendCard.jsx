import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteFromFriends } from "./../redux/actions";
import Button from "./Button";
import UserAvatar from "./UserAvatar";

const BestFriendCard = props => {
  return (
    <tr>
      <td>{props.friend.name}</td>
      <td>{props.friend.from}</td>
      <td>{props.friend.phone}</td>
      <td><UserAvatar src={props.friend.photo} width={100} height={100} /></td>
      <td><Button label="Remove from friends" onClick={() => props.deleteFromFriends(props.friend)} /></td>
    </tr>
  );
};

function mapStateToProps(state) {
  return {
    friends: this.state
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ deleteFromFriends }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(BestFriendCard);
