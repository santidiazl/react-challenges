import { useEffect, useState } from 'react';
import './App.css';

const getRandomPosition = () => {
  const top = Math.floor(Math.random() * (window.innerHeight - 105));
  const left = Math.floor(Math.random() * (window.innerWidth - 405));

  return [top, left];
};

const Spinner = () => <div className="spinner" />;

const Modal = ({ id, handleOpen, handleClose, position }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [top, left] = position;

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div>
      <div className="modal-background" style={{ zIndex: id + 2 }} />
      <div
        className="modal-content"
        id={id}
        style={{ top, left, zIndex: id + 3 }}
      >
        {isLoading && <Spinner />}
        {!isLoading && (
          <div>
            "Modals on modals"
            <Button text="Open new modal" handleClick={handleOpen} />
            <Button
              text="Close new modal"
              handleClick={(e) => handleClose(e, id)}
            />{' '}
          </div>
        )}
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

const App = () => {
  const [modals, setModals] = useState([]);
  const [id, setId] = useState(null);

  const handleOpen = (e) => {
    const modalId = id === null ? 0 : id;
    setId(id + 1);
    const position = getRandomPosition();
    const newModal = { id: modalId, position };

    let newState = null;

    if (modals.length < 10) {
      newState = [...modals, newModal];
    } else {
      newState = [...modals.slice(1), newModal];
    }

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
      {modals.map(({ id, position }) => (
        <Modal
          id={id}
          handleOpen={handleOpen}
          handleClose={handleClose}
          key={`modal_${id}`}
          position={position}
        />
      ))}
    </div>
  );
};

export default App;
