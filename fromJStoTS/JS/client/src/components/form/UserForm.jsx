import { useState } from "react";

export default function UserForm({method, text = "submit"}) {

  const [ userInfo, setUserInfo ] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const handleChange = (event) => {
    setUserInfo({ ...setUserInfo, [ event.target.name ]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    method(userInfo);
    setUserInfo({ name: "", age: "", gender: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={userInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="age"
            name="age"
            placeholder="Age"
            value={userInfo.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={userInfo.gender}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>{text}</button>
        </div>
      </form>
    </div>
  );
}