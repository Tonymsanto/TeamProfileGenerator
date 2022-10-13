const Manager = require("../lib/manager.js");

describe("Test using manager constructor", () => {
    const name = "Tony";
    const id = 10;
    const email = "tonymsanto@gmail.com";
    const role = "Manager";
    const officeNumber = 100;
    const testManager = new Manager(name, id, email, officeNumber);

    it("This is expected to return the manager name", () => {
        expect(testManager.getName()).toBe(name);
    });

    it("This is expected to return the manager id", () => {
        expect(testManager.getId()).toBe(id);
    });

    it("This is expected to return the manager email", () => {
        expect(testManager.getEmail()).toBe(email);
    });

    it("This is expected to return the manager role", () => {
        expect(testManager.getRole()).toBe(role);
    });
    
    it("This is expected to return the manager office number", () => {
        expect(testManager.getOfficeNumber()).toBe(officeNumber);
    });
});