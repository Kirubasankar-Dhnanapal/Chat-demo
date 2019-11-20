import React, { Component } from 'react';
import Contacts from './Contacts';
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

    sendMessage = () => {
        this.setState({
            emoji : false,
            sendText : '',
        })
        texts['message'] = this.state.sendText;
        texts['time'] = `${new Date().getHours()}:${new Date().getMinutes()} PM`;
        messages.push(texts);
        this.chatRef.current.focus();
        // this.props.sendMessage(Messages);
    }

    logOut = () => {
        alert('Logout')
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
                emoji: false,
                emojiTexts : []
            })
        }
    }

    emojiText = (event) => {
        emojiTexts.push(event.currentTarget.innerText);
        this.setState({
            sendText : emojiTexts
        })
        
    }

    render() {
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
                        }} src="download.jpg" rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" alt="Avatar" className="avatar" onclick={this.logOut}></img>
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
                    {messages !== '' ? messages.map((result) => <div><div style={{ display: 'flex', marginTop: 10, cursor: 'pointer' }}><img src="download.jpg" alt="Avatar" className="avatar"></img><div style={{ backgroundColor: 'bisque', borderRadius: '10px 10px 10px 10px' }}><p>{result.message}</p></div></div>
                        <span style={{ fontSize: '12px', padding: '0px 46px 0px' }}>{result.time}</span></div>
                    ) : null}
                </div>


                {this.state.emoji === true ? <div className='emojiDiv'>{this.state.emojiS.map((res) => <span id='emojiId' onClick={this.emojiText}>{String.fromCodePoint(res)}</span>)}</div> : null}
                <button style={{
                    position: 'fixed', left: '19%',
                    top: '521px',
                    zIndex: 1,
                    borderRadius: '25px 25px 25px 25px'
                }} onClick={this.createEmoji}>{String.fromCodePoint(0x1F601)}</button>
                <div style={{
                    position: 'fixed',
                    top: '92%',
                    left: 'calc(100vh - 24%)'
                }}>
                    <input type='textarea' ref={this.chatRef} style={{
                        position: 'fixed',
                        width: '22%',
                        borderLeftStyle: 'none',
                        borderTopStyle: 'none',
                        borderBottomStyle: 'double',
                        display: 'flex'
                    }} placeholder='Enter your Msg' onChange={this.sendText} value={this.state.sendText} />
                    <button style={{ position: 'fixed', left: 'calc(100vh - 20px)' }} onClick={this.sendMessage}>Send</button>


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