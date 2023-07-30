const express = require('express')

const app = express() 

app.listen('5500', () => {
    console.log('server running on port 5500');
})