const router = require('express').Router()
const supabase = require('../utils/supabaseClient')

router.get('/', async (req, res) => {
    const data = req.body.data;
    const id = data.id
    try {
        const success = await supabase
            .from('events')
            .select()
            .eq('parent_org', id)
            .order('created_at', { ascending: false })

        if (success) {
            console.log(success)
        }

        res.json(update.data)
        res.end()
    }
    catch {
        res.end()
        console.log("error")
    }
})



module.exports = router