import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './App.css';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import { connect } from 'react-redux';

class DetailPage extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            phNumber: '',
            pincode: '',
            emailId: '',
            address: '',
            firstnameError: false,
            lastnameError: false,
            addressError: false,
            pincodeError: false,
            emailError: false,
            phError: false
        }
        this.redirectFb = this.redirectFb.bind(this);
    }


    loginPage = () => {
        this.setState({
            back: true
        })
    }


    redirectFb(event, defaultValue) {
        switch (defaultValue) {
            case 1:
                window.location.replace('https://www.facebook.com/');
                break;
            case 2:
                window.location.replace('https://www.instagram.com/');
                break;
            case 3:
                window.location.replace('https://www.twitter.com/');
                break;
            case 4:
                window.location.replace('https://www.whatsApp.com/');
                break;
            default:
                break;
        }
    }

    phnumberChange = (event) => {
        const numberRegex = /[0-9]/;
        if (numberRegex.test(event.target.value)) {
            this.setState({
                phNumber: event.target.value
            });
        } else {
            this.setState({
                phNumber: ''
            });
        }
    }

    firstname = (event) => {
        this.setState({
            firstname: event.target.value,
            errorFlag: false
        });
    }

    lastname = (event) => {
        this.setState({
            lastname: event.target.value
        });
    }

    address = (event) => {
        this.setState({
            address: event.target.value
        });
    }

    mailId = (event) => {
        this.setState({
            mailId: event.target.value
        });
    }

    pincode = (event) => {
        const numberRegex = /[0-9]/;
        if (numberRegex.test(event.target.value)) {
            this.setState({
                pincode: event.target.value
            });
        } else {
            this.setState({
                pincode: ''
            });
        }
    }

    emptyCheck = () => {
        if (this.state.firstname) {
            this.setState({
                firstnameError: false
            })
        } else {
            this.setState({
                firstnameError: true
            })
        }
    }

    lastnameCheck = () => {
        if (this.state.lastname) {
            this.setState({
                lastnameError: false
            })
        } else {
            this.setState({
                lastnameError: true
            })
        }
    }

    addressCheck = () => {
        if (this.state.address) {
            this.setState({
                addressError: false
            })
        } else {
            this.setState({
                addressError: true
            })
        }
    }

    phNumberCheck = () => {
        if (this.state.phNumber) {
            this.setState({
                phError: false
            })
        } else {
            this.setState({
                phError: true
            })
        }
    }

    emailCheck = () => {
        if (this.state.emailId) {
            this.setState({
                emailError: false
            })
        } else {
            this.setState({
                emailError: true
            })
        }
    }

    pincodeCheck = () => {
        if (this.state.pincode) {
            this.setState({
                pincodeError: false
            })
        } else {
            this.setState({
                pincodeError: true
            })
        }
    }

    save = () => {
        let fetchDetails = fetch('http://kkc.mohan.work/testapi').then((res) => res.json());
        // alert(`${this.state.firstname} and ${this.state.lastname} and ${this.state.address} and ${this.state.phNumber} and ${this.state.mailId} and ${this.state.pincode}`);
    }

    componentDidMount() {
        let postResponse = axios.get('/getData').then((res)=>{
            console.log(res);
        });
    }

    render() {
        if (this.state.back) {
            return <Redirect to='/' push={true} ></Redirect>
        }

        return (
            // <div style={{ marginLeft: '5%', marginTop: '4%' }}>
            //     <Card style={{ background: 'wheat', maxWidth: '80%', marginLeft: '0%', marginTop: '-2%' }}>
            //         <div style={{ marginLeft: '5%' }}>
            //             <TextField error={this.state.firstnameError}
            //                 id="first-name"
            //                 label="First Name"
            //                 autoComplete='off'
            //                 value={this.state.firstname}
            //                 onChange={this.firstname}
            //                 onBlur={this.emptyCheck}
            //                 margin="normal"
            //                 variant="outlined"
            //                 inputProps={{
            //                     startAdornment: <InputAdornment position="start">First Name</InputAdornment>,
            //                 }}
            //             /></div><br />
            //         <div style={{ marginLeft: '5%', marginTop: '-2%' }}>
            //             <TextField
            //                 error={this.state.lastnameError}
            //                 id="last-name"
            //                 label="Last Name"
            //                 autoComplete='off'
            //                 className={'textField'}
            //                 value={this.state.lastname}
            //                 onBlur={this.lastnameCheck}
            //                 onChange={this.lastname}
            //                 margin="normal"
            //                 variant="outlined"
            //                 inputProps={{
            //                     startAdornment: <InputAdornment position="start">Last Name</InputAdornment>,
            //                 }}
            //             /></div><br />
            //         <div style={{ marginLeft: '5%', marginTop: '-2%' }}>
            //             <TextField
            //                 error={this.state.addressError}
            //                 id="standard-name"
            //                 label="Address"
            //                 autoComplete='off'
            //                 className={'textField'}
            //                 value={this.state.address}
            //                 onChange={this.address}
            //                 onBlur={this.addressCheck}
            //                 margin="normal"
            //                 variant="outlined"
            //                 inputProps={{
            //                     startAdornment: <InputAdornment position="start">Address</InputAdornment>,
            //                 }}
            //             /></div><br />
            //         <div style={{ marginLeft: '5%', marginTop: '-2%' }}>
            //             <TextField
            //                 error={this.state.phError}
            //                 id="standard-name"
            //                 label="Phone Number"
            //                 autoComplete='off'
            //                 className={'textField'}
            //                 value={this.state.phNumber}
            //                 onChange={this.phnumberChange}
            //                 onBlur={this.phNumberCheck}
            //                 margin="normal"
            //                 variant="outlined"
            //                 inputProps={{
            //                     maxLength: 10,
            //                     startAdornment: <InputAdornment position="start">Phone Number</InputAdornment>,
            //                 }}
            //             /></div><br />
            //         <div style={{ marginLeft: '5%', marginTop: '-2%' }}>
            //             <TextField
            //                 error={this.state.emailError}
            //                 id="standard-name"
            //                 label="Email Address"
            //                 autoComplete='off'
            //                 className={'textField'}
            //                 value={this.state.mailId}
            //                 onBlur={this.emailCheck}
            //                 onChange={this.mailId}
            //                 margin="normal"
            //                 variant="outlined"
            //                 inputProps={{
            //                     startAdornment: <InputAdornment position="start">Email Address</InputAdornment>,
            //                 }}
            //             /></div><br />
            //         <div style={{ marginLeft: '5%', marginTop: '-2%', display: 'flex' }}>
            //             <TextField
            //                 error={this.state.pincodeError}
            //                 id="standard-name"
            //                 label="Pincode"
            //                 autoComplete='off'
            //                 className={'textField'}
            //                 value={this.state.pincode}
            //                 onChange={this.pincode}
            //                 onBlur={this.pincodeCheck}
            //                 margin="normal"
            //                 variant="outlined"
            //                 inputProps={{
            //                     maxLength: 7,
            //                     startAdornment: <InputAdornment position="start">Pincode</InputAdornment>,
            //                 }}
            //             />
            //             <div style={{ marginLeft: '3%', marginTop: '3%' }}>
            //                 <Button variant="contained" color="primary" size="small" onClick={this.save}>
            //                     <SaveIcon />Save</Button>
            //             </div>
            //         </div><br />
            //         {/* <div style={{position:'relative',marginLeft:"20%"}}><h6>sdhsdjfhsdjf</h6></div> */}
            //     </Card>
            //     <input style={{ marginLeft: '42%', borderRadius: 11, width: 75, marginTop: 12 }} type='submit' value='Back' onClick={this.loginPage}></input>
            // </div>
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        name : state.name
    }
}

export default connect(mapStateToProps)(DetailPage);