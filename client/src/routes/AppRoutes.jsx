import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../pages/auth/Login";
import AdminDashboard from "../pages/admin/Dashboard";
import Agents from "../pages/admin/Agents";
import Projects from "../pages/admin/Projects";

import ProtectedRoute from "./ProtectedRoute";
import Workflows from "../pages/admin/Workflows";
import Knowledge from "../pages/admin/knowledge";
import Prompts from "../pages/admin/Prompts"
import Models from "../pages/admin/Models"
import Playground from "../pages/admin/Playground";
import Files from "../pages/admin/Files";
import Marketplace from "../pages/admin/Marketplace";
import Monitoring from "../pages/admin/Monitoring";
import Billing from "../pages/admin/Billing";
import Developers from "../pages/admin/Developers";
import Analytics from "../pages/admin/Analytics";
import Settings from "../pages/admin/Settings";
import UserProfile from "../pages/admin/UserProfile"
import Automations from "../pages/admin/Automations"


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Admin Application */}
        <Route
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="/admin/agents"
            element={<Agents />}
          />

          <Route
            path="/admin/projects"
            element={<Projects />}
          />

           <Route
            path="/admin/workflows"
            element={<Workflows />}
            />
           <Route
            path="/admin/knowledge"
            element={<Knowledge />}
            />

            <Route 
            path="/admin/prompts"
            element={<Prompts />}
            />
            <Route 
            path="/admin/models"
            element={<Models />}
            />
            <Route
            path="/admin/playground"
            element={<Playground />}
            />
            <Route
            path="/admin/files"
            element={<Files />}
            />
            <Route 
            path="/admin/providers"
            element={<Models/>}
            />
            <Route
            path="/admin/marketplace"
            element={<Marketplace />}
            />
            <Route
            path="/admin/monitoring"
            element={<Monitoring />}
            />
            <Route
            path="/admin/billing"
            element={<Billing />}
            />
            <Route
            path="/admin/developers"
            element={<Developers />}
            />
            <Route
            path="/admin/analytics"
            element={<Analytics />}
            />
            <Route
            path="/admin/settings"
            element={
                <ProtectedRoute allowedRoles={["admin"]}>
                <Settings />
                </ProtectedRoute>
            }
            />
            <Route
            path="/admin/profile"
            element={
                <ProtectedRoute allowedRoles={["admin", "user"]}>
                <UserProfile />
                </ProtectedRoute>
            }
            />
            <Route 
            path="/admin/automation"
            element={<Automations/>}
            />
        </Route>

        {/* Default */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}