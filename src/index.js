import React from 'react'
import ReactDOM from 'react-dom'
import { SeasonDisplay } from './SeasonDisplay';
import { Spinner } from './Spinner';

class App extends React.Component {
    
    state = { lat:null, errorMessa:'' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => { this.setState({ lat:position.coords.latitude })},
            err => {this.setState({ errorMessa: err.message })}
        )  
    }

    renderContent() {
        if (this.state.errorMessa && !this.state.lat) {
            return <div> Error:{this.state.errorMessa}</div>
        } 

        if(!this.state.errorMessa && this.state.lat) {
          return <div><SeasonDisplay lat={this.state.lat} /><br></br></div>
        }
        return <div> <Spinner message="Allow or Deny"/></div>
    }

    render () {
        return <div className="border-red">
            {this.renderContent()}
        </div>
           
    }
}

ReactDOM.render(<App/>,
    document.querySelector("#root"));
