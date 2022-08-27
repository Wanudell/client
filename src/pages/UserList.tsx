import { Component } from "react";
import AdminDataService from "../services/AdminService";
import IUserData from "../interfaces/IUserData";
type Props = {};
type State = {
  users: Array<IUserData>;
};

export default class UserList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.retrieveUsers = this.retrieveUsers.bind(this);
    this.state = {
      users: [],
    };
  }
  retrieveUsers() {
    AdminDataService.getAllUsers()
      .then((response: any) => {
        this.setState({
          users: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <ul className="list-group">
          {users.length > 0 &&
            users.map((user) => (
              <li className={"list-group-item "} key={user.id}>
                {user.fullName}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
