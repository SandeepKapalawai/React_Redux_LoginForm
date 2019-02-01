import { delay } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";
import { UserRoles } from "../common/systemRoles";

function* loginUser({ user }) {
  yield put({
    type: "USER_LOGGING_IN",
    user: user
  });

  yield delay(1000);

  const { userId, password } = user;
  user = { userId: "", password: "", role: "" };
  let type = "";

  if (userId.toLowerCase() === "admin" && password === "12345") {
    user.fullName = "Admin";
    user.role = UserRoles.USER_ADMIN_ROLE;
    type = "USER_LOGGED_IN";
  } else if (userId.toLowerCase() === "harry" && password === "12345") {
    user.fullName = "Harry";
    user.role = UserRoles.USER_ADMIN_ROLE;
    type = "USER_LOGGED_IN";
  } else if (userId.toLowerCase() === "lucy" && password === "12345") {
    user.fullName = "Lucy";
    user.role = UserRoles.USER_ADMIN_ROLE;
    type = "USER_LOGGED_IN";
  } else {
    type = "AUTH_FAILED";
  }

  yield put({
    type: type,
    user: user
  });
}

function* logoutUser({ user }) {
  yield delay(250);
  yield put({
    type: "USER_LOGGED_OUT",
    user: user
  });
}

export default [
  takeLatest("USER_LOGIN_REQUESTED", loginUser),
  takeLatest("USER_LOGOUT_REQUESTED", logoutUser)
];
