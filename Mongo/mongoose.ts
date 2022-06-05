const mongoose = require('mongoose');

export const connect = () => {
mongoose.connect('mongodb://127.0.0.1:27017/customerDB',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
},()=>{
    console.log('DB Connected')
})
}

export default connect;