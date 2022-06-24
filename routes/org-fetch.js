const router = require('express').Router()
const supabase = require('../utils/supabaseClient')

router.get('/', async (req, res) => {
    const data = req.body.data;
    const id = data.id
    const index = data.index*10;
    try {
        const success = await supabase
            .from('post')
            .select()
            .eq('owner_id', id)
            .order('created_at', { ascending: false })
            .range(index, index + 10)

        if (success) {
            console.log(success)
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