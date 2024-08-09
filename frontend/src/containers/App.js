import logo from '../logo.svg';
import '../styles/App.css';
import React from 'react';
import ChatRoom from '../components/ChatRoom'

const App = () => {
  return (
    <div className="app">
      <ChatRoom /> {/* Render ChatRoom component */}
    </div>
  );
};

export default App;