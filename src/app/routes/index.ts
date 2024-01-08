import { StudentEnrolledCourseMarkRoutes } from './../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.route';
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
import { StudentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.route';
import { StudentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.route';
import { UserRoutes } from '../modules/user/user.route';
import { AuthenticationRoutes } from '../modules/auth/auth.route';
import { FacultyRoutes } from '../modules/faculty/faculty.route';
import { StudentRoutes } from '../modules/student/student.route';
import { ManagementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.route';
import { AdminRoutes } from '../modules/admin/admin.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthenticationRoutes
  },
  {
    path: '/users',
    routes: UserRoutes
  },
  {
    path: '/faculties',
    routes: FacultyRoutes
  },
  {
    path: '/students',
    routes: StudentRoutes
  },
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
    path: '/studentEnrolledCourses',
    routes: StudentEnrolledCourseRoutes
  },
  {
    path: '/studentEnrolledCourseMarks',
    routes: StudentEnrolledCourseMarkRoutes
  },
  {
    path: '/semesterRegistrations',
    routes: SemesterRegistrationRoutes
  },
  {
    path: '/studentSemesterPayments',
    routes: StudentSemesterPaymentRoutes
  },
  {
    path: '/managementDepartments',
    routes: ManagementDepartmentRoutes
  },
  {
    path: '/admins',
    routes: AdminRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
