import Friend from './Friend';
export default function FriendsList({ friends, onSelectedFriend, selectedFriend }) {
    const allFriends = friends.map((friend) => (
      <Friend
        onSelectedFriend={onSelectedFriend}
        selectedFriend={selectedFriend}
        key={friend.id}
        friend={friend}
      />
    ));
    return (
      <>
        <ul>{allFriends}</ul>
      </>
    );
  }