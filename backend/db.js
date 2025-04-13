// const mongoose = require("mongoose");

// mongoose.connect("Add_your_mongodb_URL");

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//         lowercase: true,
//         minLength: 3,
//         maxLength: 30
//     },
//     password: {
//         type: String,
//         required: true,
//         minLength: 6
//     },
//     firstName: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 50
//     },
//     lastName: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 50
//     }
// });

// const accoutSchema = new mongoose.Schema({
//     userId:{
//         type: mongoose.Schema.Types.ObjectId,       //reference to user model
//         ref: 'User',
//         required: true
//     },
//     balance: {
//         type: Number,
//         required: true
//     }
// })

// const User = mongoose.model('User', userSchema);
// const Account = mongoose.model("Account", accoutSchema);

// module.exports = {
//     User,
//     Account
// };


const mongoose = require("mongoose");  
require('dotenv').config(); // Load environment variables from .env file  

// Use the MONGODB_URI from .env to connect to MongoDB  
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })  
    .then(() => console.log('MongoDB connected'))  
    .catch(err => console.error('MongoDB connection error:', err));  

const userSchema = new mongoose.Schema({  
    username: {  
        type: String,  
        required: true,  
        unique: true,  
        trim: true,  
        lowercase: true,  
        minLength: 3,  
        maxLength: 30  
    },  
    password: {  
        type: String,  
        required: true,  
        minLength: 6  
    },  
    firstName: {  
        type: String,  
        required: true,  
        trim: true,  
        maxLength: 50  
    },  
    lastName: {  
        type: String,  
        required: true,  
        trim: true,  
        maxLength: 50  
    }  
});  

const accountSchema = new mongoose.Schema({  
    userId: {  
        type: mongoose.Schema.Types.ObjectId, // reference to user model  
        ref: 'User',  
        required: true  
    },  
    balance: {  
        type: Number,  
        required: true  
    }  
});  

const User = mongoose.model('User', userSchema);  
const Account = mongoose.model("Account", accountSchema);  

module.exports = {  
    User,  
    Account  
};  