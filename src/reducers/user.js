const defaultUser = {
  userId: "",
  password: "",
  authFailed: false,
  loggingIn: false
};

export default (user = defaultUser, action) => {
  switch (action.type) {
    case "USER_LOGGING_IN":
      user = Object.assign({}, action.user, { loggingIn: true });
      return user;
    case "USER_LOGGED_IN":
      user = Object.assign({}, action.user);
      return user;
    case "USER_LOGGED_OUT":
      user = defaultUser;
      return user;
    case "AUTH_FAILED":
      user = Object.assign({}, defaultUser, { authFailed: true });
      return user;
    default:
      return user;
  }
};
