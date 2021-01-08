import React from 'react';

class Hobby extends React.Component {

    constructor(props) {
        super(props);
        this.state = 'action figure and dinosaurs';
}

render() {
    return(
        <div>
            {this.state}
            <h2>{this.props.name}</h2>
        
        </div>)
}
}
export default Hobby;