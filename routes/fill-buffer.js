const router = require('express').Router()
const supabase = require('../utils/supabaseClient')

router.post('/', async (req, res) => {
    const req_data = req.body.data;
    const user_id = req_data.user_id
    const org = req_data.org
    try {

        const { data, error } = await supabase
            .from('post')
            .select('id')
            .in('owner_id',org)
            .order('created_at', { ascending: false })

        if (data) {
            for(var i=0;i<data.length;i++){
                const inserted = await supabase
                .from('post_buffer')
                .insert({user_id:user_id,post_id:data[i].id})

                if(inserted){
                    console.log(inserted)
                }
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