import React, { useEffect } from "react"
import { io, Socket } from 'socket.io-client'


const App = () => {
    const socketRef = React.useRef(null)



    React.useEffect(() => {
        socketRef.current = io('http://localhost:8080')
    }, [])

    return <div></div>
}

export default App
