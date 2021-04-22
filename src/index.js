import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

/* const App = () => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
      );

      return <div>Hi there!!</div>;
    }; */

class App extends React.Component {
  state = { lat: null, errorMessage: '' };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  //React says we have to define render!!
  render() {
    if (this.state.lat && !this.state.errorMessage)
      return <SeasonDisplay lat={this.state.lat} />;

    if (!this.state.lat && this.state.errorMessage)
      return <div>Error: {this.state.errorMessage}</div>;

    return <Spinner message="Please accept location request" />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
