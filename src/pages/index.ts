import React from "react";

const APIPage = React.lazy(() => import("./APIPage"))
const Analytics = React.lazy(() => import("./Analytics/Analytics"))
const DevDashboard = React.lazy(() => import("./DevDashboard/DevDashboard"))
const ForgotPassword = React.lazy(() => import("./ForgotPassword"))
const Home = React.lazy(() => import("./Home"))
const Login = React.lazy(() => import("./Login"))
const LoginHistory = React.lazy(() => import("./LoginHistory"))
const Otp = React.lazy(() => import("./Otp"))
const Signup = React.lazy(() => import('./Signup'))
const SuccessPage = React.lazy(() => import("./SuccessPage"))
const UserProfile = React.lazy(() => import("./UserProfile"))


export { APIPage, Analytics, DevDashboard,
    ForgotPassword, Home, Login,
    LoginHistory, Otp, Signup,
    SuccessPage, UserProfile}