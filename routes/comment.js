const router = require('express').Router()
const supabase = require('../utils/supabaseClient')

router.post('/', async (req, res) => {
    const data = req.body.data;
    const post_id = data.post_id;

    try {
        const success = await supabase
            .from('comment')
            .insert(data, { returning: 'minimal' })

        if (success) {
            console.log(success)
        }

        const update = await supabase
            .from('post')
            .update({ no_comment: no_comment + 1 })
            .match({ id: post_id })
    

        res.end()
}
    catch {
    res.end()
    console.log("error")
}
})



module.exports = router