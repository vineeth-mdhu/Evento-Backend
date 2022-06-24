const router = require('express').Router()
const supabase = require('../utils/supabaseClient')

router.get('/', async (req, res) => {
    const data = req.body.data;
    const id = data.id
    const index = data.index
    try {
        const success = await supabase
            .from('post_buffer')
            .select(
                'post(*)'
            )
            .eq('user_id', id)
            .order('created_at', { ascending: false })
            .range(index, index + 5)

        if (success) {
            console.log()
        }

        res.json(success.data)
        res.end()
    }
    catch {
        res.end()
        console.log("error")
    }
})



module.exports = router