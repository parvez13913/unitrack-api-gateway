import { OfferedCourseClassScheduleRoutes } from './../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.route';
import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { BuildingRoutes } from '../modules/building/building.route';
import { RoomRoutes } from '../modules/room/room.route';
import { CourseRoutes } from '../modules/course/course.route';
import { OfferedCourseRoutes } from '../modules/offeredCourse/offeredCourse.route';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.route';
import { OfferedCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academicSemesters',
    routes: AcademicSemesterRoutes
  },
  {
    path: '/academicDepartments',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/academicFaculties',
    routes: AcademicFacultyRoutes
  },
  {
    path: '/buildings',
    routes: BuildingRoutes
  },
  {
    path: '/rooms',
    routes: RoomRoutes
  },
  {
    path: '/courses',
    routes: CourseRoutes
  },
  {
    path: '/offeredCourses',
    routes: OfferedCourseRoutes
  },
  {
    path: '/offeredCoursesSections',
    routes: OfferedCourseSectionRoutes
  },
  {
    path: '/offeredCoursesClassSchedules',
    routes: OfferedCourseClassScheduleRoutes
  },
  {
    path: '/semesterRegistrations',
    routes: SemesterRegistrationRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
