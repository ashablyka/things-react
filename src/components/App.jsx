import { Component } from 'react';
import ThingsService from '../services/ThingsService';
import Header from './Header';
import List from './List';
import AddThingForm from './AddThingForm';
import './App.css';

export default class App extends Component {
  thingsService = new ThingsService();

  state = {
    things: []
  };

  componentDidMount() {
    this.thingsService.getAllThings()
      .then((things) => this.setState({ things }));
  }

  onAddItem = (thing) => {
    this.thingsService.addThing(thing)
      .then(() => {
        this.thingsService.getAllThings()
          .then((things) => this.setState({ things }));
      });
  }

  onDeleteItem = (id) => {
    this.thingsService.deleteThing(id)
      .then(() => {
        this.thingsService.getAllThings()
          .then((things) => {
            this.setState({ things });
          });
      });
  }

  onEditItem = (id, name) => {
    this.thingsService.updateThing(id, { name })
      .then(() => {
        this.thingsService.getAllThings()
          .then((things) => {
            this.setState({ things });
          });
      });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <List
          things={this.state.things}
          onDeleteItem={this.onDeleteItem}
          onEditItem={this.onEditItem}
        />
        <AddThingForm onAddItem={this.onAddItem} />
      </div>
    )
  }
}
