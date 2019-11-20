import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from '../Chat';
let Messages = [];

// class ChatInput extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             sendText : ''
//         }
//     }

//     sendText = (event) => {
//         this.setState({
//             sendText : event.target.value
//         })
//     }

//     sendMessage = () => {
//         Messages.push(this.state.sendText);
//         this.props.sendMessage(Messages);
//     }

//     render() {
//         return (
//             <div style={{display:'flex'}}>
//                 <input type='textarea' style={{
//                     position: 'relative',
//                     width: 900,
//                     borderLeftStyle: 'none',
//                     borderTopStyle: 'none',
//                     borderBottomStyle: 'double'
//                 }} placeholder='Enter your Msg' onChange={this.sendText} value={this.state.sendText}/>
//                 <button onClick={this.sendMessage}>Send</button>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         Messages: state.Messages
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessage: (Messages) => dispatch({
//             type: 'Name',
//             Messages
//         })
//     }
// }

const ChatInput = React.forwardRef((props,ref)=>{
    return <Chat ref={ref}/>
})

export default (ChatInput);