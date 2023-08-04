import Button from "./Button";

export default function Friend({ friend, onSelectedFriend, selectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <li className={isSelected && "selected"}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          {" "}
          You Owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {" "}
          {friend.name} Owes You {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p> You and {friend.name} are even</p>}
      <Button onClick={() => onSelectedFriend(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}
