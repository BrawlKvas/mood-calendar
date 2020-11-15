const { Router } = require('express')
const router = Router()
const auth = require('./../middleware/auth.middleware')

router.get('/test', auth, async (req, res) => {
  try {
    res.status(201).json({message: `Ваш id ${req.user.userId}`})
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router