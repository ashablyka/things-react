import React from 'react';
import { Component } from 'react';
import './ListItem.css';

export default class ListItem extends Component {
  state = {
    name: '',
    isReadOnly: true,
    errorPlaceholder: false
  }

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ name: this.props.name });
  }

  onDeleteClick = (id) => {
    this.props.onDeleteItem(id);
  }

  onEditClick = (id) => {
    this.setState({
      isReadOnly: false
    });
    this.inputRef.current.focus();
  }

  onInputChange = (e) => {
    this.setState({ name: e.target.value });
  }

  onItemSubmit = (e) => {
    e.preventDefault();
    if (this.state.isReadOnly) {
      return;
    }

    if (this.state.name === '') {
      this.setState({ errorPlaceholder: true });

      return;
    }

    this.setState({ isReadOnly: true });
    this.props.onEditItem(this.props.id, this.state.name);
  }

  onBlur = (e) => {
    this.onItemSubmit(e);
  }

  render() {
    const { id } = this.props;
    const { name, isReadOnly } = this.state;
    const placeholder = this.state.errorPlaceholder ? 'Enter a name' : null;

    return (
      <li className="item">
        <form className="item__form" onSubmit={this.onItemSubmit}>
          <input
            className="item__input"
            ref={this.inputRef}
            type="text"
            value={name}
            readOnly={isReadOnly}
            onChange={this.onInputChange}
            onBlur={this.onBlur}
            placeholder={placeholder}
          />
          <button className="button button-edit" type="button" onClick={() => this.onEditClick(id)}>Edit</button>
          <button className="button button-delete" type="button" onClick={() => this.onDeleteClick(id)}>Delete</button>
        </form>
      </li >
    )
  }
}
