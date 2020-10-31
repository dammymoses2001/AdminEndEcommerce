/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx"
import Icons from "views/Icons.jsx";
import Login from 'views/Login';
import Products from 'views/Products'
import Customer from 'views/Customer'
import Home from 'views/Home'
//import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
//import Upgrade from "views/Upgrade.jsx";
import ProtectedRoutes from './protectedRoute'
import { Route } from 'react-router-dom'

const dashboardRoutes = [
  // {
  //   path: "/login",
  //   name: "Login",
  //   show: false,
  //   icon: "pe-7s-graph",
  //   component: Login,
  //   layout: "/admin"
  // },
  // {
  //   path: "/",
  //   name: "Home",
  //   show: true,
  //   icon: "pe-7s-graph",
  //   component: Home,
  //   layout: "/"
  // },
  {
    path: "/",
    name: "Dashboard",
    show: true,
    icon: "pe-7s-graph",
    component: Dashboard,
    //   layout: "/admin",
    route: ProtectedRoutes
  },
  {
    path: "/products",
    name: "Product",
    show: true,
    icon: "pe-7s-note2",
    component: Products,
    //   layout: "/admin",
    route: ProtectedRoutes
  },
  {
    path: "/customers",
    name: "Customers",
    show: true,
    icon: "pe-7s-users",
    component: Customer,
    //   layout: "/admin",
    route: ProtectedRoutes
  },
  {
    path: "/category",
    name: "Category",
    show: true,
    icon: "pe-7s-folder",
    component: Products,
    //   layout: "/admin",
    route: ProtectedRoutes
  },
  {
    path: "/sale-history",
    name: "Sale History",
    show: true,
    icon: "pe-7s-cash",
    component: Products,
    //   layout: "/admin",
    route: ProtectedRoutes
  },
  {
    path: "/order",
    name: "Orders",
    show: true,
    icon: "pe-7s-albums",
    component: Products,
    //   layout: "/admin",
    route: ProtectedRoutes
  },
  {
    path: "/user",
    name: "User Profile",
    show: true,
    icon: "pe-7s-user",
    component: UserProfile,
    //   layout: "/admin",
    route: ProtectedRoutes
  },
  {
    path: "/table",
    name: "Table List",
    show: false,
    icon: "pe-7s-note2",
    component: TableList,
    //   layout: "/admin",
    route: ProtectedRoutes
  },
  {
    path: "/typography",
    name: "Typography",
    show: true,
    icon: "pe-7s-news-paper",
    component: Typography,
    //   layout: "/admin",
    route: ProtectedRoutes
  },

  {
    path: "/icons",
    name: "Icons",
    show: true,
    icon: "pe-7s-bell",
    component: Icons,
    //   layout: "/admin",
    route: ProtectedRoutes
  },

  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    //   layout: "/admin",
    route: ProtectedRoutes
  },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
