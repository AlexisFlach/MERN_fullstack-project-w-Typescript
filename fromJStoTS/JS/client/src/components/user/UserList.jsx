export default function UserList({users}) {
  return (
    <div>
      <h2>Users</h2>
      {users.map((u) => (
        <div key={u.name}>
          <p>{u.name}</p>
          <p>{u.age}</p>
          <p>{u.gender}</p>
        </div>
      ))}
    </div>
  );
}