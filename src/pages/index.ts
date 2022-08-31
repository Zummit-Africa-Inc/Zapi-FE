import React from "react";

// ! Please add all pages as exotic components as below

const Analytics = React.lazy(() => import("./Analytics"));
const APIPage = React.lazy(() => import("./APIPage"));
const Configuration = React.lazy(() => import("./Configuration"));
const DevDashboard = React.lazy(() => import("./DevDashboard"));
const EndPointPage = React.lazy(() => import("./EndpointPage"));
const ForgotPassword = React.lazy(() => import("./ForgotPassword"));
const Home = React.lazy(() => import("./Home"));
const Homepage = React.lazy(() => import("./Homepage"));
const LoginHistory = React.lazy(() => import("./LoginHistory"));
const OrgPage = React.lazy(() => import("./Orgpage"));
const Otp = React.lazy(() => import("./Otp"));
const Signup = React.lazy(() => import('./Signup'));
const SuccessPage = React.lazy(() => import("./SuccessPage"));
const UserProfile = React.lazy(() => import("./UserProfile"));
const CreateEndpoint = React.lazy(() => import("./CreateEndpoint"));


export { Analytics, APIPage, Configuration, CreateEndpoint, DevDashboard, EndPointPage,
ForgotPassword, Home, Homepage, LoginHistory, Otp, OrgPage, Signup, SuccessPage, UserProfile };
