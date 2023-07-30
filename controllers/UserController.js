const { default: mongoose } = require('mongoose')
const User = require('../models/UserSchema')
//get all budget list
const getAllBudgetItems = async ( req, res) =>{
    const user_id = req.user._id
    const budgetItems = await User.find({ user_id }).sort({createdAt: -1})
    res.status(200).json(budgetItems)

}

//post a new budget item
const postNewBudgetItem = async ( req, res) =>{
    const { username,
         foodExpenses,
         rentalExpenses,
         clothingExpenses,
         transportExpenses,
         insuarance, 
         emergencyFund,
         loan} = req.body
  //setting conditions  for the fields that must be filled       
    const emptyFields = []
    if(!username){
        emptyFields.push('username')
    }
    if(!foodExpenses){
        emptyFields.push('foodExpenses')
    }
    if(!rentalExpenses){
        emptyFields.push('rentalExpenses')
    }
    if (emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill the required fields', emptyFields})
    }
// creating a new budget item
    try{
    const user_id = req.user._id
    const budgetItem = await User.create({username,
        foodExpenses,
        rentalExpenses,
        clothingExpenses,
        transportExpenses,
        insuarance, 
        emergencyFund,
        loan,
        user_id
    })
        res.status(200).json(budgetItem)
    }catch(error){
         res.status(400).emptyFieldsjson({error:error.message})
    }
}

//edit/ update a budget item
const updateBudgetItem = async ( req, res) =>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such budget item'})
    } 
    const budgetItem = await User.findOneAndUpdate({_id: id}, {...req.body})
    
    if (!budgetItem) {
        return res.satus(400).json({error: 'No such budget item'})
       }
    res.status(200).json(budgetItem)
   
}

//delete a budget item
const deleteBudgetItem =  async (req, res)=>{
    const { id } = req.params
if(!mongoose.Types.ObjectId.isValid(id))
return res.status(404).json({error: 'No such budget item'})

const budgetItem = await User.findOneAndDelete({_id: id})
 
if(!budgetItem){
    return res.status(400).json({error:'No such budget item'})
}
res.status(200).json(budgetItem)
}

module.exports = {
    getAllBudgetItems,
    postNewBudgetItem,
    updateBudgetItem,
    deleteBudgetItem
}