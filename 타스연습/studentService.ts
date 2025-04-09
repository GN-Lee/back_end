import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class StudentsController {
  async createStudent(
    StudentName: string,
    StudentAge: number,
    Admission: number,
    MajorId: number
  ) {
    try {
      const student = await prisma.students.create({
        data: {
          student_name: StudentName,
          student_age: StudentAge,
          admission: Admission,
          major_id: MajorId,
        },
        include: {
          majors: true,
        },
      });
      return student;
    } catch (error) {
      console.log("학생정보 등록을 실패했습니다.");
      throw error;
    }
  }
  async updateStudent(
    StudentId: number,
    StudentName: string,
    StudentAge: number,
    Admission: number,
    MajorId: number
  ) {
    try {
      const student = await prisma.students.update({
        where: {
          student_id: StudentId,
        },
        data: {
          student_name: StudentName,
          student_age: StudentAge,
          admission: Admission,
          major_id: MajorId,
        },
        include: {
          majors: true,
        },
      });
      return student;
    } catch (error) {
      console.log("학생정보 수정을 실패했습니다.");
      throw error;
    }
  }
  async deleteStudent(StudentId: number) {
    try {
      const student = await prisma.students.delete({
        where: {
          student_id: StudentId,
        },
      });
      return student;
    } catch (error) {
      console.log("학생정보 삭제를 실패했습니다.");
      throw error;
    }
  }
  async getStudentInfo(StudentId: number) {
    try {
      const student = await prisma.students.findMany({
        where: {
          student_id: StudentId,
        },
        include: {
          majors: true,
        },
      });
      return student;
    } catch (error) {
      console.log("학생정보 조회를 실패했습니다.");
      throw error;
    }
  }
}

class StudentEnrollmentController {
  async getStudentMajorList(
    enrollemtID: number,
    StudentId: number,
    courseId: number
  ) {
    try {
      const enrollemtStudent = await prisma.enrollments.update({
        where: {
          enrollment_id: enrollemtID,
        },
        data: {
          student_id: StudentId,
          course_id: courseId,
        },
        include: {
          students: true,
          courses: true,
        },
      });
      return enrollemtStudent;
    } catch (error) {
      console.log("학생정보 조회를 실패했습니다.");
      throw error;
    }
  }
  async deleteStudentMajor(enrollemtID: number) {
    try {
      const enrollemtStudent = await prisma.enrollments.delete({
        where: {
          enrollment_id: enrollemtID,
        },
      });
      return enrollemtStudent;
    } catch (error) {
      console.log("학생정보 삭제를 실패했습니다.");
      throw error;
    }
  }
}
export { StudentsController, StudentEnrollmentController };
