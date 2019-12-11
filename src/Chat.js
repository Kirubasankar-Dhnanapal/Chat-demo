import React, { Component } from 'react';
import Contacts from './Contacts';
import { Redirect } from 'react-router-dom';
// import ChatInput from './test/ChatInput';
// import Messages from './Messages';
// import { connect } from 'react-redux';
// import img from 'C:\Users\manjsubr\Desktop\redux\public\redux-app\public\download.jpg';
let messages = [];
let texts = {};
let result = [];
let emojiTexts = [];

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signoutFlag : false,
            signOut : false,
            message : '',
            value: 7,
            emoji: false,
            emojiS: []
        }
        this.chatRef = React.createRef();
    }

    sendText = (event) => {
        this.setState({
            sendText: event.target.value
        })
    }

      printHref(){
        var hrefRegex = /(\b(https?|ftp|http|www):\/\/[-A-Z0-9+&@#\\\/%?=~_|!:,.;]*[-A-Z0-9+&@#\\\/%=~_|])/gim;
        var a = this.state.sendText.replace(hrefRegex,'<a href="$1">$1</a>')
        var href = a.replace(/,/g," ");
        this.setState({
            hrefTag : href
        })
      }

    sendMessage = () => {
        texts['message'] = this.state.sendText;
        texts['time'] = `${new Date().getHours()}:${new Date().getMinutes()} PM`;
        messages.push(texts);
        this.setState({
            message : messages,
            emoji : false
        })
        this.printHref();
        this.chatRef.current.focus();
        // this.props.sendMessage(Messages);
    }

    logOut = () => {
        if(this.state.signOut !== true){
            this.setState({
                signOut : true,
                signoutFlag : false
            })
        }else{
            this.setState({
                signOut : false,
                signoutFlag : false
            })
        }
    }

    componentDidMount() {
        for (var i = 0; i < 45; i++) {
            result.push(`0x1F6${i}`);
            this.setState({
                emojiS: result
            })
        }
    }

    createEmoji = () => {
        if (this.state.emoji !== true) {
            this.setState({
                emoji: true
            })
        } else {
            this.setState({
                emoji: false
            })
        }
    }
    
    emojiText = (event) => {
        this.setState({
            sendText : this.state.sendText.concat(event.currentTarget.innerText)
        })  
    }

    loginPage = (e) => {
        e.preventDefault();
        this.setState({
            signoutFlag : true
        })
    }

    render() {
        if (this.state.signoutFlag) {
            return <Redirect to='/login' push={true} ></Redirect>
        }
        return (
            <div>
                <div style={{
                    position: 'relative',
                    height: 66,
                    backgroundColor: 'cadetblue',
                    justifyContent: 'center',
                    display: 'flex',
                    fontSize: '-webkit' - 'xxx' - 'large'
                }}>
                    <div style={{
                        position: 'fixed',
                        maxHeight: '100%',
                        top: '1%',
                        fontSize: 'xx-large',
                        display: 'flex'
                    }}>Chat App</div>
                    <div className='avatarDiv'>
                        <img style={{
                            position: 'fixed',
                            top: 11, cursor: 'pointer'
                        }} src="download.jpg" rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" alt="Avatar" className="avatar" onClick={this.logOut}></img>
                    </div>
                </div>

                <div style={{
                    position: 'fixed',
                    width: '20%',
                    backgroundColor: 'lightblue',
                    height: 559
                }}>
                    <Contacts></Contacts>
                </div>
                <div style={{
                    position: 'fixed',
                    top: '15%',
                    left: 'calc(100vh - 24%)',
                    overflow: 'auto',
                    width: '78%',
                    height: 'calc(100vh - 25%)'
                }}>
                    {messages !== '' ? messages.map((result) => <div><div style={{ display: 'flex', marginTop: 10, cursor: 'pointer' }}><img src="download.jpg" alt="Avatar" className="avatar"></img><div style={{ backgroundColor: 'bisque', borderRadius: '10px 10px 10px 10px' }}><p>{result.message}</p>
                    <div dangerouslySetInnerHTML={{ __html: this.state.hrefTag }}></div>
                    </div></div>
                        <span style={{ fontSize: '12px', padding: '0px 46px 0px' }}>{result.time}</span></div>
                    ) : null}
                </div>

                {this.state.signOut=== true ? <div className='signOutDiv'><div><div style={{cursor:'pointer'}}>Settings</div><br/>
                    <div style={{cursor:'pointer'}}>Change Password</div><br/>
                    <button style={{cursor:'pointer'}} onClick={this.loginPage}>Signout</button><br/>
                    </div>
                    </div> : null}


                {this.state.emoji === true ? <div className='emojiDiv'>{this.state.emojiS.map((res) => <span id='emojiId' onClick={this.emojiText}>{String.fromCodePoint(res)}</span>)}</div> : null}
                <button style={{
                    position: 'fixed', left: '19%',
                    top: '575px',
                    zIndex: 1,
                    borderRadius: '25px 25px 25px 25px'
                }} onClick={this.createEmoji}>{String.fromCodePoint(0x1F601)}</button>
                <div style={{
                    position: 'fixed',
                    top: '92%',
                    left: '22%'
                }}>
                    <input type='textarea' ref={this.chatRef} className='textAreaDiv' placeholder='Enter your Msg' onChange={this.sendText} value={this.state.sendText} />
                    <button className='sendButtonDiv' onClick={this.sendMessage}>Send</button>


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.reducers.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (value) => dispatch({
            type: 'ADD',
            value
        })
    }
}

export default (Chat);