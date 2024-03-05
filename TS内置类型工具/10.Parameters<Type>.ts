function createStudent(sno: string, name: string, age: number) {
  return { sno, name, age };
}

type CreateStudentParams = Parameters<typeof createStudent>;

const createStuParams: CreateStudentParams = ["112899022", "ming", 30];
const stu1 = createStudent(...createStuParams);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
