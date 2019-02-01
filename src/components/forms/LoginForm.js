import React from "react";
import { FormControl, Button, FormGroup } from "react-bootstrap";
import { withFormik } from "formik";
import * as Yup from "yup";

const LoginForm = ({
  values,
  touched,
  errors,
  dirty,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset
}) => (
  <div className="login-form">
    <form validate onSubmit={handleSubmit}>
      <FormGroup>
        <FormControl
          className={`form-control ${errors.userId &&
            touched.userId &&
            "is-invalid"}`}
          id="userId"
          type="text"
          value={values.userId}
          placeholder="Enter username"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.userId && touched.userId && (
          <div style={{ color: "red" }}>{errors.userId}</div>
        )}
      </FormGroup>

      <FormGroup>
        <FormControl
          id="password"
          type="password"
          value={values.password}
          placeholder="Enter password"
          onChange={handleChange}
        />
        {errors.password && touched.password && (
          <div style={{ color: "red" }}>{errors.password}</div>
        )}
      </FormGroup>
      <Button className="btn-primary" type="submit" disabled={values.loggingIn}>
        Submit
      </Button>
      <br />
      {values.authFailed && (
        <strong style={{ color: "red" }}>
          Login Failed.Please check the username and password{" "}
        </strong>
      )}
    </form>
  </div>
);

export default withFormik({
  mapPropsToValues: ({ user }) => {
    return { ...user };
  },
  validate: values => {
    const errors = {};

    if (!values.userId) {
      errors.userId = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  },
  handleSubmit: (user, formikBag) => {
    const { onLoginClicked } = formikBag.props;
    onLoginClicked(user);
  },
  enableReinitialize: true,
  displayName: "LoginForm"
})(LoginForm);
