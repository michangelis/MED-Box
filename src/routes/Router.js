import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const PillForm = lazy(() => import("../components/AddForms/PillForm"));
const ProfileCard = lazy(() => import("../components/profile/ProfileCard"));
const PillPerForm = lazy(() => import("../components/AddForms/PillPerForm"));
const Profile = lazy(() => import("../components/profile/Profile"));
const UserForm = lazy(() => import("../components/AddForms/UserForm"));
const PillCard = lazy(() => import("../components/Pills/PilCard"));
const Pill = lazy(() => import("../components/Pills/Pill"));
const Time = lazy(() => import("../components/AddForms/TimePicker"));
const Calendar = lazy(() => import("../components/profile/Calendar"));
const Login = lazy(() => import("../components/AddForms/Login"));
const Step1 = lazy(() => import("../components/Instructions/Step1"));
const Step2 = lazy(() => import("../components/Instructions/Step2"));
const Step3 = lazy(() => import("../components/Instructions/Step3"));
const Instructions = lazy(() => import("../components/Instructions/Instructions"));
const AddMachine = lazy(() => import("../components/AddForms/AddMachine"));



/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter/> },
      { path: "/login", exact: true, element: <Login/>},
      { path: "/step1/:id", element: <Step1 /> },
      { path: "/step2/:id", element: <Step2 /> },
      { path: "/step3/:id", element: <Step3 /> },
      { path: "/instructions", element: <Instructions /> },
      { path: "/pillForm", exact: true, element: <PillForm/> },
      { path: "/userForm", exact: true, element: <UserForm/> },
      { path: "/pillPerForm/:id", element: <PillPerForm/> },
      { path: "/profileCard", exact: true, element: <ProfileCard/>},
      { path: "/pillCard", exact: true, element: <PillCard/>},
      { path: "/profile/:id", element: <Profile/>},
      { path: "/pill/:id", element: <Pill />},
      { path: "/time", exact: true, element: <Time /> },
      { path: "/calendar", exact: true, element: <Calendar /> },
      { path: "/addpill/:id/", element: <AddMachine /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
