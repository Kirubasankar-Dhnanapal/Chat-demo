import React, { Component } from 'react';
import { connect } from 'react-redux';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        console.log(this.props.Messages)
        return (
            <div>
           <div style={{
                position: 'relative',
                top: -490
                }}>{this.props.Messages}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Messages: state.Messages
    }
}


export default connect(mapStateToProps)(Messages);