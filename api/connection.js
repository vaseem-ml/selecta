
module.exports = function(io) { 
    const users = {}
    const currentUsersWithStatus = []
    io.on('connection', (socket) => {

        socket.on('newUser', (userData)=> {  
            name=userData.user_id;
            users[socket.id] = name
            let existUser = 0
            if( currentUsersWithStatus.length == 0 ) {
                console.log('you are in if condition on 0 length')
                test = {user: name, status: userData.status}
            } else {
                for( var i=0; i< currentUsersWithStatus.length; i++) {
                    if(currentUsersWithStatus[i].user==name) {
                        console.log('if in loop running') 
                        existUser += 1 
                    }
                }
            }

            if( existUser == 0  ) {  
                console.log(`if condition run in exist block there ${existUser} and ${currentUsersWithStatus.length}`)
                currentUsersWithStatus.push({ user: name, status: userData.status })
            } else {
                if(currentUsersWithStatus.length > 0) {
                    for( var i=0; i<currentUsersWithStatus.length; i++) {
                        if(currentUsersWithStatus[i].user==userData.user_id) {
                            if(currentUsersWithStatus[i].status!=userData.status) {
                                
                                currentUsersWithStatus.splice(i, 1);
                                
                                currentUsersWithStatus.push({ user: name, status: userData.status })
                            
                            }
                        }
                    }
                }
                
                
            } 
            

            console.log(currentUsersWithStatus);

            socket.broadcast.emit('currentUsersDetail', { userData: currentUsersWithStatus })
        })
        socket.on('disconnect', (data) => {
            console.log(`${users[socket.id]} is disconnected`)
            
            console.log(users)
            delete users[socket.id];
        })
    });  
}