const { Router } = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('./../models/User');

const upload = require('multer')();

router.post(
  '/reg',
  upload.none(),
  [
    check('login', 'Минимальная длинна 4 символов').isLength({ min: 4 }),
    check('password', 'Минимальная длинна 4 символов').isLength({ min: 4 })
  ],
  async (req, res) => {
    try {

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array(), message: 'Некоректные данные при регистрации' });
      }

      const { login, password } = req.body;

      const candidate = await User.findOne({ login });

      if (candidate) {
        res.status(400).json({ message: 'Такой пользователь уже существует' });
      }
      const hashedPassword = bcrypt.hashSync(password, 8);

      const user = new User({ login, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: 'Пользователь создан' });

    } catch (e) {

      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });

    }
  })

router.post(
  '/login',
  upload.none(),
  [
    check('login', 'Введите логин').exists(),
    check('password', 'Введите пароль').exists()
  ],
  async (req, res) => {
    try {

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array(), message: 'Некоректные данные при регистрации' });
      }

      const { login, password } = req.body;

      const user = await User.findOne({ login });

      if (!user) {
        res.status(400).json({ message: 'Неверный логин или пароль' });
      }

      const isMatch = bcrypt.compareSync(password, user.password);

      if (!isMatch) {
        res.status(400).json({ message: 'Неверный логин или пароль' });
      }

      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      );

      res.json({ token, userId: user.id });


    } catch (e) {

      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });

    }
  })

module.exports = router;