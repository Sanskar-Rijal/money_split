import React from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Misty",
    image: "https://i.pravatar.cc/48?u=118836=",
    balance: -7,
  },
  {
    id: 933372,
    name: "May",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Ash",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [onAddFriend, SetonAddFriend] = React.useState(false);

  function handleAddFriend() {
    SetonAddFriend((prev) => !prev);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {onAddFriend && <FormAddFriend />}
        <Button Click={handleAddFriend}>
          {onAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      <FormSplitBills />
    </div>
  );
}

function FriendList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((item) => (
        <Friend friend={item} key={item.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
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
      <Button>Select</Button>
    </li>
  );
}

function Button({ children, Click = () => {} }) {
  return (
    <button className="button" onClick={() => Click()}>
      {children}
    </button>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👯‍♀️ Friend Name </label>
      <input type="text" required placeholder="April" />
      <label>🎆 Image Link </label>
      <input type="text" required />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBills() {
  return (
    <form className="form-split-bill">
      <h2>Split A bill with xyz</h2>

      <label>💸 Total Bill</label>
      <input type="number" required placeholder="100" />

      <label>🏄‍♀️ Your expense</label>
      <input type="number" required placeholder="50" />

      <label>👯‍♀️ xyz expense</label>
      <input type="number" disabled placeholder="50" />

      <label>👯‍♀️ Who is paying?</label>
      <select name="friend">
        <option value="one">You</option>
        <option value="two">Xyz</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
