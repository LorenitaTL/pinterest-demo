import { lazy } from "react";
import { LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: "/home",
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "SignUp" */ "../modules/Home/LandingPage"
        )
    ),
    name: "Home",
  },
  {
    path: "/sign-in",
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "SignIn" */ "../modules/Auth/pages/SignIn"
        )
    ),
    name: "Sign-In",
  },
  {
    path: "/sign-up",
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "SignUp" */ "../modules/Auth/pages/SignUp"
        )
    ),
    name: "Sign-Up",
  },
];
