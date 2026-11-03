const router = require('express').Router();

const db = require('../db');

const {
  wrap,
  auth,
  role
} = require('../middleware');

router.use(auth, role('student', 'faculty'));

router.get('/', wrap(async (req, res) => {

  const [rows] = await db.query(`
    SELECT
      id,
      title,
      message,
      category,
      audience,
      created_at
    FROM announcements

    WHERE audience = 'all'
       OR audience = ?

    ORDER BY created_at DESC

    LIMIT 50
  `, [req.user.role]);

  res.json(rows);

}));

module.exports = router;