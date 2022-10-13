const Engineer = require("../lib/engineer.js");

describe("Test using engineer constructor", () => {
    const name = "Tony";
    const id = 10;
    const email = "tonymsanto@gmail.com";
    const role = "Engineer";
    const github = "Tonymsanto";
    const testEngineer = new Engineer(name, id, email, github);

    it("This is expected to return the engineer name", () => {
        expect(testEngineer.getName()).toBe(name);
    });

    it("This is expected to return the engineer id", () => {
        expect(testEngineer.getId()).toBe(id);
    });

    it("This is expected to return the engineer email", () => {
        expect(testEngineer.getEmail()).toBe(email);
    });

    it("This is expected to return the engineer role", () => {
        expect(testEngineer.getRole()).toBe(role);
    });
    
    it("This is expected to return the engineer github", () => {
        expect(testEngineer.getGithub()).toBe(github);
    });
});