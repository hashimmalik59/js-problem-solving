// const posts = [
//   { id: 1, title: "Learn React", isPublished: true },
//   { id: 2, title: "Master JS", isPublished: false },
//   { id: 3, title: "Deep Dive Nesting", isPublished: true },
// ];

// const publishedPostTitle = posts
//   .filter((item) => item.isPublished)
//   .map((item) => item.title);

// console.log(publishedPostTitle);

const posts = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Master JS" },
  { id: 3, title: "Deep Dive Nesting" },
  { id: 4, title: "Advanced Patterns" },
];
const evenIDTitleIntoUpperCase = posts
  .filter((item) => item.id % 2 === 0)
  .map((item) => item.title.toUpperCase());

// console.log(evenIDTitleIntoUpperCase);

const house = {
  kitchen: {
    fridge: {
      items: ["milk", "eggs"],
    },
  },
};

const newHouse = {
  ...house,
  kitchen: {
    ...house.kitchen,
    fridge: {
      ...house.kitchen.fridge,
      items: [...house.kitchen.fridge.items, "juice"],
    },
  },
};

// console.log(house);
// console.log(newHouse);

// const school = {
//   name: "GEC",
//   classes: {
//     a: ["Ali", "Sara"],
//     b: ["John", "Zaid"],
//   },
// };

// const newSchool = {
//   ...school,
//   name: "GEC-Advance",
//   classes: {
//     ...school.classes,
//     a: [...school.classes.a, "Hashim"],
//     b: [...school.classes.b, "Kamran"],
//   },
// };

// console.log(school);
// console.log(newSchool);

const company = {
  location: "Peshawar",
  department: {
    it: {
      team: {
        members: ["Ali", "Sara"],
      },
    },
  },
};

const newCompany = {
  ...company,
  department: {
    ...company.department,
    it: {
      ...company.department.it,
      team: {
        ...company.department.it.team,
        members: [...company.department.it.team.members, "Hashim"],
      },
    },
  },
};

console.log("ORIGINAL", company);
console.log("NEW", newCompany);
