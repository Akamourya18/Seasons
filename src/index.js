import React from 'react';
import ReactDOM from 'react-dom';

/* const App = () => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
      );

      return <div>Hi there!!</div>;
    }; */

class App extends React.Component {
  constructor(props) {
    super(props);

    //THIS IS THE ONLY TIME we do direct assignment
    //to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //We called setstate
        //We can't write like : (this.state.lat=position.coords.latitude)
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }
  //React says we have to define render!!
  render() {
    return <div>Location: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
