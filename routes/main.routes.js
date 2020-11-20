const { Router } = require('express')
const router = Router()
const auth = require('./../middleware/auth.middleware')
const User = require('./../models/User')

router.get('/month/:year&:month', auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId })

    const year = user.calendar.find(item => item.year === +req.params.year)

    if (!year) res.status(200).json({ data: [] })

    const month = year.months[req.params.month - 1]

    if (!month)
      res.status(200).json({ data: [] })
    else
      res.status(200).json({ data: month })

  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router