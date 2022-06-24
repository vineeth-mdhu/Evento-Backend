const router = require('express').Router()
const supabase = require('../utils/supabaseClient')

router.post('/', async (req, res) => {
    const data = req.body.data;
    try {
        const success = await supabase
            .rpc('unliked', {
                id: data.id,
                new_user: data.new_user
            })

        if (success) {
            console.log(success)
        }

        res.end()
    }
    catch {
        res.end()
        console.log("error")
    }
})



module.exports = router