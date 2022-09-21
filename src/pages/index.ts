import React from "react";

// ! Please add all pages as exotic components as below

const Analytics = React.lazy(() => import("./Analytics"));
const APIPage = React.lazy(() => import("./APIPage"));
const Configuration = React.lazy(() => import("./Configuration"));
const DevDashboard = React.lazy(() => import("./DevDashboard"));
const DeveloperApiPage = React.lazy(() => import("./DeveloperApiPage"));
const ForgotPassword = React.lazy(() => import("./ForgotPassword"));
const Home = React.lazy(() => import("./Home"));
const HomePage = React.lazy(() => import("./Homepage"));
const LoginHistory = React.lazy(() => import("./LoginHistory"));
const Otp = React.lazy(() => import("./Otp"));
const Signup = React.lazy(() => import('./Signup'));
const SuccessPage = React.lazy(() => import("./SuccessPage"));
const UserProfile = React.lazy(() => import("./UserProfile"));
const CreateEndpoint = React.lazy(() => import("./CreateEndpoint"));
// const OrgPage = React.lazy(() => import("./Orgpage"));
const EmailVerify = React.lazy(() => import("./EmailVerify"));
const TermsConditons = React.lazy(() => import("./Terms&Conditions"))
const Settings = React.lazy(() => import("./Settings"))

export { Analytics, APIPage, Configuration, CreateEndpoint,DeveloperApiPage, DevDashboard,
ForgotPassword, Home, HomePage, LoginHistory, Otp, Signup, SuccessPage, UserProfile, EmailVerify, TermsConditons, Settings };




