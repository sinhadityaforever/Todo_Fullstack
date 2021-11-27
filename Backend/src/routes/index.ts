import { Router } from "express";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todos/index";
const router: Router = Router();
router
  // .get("/todos", getTodos);
  .route("/todo")
  .get(getTodos)
  .post(addTodo)
  .put(updateTodo)
  .delete(deleteTodo);

export default router;
