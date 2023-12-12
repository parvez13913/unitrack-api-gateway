import { z } from 'zod';

const createCourseZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is Required'
    }),
    code: z.string({
      required_error: 'Code is Required'
    }),
    credits: z.number({
      required_error: 'Credit is Required'
    }),
    prerequisiteCourses: z
      .array(
        z.object({
          courseId: z.string()
        })
      )
      .optional()
  })
});

const updateCourseZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    code: z.string().optional(),
    credits: z.number().optional(),
    prerequisiteCourses: z
      .array(
        z.object({
          courseId: z.string(),
          isDeleted: z.boolean({}).optional()
        })
      )
      .optional()
  })
});

export const CourseValidation = {
  createCourseZodSchema,
  updateCourseZodSchema
};
