import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
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
    return !this.state.monsters.length ? (
      <h1 className="tc-l ma5">Page Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Monsta Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList monsters={filteredMonsters} />
        </Scroll>
      </div>
    );
  }
}

export default App;
