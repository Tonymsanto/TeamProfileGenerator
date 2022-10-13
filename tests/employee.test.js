const Employee = require("../lib/employee.js");

describe("Test using employee constructor", () => {
    const name = "Tony";
    const id = 10;
    const email = "tonymsanto@gmail.com";
    const role = "Employee";

    const testEmployee = new Employee(name, id, email);

    it("This is expected to return the employee name", () => {
        expect(testEmployee.getName()).toBe(name);
    });

    it("This is expected to return the employee id", () => {
        expect(testEmployee.getId()).toBe(id);
    });

    it("This is expected to return the employee email", () => {
        expect(testEmployee.getEmail()).toBe(email);
    });

    it("SThis is expected to return the employee role", () => {
        expect(testEmployee.getRole()).toBe(role);
    });
});