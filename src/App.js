import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { monsters } from './monsters';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: monsters,
      searchField: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Monsta Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredMonsters} />
      </div>
    );
  }
}

export default App;
