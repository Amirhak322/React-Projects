import { useState } from "react";

export function AddFriendForm({ onHandleAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  function handleSubmit() {
    const friend = {
      id: Date.now(),
      name: name,
      image: image,
      balance: 0,
    };
    onHandleAddFriend(friend);
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👩🏼‍🤝‍🧑🏼 Friend name</label>
      <input onChange={(e) => setName(e.target.value)}></input>
      <label>🌇 Image url</label>
      <input onChange={(e) => setImage(e.target.value)}></input>
      <button className="button">Add</button>
    </form>
  );
}
