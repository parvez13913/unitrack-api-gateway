import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createStudent = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }

  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;

  // Academic-Department
  const academicDepartmentResponse = await AuthService.get(
    `/academicDepartments?syncId=${academicDepartment}`
  );

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  // Academic-Faculty
  const academicFacultyResponse = await AuthService.get(
    `/academicFaculties?syncId=${academicFaculty}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }

  // Academic-Semester
  const academicSemesterResponse = await AuthService.get(
    `/academicSemesters?syncId=${academicSemester}`
  );

  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post('users/createStudent', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const createFaculty = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.faculty.profileImage = uploadedImage.secure_url;
  }

  const { academicDepartment, academicFaculty } = req.body.faculty;

  // Academic-Faculty
  const academicFacultyResponse = await AuthService.get(
    `/academicFaculties?syncId=${academicFaculty}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.faculty.academicFaculty = academicFacultyResponse.data[0].id;
  }

  // Academic-Department
  const academicDepartmentResponse = await AuthService.get(
    `/academicDepartments?syncId=${academicDepartment}`
  );

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.faculty.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post('/users/createFaculty', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const createAdmin = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.admin.profileImage = uploadedImage.secure_url;
  }

  const response: IGenericResponse = await AuthService.post('/users/createAdmin', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const UsersService = {
  createStudent,
  createFaculty,
  createAdmin
};
