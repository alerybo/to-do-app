/**
 * Business logic layer.
 * Uses data stores.
 */
export class TaskService {
  #dataStore;

  constructor(dataStore) {
    this.dataStore = dataStore;
  }

  getTasks() {
    return this.dataStore.getTaskEntities();
  }
}
