import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from "../assets/img/no-profile.png"; 
import MyProfile from "../assets/img/my-profile.png";


const Chat = (props) => {
  const isQuestion = (props.type === "question");
  console.log(isQuestion)
  const classes = isQuestion ?  'p-caht__row': 'p-chat__reverse'
  console.log(isQuestion)
  return (
    <ListItem className={classes}>
        <ListItemAvatar>
          {isQuestion ? (
            <Avatar alt="icon" src={MyProfile} />
          ) : (
            <Avatar alt="icon" src={NoProfile} />
          )}
        </ListItemAvatar>
        <div className="p-chat__bubble">
          {props.text}
        </div>
      </ListItem>
  )
}
export default Chat