import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/_layout.tsx", [
        route("/","routes/landingPage/home.tsx"),
        route("/about","routes/About/index.tsx"),
    ]),

] satisfies RouteConfig;
