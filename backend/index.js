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
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    }); 
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}   
);

