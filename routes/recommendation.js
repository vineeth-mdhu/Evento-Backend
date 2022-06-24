const router = require('express').Router()
const supabase = require('../utils/supabaseClient')

router.get('/', async (req, res) => {
    const data = req.body.data;
    const id = data.id

    try {
        let org_following = await supabase
            .from('user')
            .select('following[]')
            .eq('id', id)

        let q = org_following.data[0].following
        let set = new Set()
        let level = 3

        if (q) {
            let size = q.length
            while (level > 0 && q.length > 0) {
                let root = q.shift()
                
                if(level!=3)
                set.add(root)

                let org_data = await supabase
                    .from('organization')
                    .select('affeliate_org[]')
                    .eq('id', root)

                if (org_data) {
                    console.log(org_data)
                }


                let orgs = org_data.data[0].affeliate_org

                console.log(orgs)

                if (orgs)
                    for (let i = 0; i < orgs.length; i++) {
                        if (!set.has(orgs[i])) {
                            q.push(orgs[i])
                        }
                    }

                size--

                if (size == 0) {
                    size = q.length
                    level--
                }
            }
        }

        res.json({ data: Array.from(set) })
        res.end()
    }
    catch{
        res.end()
        console.log("error")
    }
})




module.exports = router