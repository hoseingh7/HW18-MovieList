import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import Eventlst from "./components/Eventlst";
import NewMovie from "./components/NewMovie";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => event.id !== id);
    });
  };

  const addMovie = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const handleOpen = () => {
    setShowModal(true);
  };

  return (
    <div className="App">
      <Title
        title="My Movies"
        className="title-app-root"
      />
      {showEvents && (
        <div className="header-btn">
          <button onClick={() => setShowEvents(false)}>Hide</button>

          <button onClick={handleOpen}>Add New Movie</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show</button>
        </div>
      )}
      {showEvents && (
        <Eventlst
          events={events}
          handleClick={handleClick}
        />
      )}

      {showModal && (
        <Modal isSalesModal={true}>
          <NewMovie addMovie={addMovie} />
        </Modal>
      )}
    </div>
  );
}

export default App;
