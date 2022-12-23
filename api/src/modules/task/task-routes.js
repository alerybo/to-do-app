import { taskService } from "./di-container.js";

/**
 * Defines all task endpoints.
 * Uses services.
 */
export function initTaskRoutes(app) {
  app.get("/tasks", function (req, res) {
    const tasks = taskService.getTasks();
    res.json(tasks);
  });
}
