import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDeleteUser = (id) => {
    /* make sure user is confirmed deletion  */

    console.log(id);
    fetch(`https://coffee-store-server-seven-gamma.vercel.app/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log(data);
          const remaining = users.filter((user) => user._id == id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <h1 className="text-4xl"> Users: {loadedUsers.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button className="btn btn-accent">Edit</button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-accent">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
