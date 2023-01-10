// console.log("Hello from main");

// const staff = {
//   fullName: "Tayo Oduniyi",
//   staffId: 21,
//   jobRole: "Video Editor",
//   department: "New Media",
// };

// console.log(staff);
// const age = 56;
// console.log(age);

// function Staff(fullName, id, jobRole, dept) {
//   this.fullName = fullName;
//   this.id = id;
//   this.jobRole = jobRole;
//   this.dept = dept;
// }

// const staff1 = new Staff("Tayo Oduniyi", 21, "Video Edtor", "New Media");
// const staff2 = new Staff("Ahmad Yusuf", 05, "Deputy Head", "New Media");

// Staff.prototype.getFullName = function () {
//   return this.fullName;
// };

// console.log(staff1.getFullName());
// console.log(staff2.getFullName());

// function Rep(fullName, id, constituency) {
//   Staff.call(this, fullName, id);
//   this.constituency = constituency;
// }

// Rep.prototype = Object.create(Staff.prototype);
// Rep.prototype.constructor = Staff;

// const rep1 = new Rep("Musa Adisa", 23, "Yaba");

// console.log(rep1.getFullName());
