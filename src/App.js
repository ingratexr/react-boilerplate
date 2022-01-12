import React from "react";
import { RenderRoutes } from './routing/Routes'
import { appRoutes } from "./routing/appRouteConfig";
import Navbar from './components/menus/navbar/Navbar';
import Footer from './components/menus/footer/Footer';

// Context for seeing if user is signed in or not
// Navbar depends on this context by default, to change which options
// are visible when user is signed in or out
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="app col">
        <Navbar />
        <div className="app-wrap col">
          <RenderRoutes routes={appRoutes} />
        </div>
        <Footer />
      </div >
    </AuthProvider>
  );
}

export default App;
