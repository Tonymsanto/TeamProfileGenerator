const Intern = require("../lib/intern.js");

describe("Test using intern constructor", () => {
    const name = "Tony";
    const id = 10;
    const email = "tonymsanto@gmail.com";
    const role = "Intern";
    const school = "Denver University";
    const testIntern = new Intern(name, id, email, school);

    it("This is expected to return the intern name", () => {
        expect(testIntern.getName()).toBe(name);
    });

    it("This is expected to return the intern id", () => {
        expect(testIntern.getId()).toBe(id);
    });

    it("This is expected to return the intern email", () => {
        expect(testIntern.getEmail()).toBe(email);
    });

    it("This is expected to return the intern role", () => {
        expect(testIntern.getRole()).toBe(role);
    });
    
    it("This is expected to return the intern school", () => {
        expect(testIntern.getSchool()).toBe(school);
    });
});