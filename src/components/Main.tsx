import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "../pages/UserList";
import AboutPage from "../pages/About";
import AddWorker from "../pages/UserAddPage";

const Main = () => {
  return (
    <div className="d-flex" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">
          <h3 className="list-group-item list-group-item-action list-group-item-light p-3">
            2 Types
          </h3>
        </div>
        <div className="list-group list-group-flush">
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            href="/addworker"
          >
            Add Worker
          </a>
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            href="/userlist"
          >
            User Lists
          </a>
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Overview
          </a>
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Events
          </a>
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Profile
          </a>
        </div>
      </div>

      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <button className="btn btn" id="sidebarToggle">
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-user">DsPro Admin</i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#!">
                      Action
                    </a>
                    <a className="dropdown-item" href="#!">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#!">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <BrowserRouter>
            <Routes>
              <Route path="/userlist" element={<UserList />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="addWorker" element={<AddWorker />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default Main;
