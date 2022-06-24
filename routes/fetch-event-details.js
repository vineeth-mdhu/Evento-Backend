const router = require('express').Router()
const supabase = require('../utils/supabaseClient')

router.get('/', async (req, res) => {
    const data = req.body.data;
    try {
        const success = await supabase
            .from('events')
            .select()

        if (success) {
            console.log(success)
        }

        res.json(success.data[0])
        res.end()
    }
    catch {
        res.end()
        console.log("error")
    }
})



module.exports = router