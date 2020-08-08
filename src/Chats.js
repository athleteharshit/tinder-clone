import React from 'react';
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name= "Elon Mask"
                message= "Hii I am Elone mask"
                profilePic= "https://image.shutterstock.com/z/stock-photo-cannes-france-may-leonardo-dicaprio-attends-the-premiere-of-the-movie-once-upon-a-time-in-1433831474.jpg"
                timestamp= "55 minute ago "
            />
            <Chat 
                name= "Harshit gupta"
                message= "HTMl and CSS"
                profilePic= "..."
                timestamp= "35 minute ago "
            />
            <Chat 
                name= " Mask"
                message= "Hii I am Mask haa"
                profilePic= "https://media1.popsugar-assets.com/files/thumbor/SDW3Qye1vlhSHqfiWOot6MCLQpE/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/06/19/807/n/1922153/d5ba48fcdf586c9b_GettyImages-642711008/i/Beyonc%C3%A9.jpg"
                timestamp= " 1 hour ago "
            />
            <Chat 
                name= "Pubg"
                message= "Hii I am pubg"
                profilePic= "https://media1.popsugar-assets.com/files/thumbor/SDW3Qye1vlhSHqfiWOot6MCLQpE/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/06/19/807/n/1922153/d5ba48fcdf586c9b_GettyImages-642711008/i/Beyonc%C3%A9.jpg"
                timestamp= "5 Hour ago"
            />
        </div>
    )
}

export default Chats;
