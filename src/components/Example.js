import React from 'react';

class Example extends React.Component {

        constructor(props) {
            super(props);
            this.state = 'hello';
        }

        componentDidMount (){
            console.log('This component did mount.');
    }

        componentDidUpdate() {
            console.log('This component has updated.');
        }

    componentWillUnmount() {
        console.log('This component will be destroyed');
    }

    myFunc = () => {
        this.forceUpdate();
    }

    
        render() {
            return(
                <div>
                    {this.state}
                    <h2>{this.props.name}</h2>
                    <h2>{this.props.dinosaur}</h2>
                </div>
            )
        }
}

export default Example;