/* Qestion and code Error Fixed and answer dena hai audio record and send interview then next question pe jana hai
Question :- Consider this React component used for real-time chat updates:
*/
/*
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Chat = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const socket = io('http://localhost:3000');
    socket.on('chat message', msg => {
      setMessages([...messages, msg]);
    });
    return () => socket.disconnect();
  }, [messages]);

  return (
    <ul>
      {messages.map((msg, index) => (
        <li key={index}>{msg}</li>
      ))}
    </ul>
  );
};
*/

/*
Identify the inefficiency in state updating with the messages array and propose an 
improved approach to handle new chat messages efficiently.
*/

// Answer :-
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const Chat = ({ userId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // ✅ Create socket connection only once when component mounts
    const socket = io("http://localhost:3000");

    // ❌ Problem in original code:
    // setMessages([...messages, msg]) captures an *old* version of messages
    // and since "messages" was added to dependency array, this effect re-runs
    // on every update → creating multiple sockets and duplicate messages.

    // ✅ FIX 1: Use functional update to always access the latest state
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // ✅ FIX 2: Cleanup the socket connection when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []); // ✅ FIX 3: Empty dependency array so effect runs only once

  return (
    <ul>
      {messages.map((msg, index) => (
        <li key={index}>{msg}</li>
      ))}
    </ul>
  );
};

export default Chat;

/*
| Issue                        | Description                                                                        | Fix                                        |
| ---------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------ |
| **Inefficient state update** | Using `setMessages([...messages, msg])` copies old array and causes stale closure. | Use `setMessages(prev => [...prev, msg])`. |
| **Re-running effect**        | Dependency `[messages]` makes effect run every time state changes.                 | Remove it → use `[]` so it runs only once. |
| **Memory leaks**             | Socket not cleaned up properly.                                                    | Add `socket.disconnect()` in cleanup.      |

*/
