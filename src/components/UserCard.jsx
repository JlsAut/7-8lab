import React from "react";
import UserAvatar from "./UserAvatar";
import Button from "./Button";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToFriends } from "./../redux/actions";

const UserCard = props => {
  return (
    <tr>
      <td>{props.user.name.first} {props.user.name.last}</td>
      <td>{props.user.location.city}</td>
      <td>{props.user.phone}</td>
      <td><UserAvatar src={props.user.picture.large} width={100} height={100} /></td>
      <td><Button onClick={() => props.addToFriends(props.user)} label={"Add to friends"} /></td>
    </tr>
  );
};

function mapStateToProps(state) {
  return {
    friends: this.state
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addToFriends }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(UserCard);
