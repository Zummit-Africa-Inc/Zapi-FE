import React from "react";

// ! Please add all pages as exotic components as below

// const Analytics = React.lazy(() => import("./Analytics"));
const APIPage = React.lazy(() => import("./APIPage"));
const Configuration = React.lazy(() => import("./Configuration"));
const DevDashboard = React.lazy(() => import("./DevDashboard"));
const DeveloperApiPage = React.lazy(() => import("./DeveloperApiPage"));
const ForgotPassword = React.lazy(() => import("./ForgotPassword"));
const HomePage = React.lazy(() => import("./Homepage"));
const LoginHistory = React.lazy(() => import("./LoginHistory"));
const Otp = React.lazy(() => import("./Otp"));
const Signup = React.lazy(() => import('./Signup'));
const SuccessPage = React.lazy(() => import("./SuccessPage"));
const UserProfile = React.lazy(() => import("./UserProfile"));
const CreateEndpoint = React.lazy(() => import("./CreateEndpoint"));
// const OrgPage = React.lazy(() => import("./Orgpage"));
const ResetPassword = React.lazy(() => import("./ResetPassword"));
const TermsConditions = React.lazy(() => import("./TermsConditions"))
const Pricing = React.lazy(() => import("./Pricing"))
const Documentation = React.lazy(() => import("./Documentation"))
const APIHub = React.lazy(() => import("./APIHub"))

export { APIPage, Configuration, CreateEndpoint,DeveloperApiPage, DevDashboard,
ForgotPassword, HomePage, LoginHistory, Otp, Signup, SuccessPage, UserProfile, TermsConditions, ResetPassword, Pricing, Documentation, APIHub };
