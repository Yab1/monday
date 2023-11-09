enum SagaActions {
  AUTH_WITH_GOOGLE = "auth/with-google",
  LOG_OUT = "auth/log-out",
  INITIALIZE_USER = "user/initialize-user",

  // USER CRUD
  CREATE_USER = "user/create-user",
  READ_USER = "user/read-user",
  UPDATE_USER = "user/update-user",
  DELETE_USER = "user/delete-user",

  // PRIVATE DATA CRUD
  READ_PVT = "user/read-pvt",

  // PROJECT CRUD
  CREATE_PROJECT = "project/create-project",
  READ_PROJECT = "project/read-project",
  UPDATE_PROJECT = "project/update-project",
  DELETE_PROJECT = "project/delete-project",
}

export default SagaActions;
