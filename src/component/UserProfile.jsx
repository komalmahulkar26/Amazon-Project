import React from "react";

function UserProfile({ user, setUser }) {
  return (
    <div>
      <label htmlFor="">Useranem</label>
      <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
    </div>
  );
}

export default UserProfile;
