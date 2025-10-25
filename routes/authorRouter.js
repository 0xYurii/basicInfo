// routes/authorRouter.js

import { Router } from "express";
import { getAuthorById } from "../controllers/authorController.js";

const authorRouter = Router();

// ... other route handlers
authorRouter.get("/:authorId", getAuthorById);

export { authorRouter };
