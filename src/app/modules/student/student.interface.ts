export type Gardian = {
  father_name: string;
  father_occupation: string;
  father_contact_no: string;
  mother_name: string;
  mother_occupation: string;
  mother_contact_on: string;
};

export type LocalGardian = {
  name: string;
  occupation: string;
  contact_no: string;
  address: string;
};

export interface Student {
  id: number;
  email: string;
  name: {
    first_name: string;
    middle_name?: string;
    last_name: string;
  };
  gender: 'male' | 'female';
  dateOfBirth: string;
  contact_number: string;
  emergency_contact_number: string;
  blood_group: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  present_address: string;
  parmanent_addrerss: string;
  gardian: Gardian;
  localGardian: LocalGardian;
  profile_img?: string;
  isActive: true | false;
}
