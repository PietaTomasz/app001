import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const allUsers = ['Myszka Mickey', 'Kaczor Donald', 'Pies Pluto', 'Gooffy', 'Chip', 'Dale'];

class App extends React.Component {
  constructor() {
    super();    
    
    this.state = {
      filteredUsers: allUsers
    };
  }

  filterUsers(e) {
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text)
    this.setState({
      filteredUsers
    })
  }
  
  getFilteredUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }
  
  render () {
    return (
      <div>
        <input onInput={this.filterUsers.bind(this)} />
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }
};

const UsersList = ({ users }) => {
  if (users.length > 0) {
    return (
      <ul>
        {users.map(user => <li key={user}>{user}</li>)}
      </ul>
    );
  }

  return (
    <p>No results!</p>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));


export default App;
