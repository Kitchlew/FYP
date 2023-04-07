const app= require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }}
);
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 5500;
app.get('/', (req, res) => {
    res.send('Hello World!');
}); 
io.on('connection', (socket) => {
    socket.emit('me', socket.id);
    console.log('a user connected');
    socket.on('disconnect', () => {
        socket.broadcast.emit('callEnded');
        console.log('user disconnected');
    }); 
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
    socket.on('callUser', ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit('callUser', { signal: signalData, from, name });
    }
    );
    socket.on('answerCall', (data) => {
        io.to(data.to).emit('callAccepted', data.signal);
    }
    );
    
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}   
);

