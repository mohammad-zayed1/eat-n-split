import { useState } from "react";
import Button from "./Button";
import FriendsList from "./FriendsList";
import AddFriendForm from "./AddFriendForm";
import FormSplitBill from "./FormSplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState([...initialFriends]);
  const [show, setShow] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleClick() {
    setShow(!show);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShow(!show);
  }

  function handleSelectionFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShow(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          selectedFriend={selectedFriend}
          friends={friends}
          onSelectedFriend={handleSelectionFriend}
        />
        {show && (
          <AddFriendForm
            onHandleSetFriend={handleAddFriend}
            friends={friends}
          />
        )}
        <Button onClick={handleClick}>{show ? "close" : "Add Friend"}</Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}


