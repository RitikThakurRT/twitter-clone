import React from 'react';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widget from './Widget.js';
import './App.css';
function App() {
  return (
    <div className="app">
    {/* Sidebar */}
    <Sidebar/>
    {/* Feed */}
    <Feed/>
    {/* Widget */}
    {/*<Widget/>*/}
    </div>
  );
}

export default App;
