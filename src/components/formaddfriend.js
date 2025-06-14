import Button from "./Button";
import React from "react";

export default function FormAddFriend({ onClick }) {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault(); //this prevents the page from reloading when we submit the form
    //creating a new object

    //guard
    if (!name || !image) {
      return;
    }

    const newFriend = {
      id: crypto.randomUUID(),
      name: name,
      image: image,
      balance: 0,
    };
    console.log(newFriend);

    onClick(newFriend);

    //now reseting the state to normal form
    setName("");
    setImage("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      {/* we used onSubmit here so that when we press enter it will submit the
      from */}
      <label>👯‍♀️ Friend Name </label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        placeholder="April"
      />
      <label>🎆 Image Link </label>
      <input
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        required
      />
      <Button>Add</Button>
    </form>
  );
}
