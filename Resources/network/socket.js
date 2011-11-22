Gawibawibo.socket = Ti.Network.Socket.createTCP({
	host : "localhost",
	port : 2002,
	connected : function(e){
		Ti.API.info("socket connected" + e.socket );		
	},
	error : function(e){
		Ti.API.error("error : " + e.error );
		Ti.API.error("error code : " + e.errorCode );
	}
	
});

var postConnect = function(){
	
	var outData = Ti.createBuffer({ value: "SIGNIN||ygmaster||djflqjfl\n" });
	var ret = Gawibawibo.socket.write(outData);
	Ti.API.info( "Return => " + ret );	
	
}

Gawibawibo.socket.connect();
setTimeout(postConnect, 5000);

