// db.js

const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

export async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}
