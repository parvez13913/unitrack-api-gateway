import { z } from 'zod';

const createAcademicFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is Required'
    })
  })
});
const updateAcademicFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is Required'
    })
  })
});

export const AcademicFacultyValidation = {
  createAcademicFacultyZodSchema,
  updateAcademicFacultyZodSchema
};
