var net=require('net');

var server = net.createServer(function (socket) {
    socket.on('error', function(err){
        console.log('Socket Error');
        console.log(err);
    });

    //socket.on('connect', function(){
    //    console.log('New connection');
    //    console.log(arguments);
    //});

    socket.on('close', function(){
        console.log('Connection closed');
        console.log(arguments);
    });

    socket.on('data', function(data){
       console.log(data.toString());
    });

    //var counter=0;
    //setInterval(function(){
    //    socket.write('ping'+counter++);
    //}, 1000);
});

server.on('error', function(err){
    console.log('Server Error');
    console.log(err);
});

server.listen(6000, 'localhost', function () {
    console.log('Server is started on port: ' + 6000);
});


