import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        name: 'peterson'
    };
    render() {
        return(
            <h2>Hello {this.state.name}</h2>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));