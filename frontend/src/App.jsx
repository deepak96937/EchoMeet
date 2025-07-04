import React from "react";
import HomePage from "./pages/HomePage";
import SginUpPage from "./pages/SginUpPage";
import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import CallPage from "./pages/CallPage";
import { ChatPage } from "./pages/ChatPage";
import OnboardingPage from "./pages/OnboardingPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className=" min-h-screen" data-theme="coffee">
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SginUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
