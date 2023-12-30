import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', studentControllers.createStudent);

router.get('/all-students', studentControllers.getAllStudents);

router.get('/:id', studentControllers.getSingleStudent);

export const StudentRoutes = router;
