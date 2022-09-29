const EventEmmiter=require('events')

const newevent=new EventEmmiter()
newevent.on('response',()=>{
    console.log('new event emmited successfully')
})

newevent.emit('response')