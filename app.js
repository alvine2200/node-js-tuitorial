const http=require('http');
const name='alvine';

const server=http.createServer((req, res)=>{
    if(req.url === '/home'){
        res.end('welcome back again')
    }
    
}) 
server.listen(5000)