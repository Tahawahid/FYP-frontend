import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "contact", file: "routes/contact.tsx" },
  { path: "blog", file: "routes/blog.tsx" },
  // Dashboard routes
  {
    path: "dashboard",
    file: "routes/dashboard/layout.tsx",
    children: [
      { index: true, file: "routes/dashboard/index.tsx" },
      { path: "skills", file: "routes/dashboard/skills.tsx" },
      { path: "jobs", file: "routes/dashboard/jobs.tsx" },
      { path: "learning", file: "routes/dashboard/learning.tsx" },
      { path: "profile", file: "routes/dashboard/profile.tsx" }
    ]
  },
  // Chat routes
  {
    path: "chat",
    file: "routes/chat.tsx",
    children: [
      { index: true, file: "routes/chat/index.tsx" },
      { path: ":chatType", file: "routes/chat[chatType].tsx" }
    ]
  },
  
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
