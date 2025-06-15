import React from "react";
import Button from "./components/Button";
import FriendList from "./components/friendlist";
import FormAddFriend from "./components/formaddfriend";
import FormSplitBills from "./components/splitScreen";
import { initialFriends } from "./data/initialdata";
export default function App() {
  //this is for button to add a friend
  const [onAddFriend, SetonAddFriend] = React.useState(false);
  //this is for ui to change state when we click the button
  const [friends, setFriends] = React.useState(initialFriends);

  //creating state for select button
  const [selectedFriend, setSelectedFriend] = React.useState(null); //null means no friend is selected

  function handleaddFriend(newFriend) {
    setFriends((item) => [...item, newFriend]);
    //this will add the new friend to the list of friends

    SetonAddFriend(false);
    //this will close the form after adding a friend
  }

  function handleshowAddFriend() {
    SetonAddFriend((prev) => !prev);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((current) =>
      current && current.id === friend.id ? null : friend
    );
  }

  //split bill logic
  function handleSplitBill(value) {
    //console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    //setSelectedFriend(null); //this will close the form after splitting the bill
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          select={handleSelectedFriend}
          currentlyselected={selectedFriend}
        />

        {onAddFriend && <FormAddFriend onClick={handleaddFriend} />}

        <Button Click={handleshowAddFriend}>
          {onAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBills
          details={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
