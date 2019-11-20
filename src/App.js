import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';

const userDetails = [{ 'userName': 'Kiruba', 'password': 'Kiruba@1234' }]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setName: [],
            password: '',
            testArray: []
        }
        this.getRowIndex = this.getRowIndex.bind(this);
    }


    componentDidMount() {
        const data = {
            "id": 3,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
              "street": "Skiles Walks",
              "suite": "Suite 351",
              "city": "Roscoeview",
              "zipcode": "33263",
              "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
              }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
              "name": "Keebler LLC",
              "catchPhrase": "User-centric fault-tolerant solution",
              "bs": "revolutionize end-to-end systems"
            }
          }
        Axios.post('https://jsonplaceholder.typicode.com/posts/3', { data }).then(res => {
            console.log(res);
            console.log(res.data);
        });

        Axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            this.setState({
                setName: res.data
            })
            console.log(res);
            console.log(res.data);
        });


        // Axios.get('http://thottakaaran.com/kiruba/insert.php').then((res) =>
        //     this.setState({
        //         testArray: res.data
        //     })
        // )
    }

    facebook = () => {
        if (userDetails.filter(res => res.userName === this.state.setName && res === this.state.password)) {
            this.setState({
                navigate: true
            });
        } else {
            alert('UserName or Password error');
        }
    }

    getName = (event) => {
        this.setState({
            setName: event.target.value
        })
    }

    validateName = (event) => {
        const a = /[a-z]/
        if (a.test(this.state.setName)) {
        } else {
        }
    }

    getPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    validatePassword = (event) => {
        if (/^([a-zA-Z0-9@*#]{8,15})$/.test(this.state.password)) {
            this.setState({
                passwordError: ''
            })
        } else {
            this.setState({
                passwordError: 'Your Password is Not Valid'
            })
        }
    }

    setData = () => {
        var rows = document.getElementsByTagName('tr');
        var a = document.getElementsByTagName('tr')[0].cells[0].innerHTML;

        this.setState({
            navigate: true
        });
        var name = this.state.testArray.map((re) => re.name);
        this.props.onSetValue(name);
    }


    myFunction(x) {
        console.log("Row index is: " + x.rowIndex);
    }


    getRowIndex(x) {
        // var rows = document.getElementById('table');
        const index = x.currentTarget.rowIndex;
        console.log(index);
        // var rows = document.getElementsByTagName('tr');
        // for (var x = 0;x<rows.length; x++) {
        //     console.log('rowIndex=' + rows[x].rowIndex);
        // }
    }


    render() {
        console.log(this.state.setName);
        console.log(this.state.testArray);
        if (this.state.navigate) {
            return <Redirect to='/detailPage' push={true} ></Redirect>
        }
        console.log(this.state.testArray);
        return (
            <div style={{ background: 'red', height: 610 }}>
                {/* <div style={{ display: 'flex', position: 'relative',marginLeft:'36%' }}>
                    <h1>Login Page</h1></div>
                <div style={{ display: 'flex' }}>
                    <div style={{ left: '28%', position: 'relative', border: '2px solid',borderRadius:30, borderColor:'yellow',top: 40, width: '27%', height: 160 }}>
                        <div style={{ position: 'relative', left: '18%', top: '17%', fontFamily: 'sans-serif' }}>
                            Name : <input style={{ width: '45%', maxWidth: '90%',borderRadius:5 }} type='text' onChange={this.getName} value={this.state.setName} onBlur={this.validateName} />
                        </div>
                        <div style={{ position: 'relative', left: 39, top: '25%', fontFamily: 'sans-serif' }}>
                            Password : <input style={{ width: '45%', maxWidth: '90%' ,borderRadius:5 }} type='password' value={this.state.password} onBlur={this.validatePassword} onChange={this.getPassword} />
                        </div>
                        <div style={{ left: '43%', position: 'relative', top: '40%' }}>
                            <input className={'buttonStyle'} type='submit' value='Login' href='/DetailPage' onClick={this.facebook}></input>
                            <div style={{position:'relative',marginLeft:'-40px',fontFamily:'bold'}}>Click here to SignUp</div>
                        </div>
                    </div>
                    </div> */}

                <div>
                    <table id='table' className='table'>
                        <thead>
                            <td>ID</td>
                            <td>Name</td>
                            <td>UserName</td>
                            <td>Email</td>
                        </thead>
                        {this.state.setName.map((re) =>
                            <tr id='row' style={{ cursor: 'pointer' }} onClick={(x)=>this.getRowIndex(x)}>
                                <td>{re.id}</td>
                                <td>{re.name}</td>
                                <td>{re.username}</td>
                                <td>{re.email}</td>
                            </tr>)
                        }
                    </table>

                    <button onClick={this.setData}>Submit</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetValue: (name) => dispatch({
            type: 'Name',
            name
        })
    }
}

export default (App);
