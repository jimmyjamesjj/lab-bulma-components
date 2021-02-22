import React from 'react';
import Navbar from './navbar/Navbar.js'
import FormField from './navbar/formfield/FormField.js'


class App extends React.Component {
  render(){
      return (
          <React.Fragment>
              <Navbar title="Navbar" />
              <FormField title ="FormField"/>
          </React.Fragment>
      )
  }
}

export default App;






