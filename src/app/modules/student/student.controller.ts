import { Request, Response } from 'express';
import { studentServices } from './student_service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    const result = await studentServices.createStudentIntoDB(student);

    res.status(200).json({
      success: true,
      message: 'new student data created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'got all students data',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const result = await studentServices.getSingleStudentFromDB(id);

    if (result !== null) {
      res.status(200).json({
        success: true,
        message: `got student data of id ${id}`,
        data: result,
      });
    } else {
      res.status(204).json({
        success: false,
        message: `could not find a student with id ${id}`,
        data: null,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
