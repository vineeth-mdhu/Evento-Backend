const router = require('express').Router()
const supabase = require('../utils/supabaseClient')

router.post('/', async (req, res) => {
    const data = req.body.data;
    try{
    const success = await supabase
        .from('events')
        .insert(data,{returning:"minimal"})

    if (success) {
        console.log(success)
    }

    res.end()
    }
    catch{
        res.end()
        console.log("error")
    }
})



module.exports = router