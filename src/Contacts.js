import React, { Component } from 'react';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names : ['Kiruba','Sankar','Manjunath','Saravanan','Balaji'],
            names1 : ['Kiruba','Sankar','Manjunath','Saravanan','Balaji'],
        }
    }

    searchUser = (e) => {
        if(e.target.value){
        let searchResults = this.state.names.filter(user=>user.toLowerCase().search(e.target.value)>=0).map(re=>re);
        this.setState({
            names : searchResults
        })
    }else{
        this.setState({
            names : this.state.names1
        })
    }
}

    render() {
        return (
            <div>
                
                <div style={{textAlign:'center',fontSize: 23}}>Search Your Friend</div>
                <div style={{position: 'fixed',left: '4%', marginTop: '1%',width:'calc(100vh - 35%)'}}><input type='text' className='searchBox' onChange={this.searchUser}></input></div>
                <div className='wholeMessageDiv'>{
                    this.state.names.map(re=> <div style={{position: 'relative',marginTop: '5px'}}><button className='buttonDive'>{re}</button></div> )
                }
                </div>
            </div>
        )
    }
}

export default (Contacts);