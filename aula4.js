const http=require('http');
const porta=process.env.PORT

const servitor=http.createServer((res,req)=>{
    res.statusCode=200
    res.writeHead({'Content-Type':'text-plain'})
    res.end('curso CFB node js express')

});

servitor.listen(porta || 3000,()=>{ console.log('RODANDOOOO')})