import { TaskDataStore } from "./task-data-store.js";
import { TaskService } from "./task-service.js";

const taskDataStore = new TaskDataStore();
export const taskService = new TaskService(taskDataStore);
