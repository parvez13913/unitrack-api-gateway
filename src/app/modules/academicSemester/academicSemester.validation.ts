import { string, z } from 'zod';
import {
  AcademicSemesterCodes,
  AcademicSemesterMOnths,
  AcademicSemesterTitles
} from './academicSemester.constants';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    year: z.number({
      required_error: 'Year is Required'
    }),
    title: z.enum([...AcademicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is Required'
    }),
    code: z.enum([...AcademicSemesterCodes] as [string, ...string[]], {
      required_error: 'Code is Required'
    }),
    startMonth: z.enum([...AcademicSemesterMOnths] as [string, ...string[]], {
      required_error: 'Start month is Required'
    }),
    endMonth: z.enum([...AcademicSemesterMOnths] as [string, ...string[]], {
      required_error: 'End month is Required'
    })
  })
});

const updateAcademicSemesterZodSchema = z.object({
  body: z.object({
    year: z.number().optional(),
    title: z.enum([...AcademicSemesterTitles] as [string, ...string[]]).optional(),
    code: z.enum([...AcademicSemesterCodes] as [string, ...string[]]).optional(),
    startMonth: z.enum([...AcademicSemesterMOnths] as [string, ...string[]]).optional(),
    endMonth: z.enum([...AcademicSemesterMOnths] as [string, ...string[]]).optional()
  })
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
  updateAcademicSemesterZodSchema
};
