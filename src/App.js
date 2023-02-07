import React from "react";
import { Routes, Route } from "react-router-dom";
import Theme from "./design-system/Theme";
import { AppLayout } from "./design-system";
import { GlobalStyles } from "./design-system";
import Sidebar from "./components/Sidebar/Sidebar";
import { StyledDashboard } from "./design-system";
import Archive from "./pages/Archive";
import StarredList from "./pages/StarredList";
import DailyList from "./pages/DailyList";
import Collection from "./pages/Collection";

function App() {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <AppLayout>
          <Sidebar />
          <StyledDashboard>
            <Routes>
              <Route path="/" element={<DailyList />} />
              <Route path="/starred" element={<StarredList />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/collection/:id" element={<Collection />} />
            </Routes>
          </StyledDashboard>
        </AppLayout>
      </Theme>
    </>
  );
}

export default App;
