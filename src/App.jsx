import React, { useEffect } from "react"
import { io, Socket } from "socket.io-client"

const App = () => {
    const socketRef = React.useRef(null)

    React.useEffect(() => {
        socketRef.current = io("https://socket-backend-test.vercel.app", {
            transports: ["websocket", "polling"],
        })
    }, [])

    return <div></div>
}

export default App
