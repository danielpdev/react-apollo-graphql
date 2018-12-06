import React, { Component } from 'react';
import SongList from './SongList';
import AppRouter from './routes/AppRouter';
import Header from './Header';
import { Route } from "react-router-dom";
import SongCreate from './SongCreate';

const App = () => {
  return (
  <AppRouter>
    <div className="container">
      <Header />

      <Route exact path="/" component={SongList} />
      <Route  path="/create" component={SongCreate} />
      <Route  path="/update" component={SongCreate} />
      <Route  path="/delete" component={SongCreate} />
    </div>
  </AppRouter>
);
  }

export default App;