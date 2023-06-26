import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";
import ProtectedRoute from "./components/common/protectedRoute";
import MyCards from "./components/myCards";
import CardsCreate from "./components/cardsCreate";
import CardsDelete from "./components/cardsDelete";
import CardsEdit from "./components/cardsEdit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardsView from "./components/cardsView";

function App() {
  return (
    <div
      className="App d-flex flex-column min-vh-100"
      style={{ fontFamily: "Kalam" }}
    >
      <ToastContainer />

      <header>
        <Navbar />
      </header>

      <div id="innerMain" className="flex-fill d-flex flex-column">
        <div id="mainOverlay" className="p-2 flex-fill flex-column d-flex">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="about" element={<About />} />

            <Route path="sign-in" element={<SignIn />} />

            <Route path="sign-up" element={<SignUp />} />

            <Route path="sign-out" element={<SignOut redirect="/" />} />

            <Route
              path="my-cards"
              element={
                <ProtectedRoute onlyBiz>
                  <MyCards />
                </ProtectedRoute>
              }
            />

            <Route
              path="my-cards/delete/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardsDelete />
                </ProtectedRoute>
              }
            />

            <Route
              path="my-cards/edit/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardsEdit />
                </ProtectedRoute>
              }
            />

            <Route
              path="my-cards/view/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardsView />
                </ProtectedRoute>
              }
            />

            <Route
              path="create-card"
              element={
                <ProtectedRoute onlyBiz>
                  <CardsCreate />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
