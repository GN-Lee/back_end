import { managers } from "./managers";
import {
  StudentsController,
  StudentEnrollmentController,
} from "./studentService";

const studentService = new StudentsController();
const studentEnrollmentService = new StudentEnrollmentController();

class StudentController {
  async createStudent() {
    console.log("1. 학생 등록");
    console.log("2. 학생 수정");
    console.log("3. 학생 삭제");
    console.log("4. 학생 조회");

    const choice = await managers.promptManager.askQuestion(
      "원하는 작업을 선택해주세요: "
    );
    if (choice === "1") {
      const studentName = (await managers.promptManager.askQuestion(
        "학생의 이름을 입력해주세요: "
      )) as string;
      const studentAge = (await managers.promptManager.askQuestion(
        "학생의 나이를 입력해주세요: "
      )) as string;
      const admission = (await managers.promptManager.askQuestion(
        "학생의 입학년도를 입력해주세요: "
      )) as string;
      const majorId = (await managers.promptManager.askQuestion(
        "학생의 전공을 입력해주세요: "
      )) as string;
      studentService
        .createStudent(
          studentName,
          parseInt(studentAge),
          parseInt(admission),
          parseInt(majorId)
        )
        .then((result) => {
          console.log("학생 등록이 완료되었습니다:", result);
        })
        .catch((error) => {
          console.error("학생 등록 중 오류가 발생했습니다:", error);
        });
    } else if (choice == "2") {
      const studentId = (await managers.promptManager.askQuestion(
        "학생의 아이디를 입력해주세요: "
      )) as string;
      const studentName = (await managers.promptManager.askQuestion(
        "학생의 이름을 입력해주세요: "
      )) as string;
      const studentAge = (await managers.promptManager.askQuestion(
        "학생의 나이를 입력해주세요: "
      )) as string;
      const admission = (await managers.promptManager.askQuestion(
        "학생의 입학년도를 입력해주세요: "
      )) as string;
      const majorId = (await managers.promptManager.askQuestion(
        "학생의 전공을 입력해주세요: "
      )) as string;
      studentService
        .updateStudent(
          parseInt(studentId),
          studentName,
          parseInt(studentAge),
          parseInt(admission),
          parseInt(majorId)
        )
        .then((result) => {
          console.log("학생 수정이 완료되었습니다:", result);
        })
        .catch((error) => {
          console.error("학생 수정 중 오류가 발생했습니다:", error);
        });
    } else if (choice == "3") {
      const studentId = (await managers.promptManager.askQuestion(
        "학생의 아이디를 입력해주세요: "
      )) as string;
      studentService
        .deleteStudent(parseInt(studentId))
        .then((result) => {
          console.log("학생 삭제가 완료되었습니다:", result);
        })
        .catch((error) => {
          console.error("학생 삭제 중 오류가 발생했습니다:", error);
        });
    } else if (choice == "4") {
      const studentId = (await managers.promptManager.askQuestion(
        "학생의 아이디를 입력해주세요: "
      )) as string;
      studentService
        .getStudentInfo(parseInt(studentId))
        .then((result) => {
          console.log("학생 정보가 조회되었습니다:", result);
        })
        .catch((error) => {
          console.error("학생 정보 조회 중 오류가 발생했습니다:", error);
        });
    } else {
      console.log("잘못된 입력입니다.");
    }
    return studentService;
  }

  async createStudentEnrollment() {
    console.log("1. 학생 수강과목 등록");
    console.log("2. 학생 수강과목 조회");
    const choice = await managers.promptManager.askQuestion(
      "원하는 작업을 선택해주세요: "
    );
    if (choice === "1") {
      const enrollemtID = (await managers.promptManager.askQuestion(
        "수강과목의 아이디를 입력해주세요: "
      )) as string;
      const studentId = (await managers.promptManager.askQuestion(
        "학생의 아이디를 입력해주세요: "
      )) as string;
      const courseId = (await managers.promptManager.askQuestion(
        "수강과목의 아이디를 입력해주세요: "
      )) as string;
      studentEnrollmentService
        .getStudentMajorList(
          parseInt(enrollemtID),
          parseInt(studentId),
          parseInt(courseId)
        )
        .then((result) => {
          console.log("학생 수강과목 등록이 완료되었습니다:", result);
        })
        .catch((error) => {
          console.error("학생 수강과목 등록 중 오류가 발생했습니다:", error);
        });
    } else if (choice == "2") {
      const enrollemtID = (await managers.promptManager.askQuestion(
        "수강과목의 아이디를 입력해주세요: "
      )) as string;
      studentEnrollmentService
        .deleteStudentMajor(parseInt(enrollemtID))
        .then((result) => {
          console.log("학생 수강과목 삭제가 완료되었습니다:", result);
        })
        .catch((error) => {
          console.error("학생 수강과목 삭제 중 오류가 발생했습니다:", error);
        });
    } else {
      console.log("잘못된 입력입니다.");
    }
    return studentEnrollmentService;
  }
}
export { StudentController };
