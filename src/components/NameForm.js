import React, {Component} from 'react';

class NameForm extends Component {

  constructor(){
    super();

    this.state = {
      name: '',
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
  }



  handleSubmit(e){
    e.preventDefault();
    const name = this.state.name.trim();

    if(!name){
      return;
    }
    this.props.onNameInput();
  }


  render() {
    return(
      <form className="nameForm" onSubmit ={this.handleSubmit}>
        <input
          type="text"
          placeholder ="Your Name here"
          value = {this.state.name}
          onChange={this.handleNameChange}
        />

        <input type="submit" value="Find your Pokemon!>>"/>

      </form>
    )
  }

}



export default NameForm;
