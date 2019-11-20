import React, { Component } from 'react';
import Axios from 'axios';


class Kiruba extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseData: ''
        }
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
            this.setState({
                responseData: res.data
            })
        })
    }


    render() {
        console.log(this.state.responseData);
        return (
            <div>
                {this.state.responseData ? this.state.responseData.map(res=>res.id) : null}
            </div>
        )
}
}

export default Kiruba;