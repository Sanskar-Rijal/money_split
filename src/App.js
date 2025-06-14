import React from "react";
import Button from "./components/Button";
import FriendList from "./components/friendlist";
import FormAddFriend from "./components/formaddfriend";
import FormSplitBills from "./components/splitScreen";

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
  //this is for button to add a friend
  const [onAddFriend, SetonAddFriend] = React.useState(false);
  //this is for ui to change state when we click the button
  const [friends, setFriends] = React.useState(initialFriends);

  function handleaddFriend(newFriend) {
    setFriends((item) => [...item, newFriend]);
    //this will add the new friend to the list of friends

    SetonAddFriend(false);
    //this will close the form after adding a friend
  }

  function handleshowAddFriend() {
    SetonAddFriend((prev) => !prev);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {onAddFriend && <FormAddFriend onClick={handleaddFriend} />}

        <Button Click={handleshowAddFriend}>
          {onAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      <FormSplitBills />
    </div>
  );
}
