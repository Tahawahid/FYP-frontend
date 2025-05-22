import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  {
    path: "auth",
    file: "routes/auth/_layout.tsx",
    children: [
      { path: "login", file: "routes/auth/login.tsx" },
      { path: "register", file: "routes/auth/register.tsx" },
      { path: "forgot-password", file: "routes/auth/forgot-password.tsx" },
      { path: "reset-password", file: "routes/auth/reset-password.tsx" },
      { path: "verify-email", file: "routes/auth/verify-email.tsx" },
    ]
  }
] satisfies RouteConfig;
