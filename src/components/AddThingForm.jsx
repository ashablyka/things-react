import { Component } from 'react';
import './AddThingForm.css';

export default class AddThingForm extends Component {
  state = {
    inputValue: ''
  };

  onInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.inputValue === '') {
      return;
    }

    this.props.onAddItem({
      name: this.state.inputValue
    });

    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <form className="add-form" onSubmit={this.onFormSubmit}>
        <input
          className="add-form__input"
          type="text"
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
        <button className="button button-add" type="submit">Add</button>
      </form>
    )
  }
}
