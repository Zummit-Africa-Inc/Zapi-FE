import React from "react";

// ! Please add all pages as exotic components as below

const Analytics = React.lazy(() => import("./Analytics"));
const APIPage = React.lazy(() => import("./APIPage"));
const Configuration = React.lazy(() => import("./Configuration"));
const DevDashboard = React.lazy(() => import("./DevDashboard/DevDashboard"));
const ForgotPassword = React.lazy(() => import("./ForgotPassword"));
const Home = React.lazy(() => import("./Home"));
const Homepage = React.lazy(() => import("./Homepage"));
const Login = React.lazy(() => import("./Login"));
const LoginHistory = React.lazy(() => import("./LoginHistory"));
const OrgPage = React.lazy(() => import("./OrgPage"));
const Otp = React.lazy(() => import("./Otp"));
const Signup = React.lazy(() => import('./Signup'));
const SuccessPage = React.lazy(() => import("./SuccessPage"));
const UserProfile = React.lazy(() => import("./UserProfile"));

export { Analytics, APIPage, Configuration, DevDashboard,
    ForgotPassword, Home, Homepage, Login,
    LoginHistory, OrgPage, Otp, Signup,
    SuccessPage, UserProfile };
