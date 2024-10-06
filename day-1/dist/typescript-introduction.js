"use strict";
// Primitive and Non-Primitive Data Types in typescript
// Primitive Data Types
// number, string, boolean, undefined, null, symbol;
// Non-Primitive Data Types
// object, array, function, tuple;
// Implicit Typed Variables
// let myName = "Md Sakibul Islam";
// Explicit Typed Variables
// let myAge: number = 26;
// let isDeveloper: boolean = true;
// let x: undefined = undefined;
// let y: null = null;
// let d; // it will be of any type by default [Not recommended]
// let skills: string[] = ["JavaScript", "React", "Next.js", "TypeScript"];
// tuple
// let nameAge: [string, number] = ["Md Sakibul Islam", 25];
// type PersonType = {
//   name: string;
//   age: number;
//   skills: string[];
//   phone?: number; // optional property
//   role: ["Admin" | "User"]; // union and literal type
// };
// const person: PersonType = {
//   name: "Md Sakibul Islam",
//   age: 26,
//   skills: ["JavaScript", "React", "Next.js", "TypeScript"],
//   role: ["Admin"],
// };
// function add1(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }
// function add2(num1: number, num2: number): number {
//   return num1 + num2;
// }
// const Add1 = (num1: number, num2: number): void => {
//   console.log(num1 + num2);
// };
// const Add2 = (num1: number, num2: number): number => {
//   return num1 + num2;
// };
// const Add3: (num1: number, num2: number) => number = (num1, num2) => {
//   return num1 + num2;
// };
// spared operator and rest parameter
// const skills: string[] = ["JavaScript", "React", "Next.js", "TypeScript"];
// const newSkills: string[] = ["Node.js", "Express.js", "MongoDB"];
// const allSkills: string[] = [...skills, ...newSkills];
// const add = (num1: number, num2: number, num3: number): number => {
//   return num1 + num2 + num3;
// };
// const add = (...nums: number[]): number => {
//   return nums.reduce((acc, curr) => acc + curr, 0);
// };
// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// nullish coalescing operator
// const myName = null; // only null and undefined will be considered as falsy value
// const fullName = myName ?? "Md Sakibul Islam";
// nullable type
// let myName: string | null = null;
// myName = "Md Sakibul Islam";
// unknown type
// const convertToUpperCase = (str: unknown): string => {
//   if (typeof str === "string") {
//     return str.toUpperCase();
//   }
//   return "Invalid Input";
// };
// never type
//  when we know that the function will never return anything then we can use never type
// const throwError = (message: string): never => {
//   throw new Error(message);
// };
// throwError("This is an error message");
