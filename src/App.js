import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App =() =>{
    return(
        <ChatEngine 
        height = "100vh"
        projectID="e98bb5ec-84e8-4ec0-b2bb-0c12634583c7"
        userName="Pranay Meshram"
        userSecret="Pranay@321"
        renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />
    );
}
export default App;