import { useEffect, useState } from 'react';
import './App.css';

const randomPosition = (top) => {
  if (top) {
    return Math.floor(Math.random() * (window.innerHeight - 105));
  }
  return Math.floor(Math.random() * (window.innerWidth - 405));
};

const Modal = ({ id, handleOpen, handleClose, styles }) => {
  const { top, left } = styles;
  return (
    <div>
      <div className="modal-background" style={{ zIndex: id + 2 }} />
      <div
        className="modal-content"
        id={id}
        style={{ top, left, zIndex: id + 3 }}
      >
        Modals on modals
        <Button text="Open new modal" handleClick={handleOpen} />
        <Button
          text="Close new modal"
          handleClick={(e) => handleClose(e, id)}
        />
      </div>
    </div>
  );
};

const Button = ({ text, handleClick }) => {
  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

function App() {
  const [modals, setModals] = useState([]);
  const [id, setId] = useState(null);

  const handleOpen = (e) => {
    const modalId = id === null ? 0 : id;
    const top = randomPosition(true);
    const left = randomPosition(false);
    setId(id + 1);
    const newState = [...modals, { id: modalId, top, left }];
    setModals(newState);
  };

  const handleClose = (e, id) => {
    const newState = modals.filter((modal) => modal.id !== id);
    setModals(newState);
  };

  useEffect(() => {
    console.log(modals);
  });

  return (
    <div className="App">
      Modals on modals
      <Button text="Open new modal" handleClick={handleOpen} />
      {modals.map(({ id, ...modal }) => (
        <Modal
          id={id}
          handleOpen={handleOpen}
          handleClose={handleClose}
          key={`modal_${id}`}
          styles={modal}
        />
      ))}
    </div>
  );
}

export default App;
