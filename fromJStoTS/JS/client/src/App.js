import { useState } from "react";
import UserForm from "./components/form/UserForm";
import UserList from "./components/user/UserList";
import "./App.css";

function App() {
  const [ users, updateUsers ] = useState([]);

  const addContact = (user) => {
    console.log(user)
    updateUsers([ ...users, user ]);
  };

  return (
    <div className="App">
      <UserForm method={addContact} text="Create user" />
      <UserList users={users} />
    </div>
  );
}

export default App;