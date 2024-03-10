import { useState } from "react";
import { AddFriendForm } from "./AddFriendForm";
import { Friend } from "./Friend";
import { initialFriends } from "./App";
import { BillData } from "./BillData";

export function Friends() {
  const [selectedName, setSelectedName] = useState(null);
  const [show, setShow] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selected, setSelected] = useState(null);
  const [balance, setBalance] = useState(null);
  function handleSelect(id, name, balance) {
    if (selected === id) {
      setSelected(null);
      setSelectedName(null);
      setBalance(null);
    } else {
      setSelected(id);
      setSelectedName(name);
      setBalance(balance);
    }
  }
  function handleBalance(b) {
    console.log(b);
    setFriends(
      friends.map((friend) =>
        friend.id === selected ? { ...friend, balance: Number(b) } : friend
      )
    );
    setBalance(b);
    console.log(friends);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShow(!show);
  }

  return (
    <>
      <div className="sidebar">
        <ul>
          {friends.map((friend) => (
            <Friend
              id={friend.id}
              name={friend.name}
              image={friend.image}
              balance={friend.balance}
              selected={selected}
              onHandleSelect={handleSelect}
              onHandleBalance={handleBalance}
            />
          ))}
        </ul>
        {show && <AddFriendForm onHandleAddFriend={handleAddFriend} />}
        <button className="button" onClick={() => setShow(!show)}>
          {show === true ? "close" : "Add a friend"}
        </button>
      </div>
      {selected && (
        <BillData
          // id={selected}
          balance={balance}
          name={selectedName}
          onHandleBalance={handleBalance}
          key={selected}
        />
      )}
    </>
  );
}
