import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";

export default function Header({ pageCurrent }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Kiểm tra nếu menu đang hiển thị và sự kiện click xảy ra ngoài menu
      if (
        showMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]); // Thêm showMenu vào dependencies của useEffect

  return (
    <>
      <nav
        className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
        id="navbarBlur"
        navbar-scroll="true"
      >
        <div className="container-fluid py-1 px-3 header-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li className="breadcrumb-item text-sm">
                <a className="opacity-5 text-dark" href="javascript :;">
                  Trang
                </a>
              </li>
              <li
                className="breadcrumb-item text-sm text-dark active"
                aria-current="page"
              >
                {pageCurrent}
              </li>
            </ol>
            <h6 className="font-weight-bolder mb-0">{pageCurrent}</h6>
          </nav>
          <div
            className="collapse1 navbar-collapse1 mt-sm-0 mt-2 me-md-0 me-sm-4"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center item-hidden">
              <div className="input-group input-group-outline">
                <label className="form-label">Tìm kiếm...</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <ul className="navbar-nav  justify-content-end menu-nav header-nav">
              <li className="nav-item d-flex align-items-center">
                <a
                  href="javascript :;"
                  className="nav-link text-body font-weight-bold px-0"
                >
                  <i className="fa fa-user me-sm-1"></i>
                  <span className="d-sm-inline d-none">{pageCurrent}</span>
                </a>
              </li>
              <li
                className="nav-item d-xl-none ps-3 d-flex align-items-center "
                onClick={toggleSidebar}
              >
                <a
                  href="javascript : ; "
                  className="nav-link text-body p-0"
                  id="iconNavbarSidenav"
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                  </div>
                </a>
              </li>
              <li className="nav-item px-3 d-flex align-items-center item-hidden">
                <a href="javascript :;" className="nav-link text-body p-0">
                  <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                </a>
              </li>
              <li className="nav-item dropdown pe-2 d-flex align-items-center item-hidden">
                <a
                  href="javascript :;"
                  className="nav-link text-body p-0"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-bell cursor-pointer"></i>
                </a>
                <ul
                  className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li className="mb-2">
                    <a
                      className="dropdown-item border-radius-md"
                      href="javascript :;"
                    >
                      <div className="d-flex py-1">
                        <div className="my-auto">
                          <img
                            src="../assets/img/team-2.jpg"
                            alt="img"
                            className="avatar avatar-sm  me-3"
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-sm font-weight-normal mb-1">
                            <span className="font-weight-bold">
                              New message
                            </span>
                            from Laur
                          </h6>
                          <p className="text-xs text-secondary mb-0">
                            <i className="fa fa-clock me-1"></i>
                            13 minutes ago
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="dropdown-item border-radius-md"
                      href="javascript :;"
                    >
                      <div className="d-flex py-1">
                        <div className="my-auto">
                          <img
                            src="../assets/img/small-logos/logo-spotify.svg"
                            alt="img"
                            className="avatar avatar-sm bg-gradient-dark  me-3 "
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-sm font-weight-normal mb-1">
                            <span className="font-weight-bold">New album</span>{" "}
                            by Travis Scott
                          </h6>
                          <p className="text-xs text-secondary mb-0">
                            <i className="fa fa-clock me-1"></i>1 day
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item border-radius-md"
                      href="javascript :;"
                    >
                      <div className="d-flex py-1">
                        <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto"></div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-sm font-weight-normal mb-1">
                            Payment successfully completed
                          </h6>
                          <p className="text-xs text-secondary mb-0">
                            <i className="fa fa-clock me-1"></i>2 days
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div ref={menuRef}>{showSidebar && <Menu classname="show" />}</div>
    </>
  );
}
