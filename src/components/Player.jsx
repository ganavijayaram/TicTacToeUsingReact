import { useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditing() {
    setIsEditing((editing) => !editing);
  }

  function handleSave(e) {
    setPlayerName(e.target.value);
  }

  let newPlayerName = <span className="player-name">{playerName}</span>;
  let buttonName = "Edit";

  if (isEditing) {
    newPlayerName = (
      <input
        placeholder={playerName}
        type="text"
        required
        value={playerName}
        onChange={(e) => handleSave(e)}
      ></input>
    );
    buttonName = "Save";
  }

  return (
    <>
      <li>
        <span className="player">
          {newPlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={() => handleEditing()}>{buttonName}</button>
      </li>
    </>
  );
}

export default Player;
