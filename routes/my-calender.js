const router = require('express').Router()
const supabase = require('../utils/supabaseClient')

router.get('/', async (req, res) => {
    const data = req.body.data;
    const start_date = data.start
    const end_date = data.end
    try {
        const success = await supabase
            .from('register')
            .select('events(*)')
            .gt('date', start_date)
            .lt('date', end_date)

        if (success) {
            console.log(success)
        }
        res.json(success.data[0])
        res.end()
    }
    catch{
        res.end()
        console.log("error")
    }
})



module.exports = router