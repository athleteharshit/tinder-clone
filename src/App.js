import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";


const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat"/>
            <ChatScreen />
          </Route>
          <Route exact path="/chat">
            <Header backButton="/"/>
             <Chats />
          </Route>
          <Route exact path="/">
            <Header />
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
