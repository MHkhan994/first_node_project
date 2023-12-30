import { Schema, model } from 'mongoose';
import { Gardian, LocalGardian, Student } from './student.interface';

const gurdianSchema = new Schema<Gardian>({
  father_name: { type: String, required: true },
  father_occupation: { type: String, required: true },
  father_contact_no: { type: String, required: true },
  mother_name: { type: String, required: true },
  mother_occupation: { type: String, required: true },
  mother_contact_on: { type: String, required: true },
});

const localGardianSchema = new Schema<LocalGardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contact_no: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: Number,
  name: {
    first_name: { type: String, required: true },
    middle_name: { type: String },
    last_name: { type: String, required: true },
  },
  gender: ['male', 'female'],
  dateOfBirth: String,
  email: String,
  contact_number: { type: String, required: true },
  emergency_contact_number: { type: String, required: true },
  blood_group: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
  present_address: String,
  parmanent_addrerss: String,
  gardian: gurdianSchema,
  localGardian: localGardianSchema,
  profile_img: String,
  isActive: ['true', 'false'],
});

export const StudentModel = model<Student>('Students', studentSchema);
