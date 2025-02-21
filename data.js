const currentDate = new Date();

const notes = [
  {
    id: 1,
    title: "Learning React",
    createdAt: currentDate
  },
  {
    id: 2,
    title: "Learning Python",
    createdAt: currentDate
  },
  {
    id: 3,
    title: "Learning Typescript",
    createdAt: currentDate
  },
  {
    id: 4,
    title: "Learning NodeJS/Express",
    createdAt: currentDate
  },
];


module.exports = { notes, currentDate };
