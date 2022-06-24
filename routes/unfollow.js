const router = require('express').Router()
const supabase = require('../utils/supabaseClient')

router.post('/', async (req, res) => {
    const data = req.body.data;
    try {
        const success = await supabase
            .rpc('remove_array', {
                id: data.org_id,
                new_user: data.user_id
            })

        const update = await supabase
            .rpc('remove_following', {
                id: data.user_id,
                new_org: data.org_id
            })

        if (success) {
            console.log(success)
        }

        if (update) {
            console.log(update)
        }

        res.end()
    }
    catch {
        res.end()
        console.log("error")
    }
})



module.exports = router