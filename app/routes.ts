import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "contact", file: "routes/contact.tsx" },
  { path: "blog", file: "routes/blog.tsx" },
  { path: "blog/:postId", file: "routes/blog.$postId.tsx" },
  { path: "onboarding", file: "routes/onboarding.tsx" },
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
  },

  // Error pages
  { path: "404", file: "routes/404.tsx" },
  { path: "500", file: "routes/500.tsx" },
  { path: "403", file: "routes/403.tsx" },
  { path: "offline", file: "routes/offline.tsx" },
  { path: "maintenance", file: "routes/maintenance.tsx" },
  { path: "error", file: "routes/error.tsx" },
  { path: "help", file: "routes/help.tsx" },
  { path: "status", file: "routes/status.tsx" },
  { path: "privacy", file: "routes/privacy.tsx" },
  { path: "terms", file: "routes/terms.tsx" },
] satisfies RouteConfig;
