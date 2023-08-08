//@desc user desc
//@router POST /api/register
//@access public 
const registerContact = AsyncHandler(async (req, res) => {
    res.json({ message: 'user register' })
})