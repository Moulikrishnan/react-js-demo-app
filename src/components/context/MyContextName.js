import React, { Component } from 'react';
// const MyContextName = React.createContext('Seperate Component');
// export default MyContextName;

class Toolbar extends React.Component {
    render(){
        return (
            <div>
                <ThemedButton />
            </div>
        );
    }
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div>
        <input defaultValue={this.context} />
      </div>
    )
  }
}

export default Toolbar;