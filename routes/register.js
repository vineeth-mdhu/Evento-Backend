const router = require('express').Router()
const supabase = require('../utils/supabaseClient')

router.post('/', async (req, res) => {
    const data = req.body.data;
    try {
        const success = await supabase
            .from('register')
            .insert(data, { returning: "minimal" })

        const update = await supabase
            .from('events')
            .update({ cur_strength: cur_strength + 1 })
            .match({ id: data.event_id })

        if (success) {
            console.log(success)
        }

        if (update) {
            console.log(update)
        }

        res.end()
    }
    catch{
        res.end()
        console.log("error")
    }
})



module.exports = router