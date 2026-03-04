let myName: string = "박준현";
let age: number = 25;
let isGraduated: boolean = true;
let lecture: string[] = ["프론트엔드 부트캠프"];

type Point3D = [x: number, y: number, z: number];

type Role = "admin" | "manager" | "user";

type SubjectScores = Record<string, number>;

type BasicUser = { name: string; age: number };
type Contact = { email: string; tel: string };
type EmployeeProfile = BasicUser & Contact;

const evaluateEmployee = (obj: EmployeeProfile): "해고됨" | "승진함" => {
  return "해고됨";
};
