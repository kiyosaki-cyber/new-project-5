const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
    }
    ,foodExpenses: {
        type: Number, String,
    }
    ,rentalExpenses:{
        type: Number,String,
    }
    ,clothingExpenses: {
        type: Number, String,
    }
    ,transportExpenses: {
        type:Number, String,
    }
    ,insuarance: {
        type: Number, String
    }
    ,emergencyFund:{
        type: Number, String
    }
    ,loan: {
        type: Number, String
    },
    user_id: {
        type: String,
        required: true
    }

},
{
    timestamps: true
}
)
module.exports= mongoose.model('User', userSchema)