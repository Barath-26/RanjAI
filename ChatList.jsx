import { Link } from "react-router-dom";
import "./ChatList.css";

const ChatList = () =>{
    return (
        <div className="chatlist">
            <span className="title">DASHBOARD</span>
            <Link to="/dashboard">Create a new chat</Link>
            <Link to="/">Explore Ranj AI</Link>
            <Link to="/">Contact</Link>
            <hr/>
            <span className="title">RECENT CHATS</span>
                <div className="list">
                    <Link to="/">My chat title</Link>
                    <Link to="/">My chat title</Link>
                    <Link to="/">My chat title</Link>
                    <Link to="/">My chat title</Link>
                    <Link to="/">My chat title</Link>
                    <Link to="/">My chat title</Link>
                    <Link to="/">My chat title</Link>
                    <Link to="/">My chat title</Link>
                    <Link to="/">My chat title</Link>
                </div>
            <hr/>
            <div className="upgrade">
                <img src="/Logo.png" alt=""/>
                <div className="texts">
                    <span>Upgrade to Ranj AI pro</span>
                </div>
            </div>
        </div>
    )
}

export default ChatList