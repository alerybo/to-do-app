import React from "react";
import Theme from "./design-system/Theme";
import { AppLayout } from "./design-system";
import { GlobalStyles } from "./design-system";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <AppLayout>
          <Sidebar />
          <Dashboard />
        </AppLayout>
      </Theme>
    </>
  );
}

export default App;
