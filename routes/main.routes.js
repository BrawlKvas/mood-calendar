const { Router } = require('express')
const router = Router()
const auth = require('./../middleware/auth.middleware')
const User = require('./../models/User')
const upload = require('multer')()

router.get('/month/:year&:month', auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId })

    const year = user.calendar.find(item => item.year === +req.params.year)

    if (!year) res.status(200).json({ data: getBlankYear(+req.params.year).months[req.params.month - 1] })

    const month = year.months[req.params.month - 1]

    res.status(200).json({ data: month })

  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.put('/day/:year&:month&:day', auth, upload.none(), async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId })

    const calendar = user.calendar
    const year = calendar.find(item => item.year === +req.params.year)

    if (year) {

      year.months[req.params.month - 1][req.params.day - 1] = +req.body.mood
      
    } else {

      const blank = getBlankYear(+req.params.year)
      blank.months[req.params.month - 1][req.params.day - 1] = +req.body.mood
      calendar.push(blank)

    }

    await User.updateOne({ _id: req.user.userId }, { calendar })
    res.status(201).json({ message: 'Успешно сохранено' })

  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router


function getBlankYear(year) {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

  return {
    year,
    months: [
      new Array(31).fill(-1),
      new Array(isLeapYear ? 29 : 28).fill(-1),
      new Array(31).fill(-1),
      new Array(30).fill(-1),
      new Array(31).fill(-1),
      new Array(30).fill(-1),
      new Array(31).fill(-1),
      new Array(31).fill(-1),
      new Array(30).fill(-1),
      new Array(31).fill(-1),
      new Array(30).fill(-1),
      new Array(31).fill(-1),
    ]
  }
}