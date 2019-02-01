import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import PexAdminPages, * as pexAdminPages from "./pexadmin";
import LoanForm from "../forms/LoanForm";

const pageComponents = {
  delegation_rules: <PexAdminPages.DelegationRulesPage />,
  code_values: null,
  reminder_escalation: null,
  decision_limits: <PexAdminPages.DecisionLimitsPage />,
  job_titles: <PexAdminPages.JobtitlePage />,
  manage_roles: <PexAdminPages.ManageRolesPage />,
  manage_users: <PexAdminPages.ManageUsersPage />,
  home: null
};

const ContentPage = ({ user, match, history }) => {
  if (!user.role) {
    return <Redirect to="/login" />;
  }
  return (
    pageComponents[match.params.page] || (
      <h3 className="text-center">Work in progress...</h3>
    )
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default withRouter(connect(mapStateToProps)(ContentPage));
