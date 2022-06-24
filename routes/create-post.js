const router = require('express').Router()
const supabase = require('../utils/supabaseClient')

router.post('/', async (req, res) => {
    const data = req.body.data;
    try {
        const success = await supabase
            .from('post')
            .insert(data, { returning: 'representation' })

        if (success) {
            console.log(success)
        }
        const org_id = data.owner_id
        const post_id = success.data[0].id;

        const followers_data = await supabase
            .from('organization')
            .select('followers[]')
            .eq('id', org_id)

        const followers = followers_data.data[0].followers
        console.log(followers)

        for (let i = 0; i < followers.length; i++) {
            let buffer_data = {
                user_id: followers[i],
                post_id: post_id
            }

            const inserted = await supabase
                .from('post_buffer')
                .insert(buffer_data, { returning: 'minimal' })

            if (inserted) {
                console.log(inserted)
            }
        }

        res.end()
    }
    catch {
        res.end()
        console.log("error")
    }
})



module.exports = router