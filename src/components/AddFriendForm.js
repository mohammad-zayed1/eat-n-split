
import { useState } from "react";
import Button from "./Button";

export default function AddFriendForm({ onHandleSetFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (!name || !image) return;
  
      const id = crypto.randomUUID();
      const newFriend = {
        id: id,
        name: name,
        image: `${image}?=${id}`,
        balance: 0,
      };
      onHandleSetFriend(newFriend);
      setName("");
      setImage("https://i.pravatar.cc/48");
    }
    return (
      <>
        <form className="form-add-friend" onSubmit={handleSubmit}>
          <label htmlFor="name">👩🏼‍🤝‍🧑🏼 Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
  
          <label htmlFor="img">🌆 URL</label>
          <input
            id="img"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Button>Add</Button>
        </form>
      </>
    );
  }