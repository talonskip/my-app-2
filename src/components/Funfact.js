import React from 'react';

class Funfacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = 'NAVY Sailor';
}

render() {
    return(
        <div>
            {this.state}
            <h2>{this.props.name}</h2>
        
        </div>)
}
}
export default Funfacts;