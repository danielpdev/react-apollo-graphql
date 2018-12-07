import React, { Component } from 'react';
import SongList from './SongList';
import AppRouter from './routes/AppRouter';
import Header from './Header';
import { Route } from "react-router-dom";
import SongCreate from './SongCreate';
import SongDetails from './SongDetails';

const App = () => {
  return (
  <AppRouter>
    <div className="container">
      <Header />

      <Route exact path="/" component={SongList} />
      <Route  path="/songs/new" component={SongCreate} />
      <Route  path="/song/:id" component={SongDetails} />
    </div>
  </AppRouter>
);
  }

export default App;