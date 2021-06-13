import React from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

class UsersList extends React.Component {
  state = {
    userInfo: undefined
  };

  gettingUsers = async () => {
    const api_url = await fetch("https://randomuser.me/api/?results=10");
    const data = await api_url.json();

    this.setState({
      userInfo: data.results
    });
  };

  componentDidMount() {
    this.gettingUsers();
  }

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
          <h1>People you may know</h1>
        </div>
        <table>
          <this.TableHead />
          <tbody>
            {this.state.userInfo &&
              this.state.userInfo.map((u, i) => <UserCard user={u} key={i} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state
  };
}

export default connect(mapStateToProps)(UsersList);
