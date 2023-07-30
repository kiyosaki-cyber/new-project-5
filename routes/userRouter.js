const express = require('express')
const router = express.Router()
const {
    getAllBudgetItems,
    postNewBudgetItem,
    updateBudgetItem,
    deleteBudgetItem
} = require('../controllers/UserController')

const requireAuth = require('../middlewares/requireAuth')

router.use(requireAuth)

//get all budget items
router.get('/', getAllBudgetItems)

//post a budget target
router.post('/',postNewBudgetItem )

//update a budget target 
router.patch('/:id', updateBudgetItem)

// delete a budget target
router.delete('/:id', deleteBudgetItem)


module.exports = router