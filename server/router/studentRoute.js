const express = require('express');
const { getStudents, getStudent, createStudent,  deleteStudent } = require('../controllers/student');
const router = express.Router();

router.get('/students',getStudents);
router.get('/students/:id',getStudent);
router.post('/student',createStudent);
// router.put('/student/:id',updateStudent);
router.delete('/student/:id',deleteStudent);



module.exports = router;