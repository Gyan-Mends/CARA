import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/_layout.tsx", [
        route("/","routes/home.tsx"),
        route("/programs","routes/programs.tsx"),
        route("/programs/:programId","routes/programs.$programId.tsx"),
        route("/support-us","routes/support-us.tsx"),
        route("/become-a-giver","routes/become-a-giver.tsx"),
        route("/partner-with-us","routes/partner-with-us.tsx"),
        route("/privacy-policy","routes/privacy-policy.tsx"),
        route("/terms-of-service","routes/terms-of-service.tsx"),
        route("/newsletter","routes/newsletter.tsx"),
    ]),

] satisfies RouteConfig;
