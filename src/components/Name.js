import React from 'react';

class Name extends React.Component {

    constructor(props) {
        super(props);
        this.state = 'Talon';
}

render() {
    return(
        <div>
            {this.state}
            <h2>{this.props.name}</h2>
        
        </div>)
}
}
export default Name;
