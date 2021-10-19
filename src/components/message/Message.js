import React, { forwardRef } from 'react'
import { Card, Typography, CardContent } from '@mui/material';
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                        {!isUser ? message.username+ ': ' + message.text : message.text} 
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
