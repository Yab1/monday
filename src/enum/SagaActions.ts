enum SagaActions {
  AUTH_WITH_GOOGLE = "auth/with-google",
  LOG_OUT = "auth/log-out",
  INITIALIZE_USER = "auth/initialize-user",

  // FIRESTORE
  INITIALIZE_PROJECT = "firestore/initialize-project",
  CANCEL_SAGA = "firestore/cancel-saga",

  // USER CRUD
  CREATE_USER = "firestore/create-user",
  READ_USER = "firestore/read-user",
  UPDATE_USER = "firestore/update-user",
  DELETE_USER = "firestore/delete-user",

  // PRIVATE DATA CRUD
  READ_PVT = "user/read-pvt",

  // PROJECT CRUD
  CREATE_PROJECT = "firestore/create-project",
  READ_PROJECT = "firestore/read-project",
  UPDATE_PROJECT = "firestore/update-project",
  DELETE_PROJECT = "firestore/delete-project",
}

export default SagaActions;
