import { managers } from "./managers";
import { StudentController } from "./studentController";
const studentController = new StudentController();

const main = async () => {
  while (true) {
    console.log("1. 시발학생 새끼들 관련 내용)");
    console.log("2. 수강과목 관련 내용)");
    const choice = await managers.promptManager.askQuestion(
      "원하는 작업을 선택해주세요: "
    );
    switch (choice) {
      case "1":
        await studentController.createStudent();

      case "2":
        await studentController.createStudentEnrollment();
    }
  }
};

main();
