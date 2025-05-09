// src/AppRouter.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import TaskListPage from "./pages/TaskListPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import MessagePage from "./pages/MessagePage";

import ProtectedRoute from "./components/ProtectedRoute"; // 👈 import this
import ProjectPage from "./pages/ProjectPage";
import TaskDetails from "./pages/TaskDetails";
import TaskApplication from "./pages/TaskApplication";
import AddWorkPage from "./pages/AddWorkPage";
import AppliedProject from "./pages/AppliedProject";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tasklist"
        element={
          <ProtectedRoute>
            <TaskListPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/project"
        element={
          <ProtectedRoute>
            <ProjectPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <MessagePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add/work"
        element={
          <ProtectedRoute>
            <AddWorkPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/apply/:taskId"
        element={
          <ProtectedRoute>
            <TaskApplication />
          </ProtectedRoute>
        }
      />
      <Route
        path="/task/:id"
        element={
          <ProtectedRoute>
            <TaskDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/project/applied"
        element={
          <ProtectedRoute>
            <AppliedProject />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
