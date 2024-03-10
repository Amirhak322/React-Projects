export function Friend({ id, name, image, balance, selected, onHandleSelect }) {
  return (
    <>
      <li>
        <img src={image} alt="profilePic" />
        <h3>{name}</h3>
        <p className={balance < 0 ? "red" : balance > 0 ? "green" : ""}>
          {balance < 0
            ? `You owe ${name} ${Math.abs(balance)}$  `
            : balance > 0
            ? `${name} owes You ${balance}$  `
            : `You and ${name} are even`}
        </p>
        <button
          className="button"
          onClick={() => onHandleSelect(id, name, balance)}
        >
          {selected === id ? "close" : "select"}
        </button>
      </li>
    </>
  );
}
