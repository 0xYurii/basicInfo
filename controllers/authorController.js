// controllers/authorController.js

const db = require("../db");

export async function getAuthorById(req, res) {
  const { authorId } = req.params;
  try {
    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
      res.status(404).send("Author not found");
      return;
    }
    res.send(`Author Name: ${author.name}`);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}
