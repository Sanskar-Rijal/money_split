import Button from "./Button";

export default function FriendList({ friends, select, currentlyselected }) {
  //const friends = initialFriends;
  return (
    <ul>
      {friends.map((item) => (
        <Friend
          friend={item}
          key={item.id}
          select={select}
          currentlyselected={currentlyselected}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, select, currentlyselected }) {
  const isSelected = currentlyselected && currentlyselected.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt="Avatar" />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p> You and {friend.name} are even </p>}
      <Button Click={() => select(friend)}>
        {console.log(friend)}
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
