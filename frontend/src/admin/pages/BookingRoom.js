export default function BookingRoom() {
  
    return (
      <>
 <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Trang</a></li>
            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Quản lý đặt phòng</li>
          </ol>
          <h6 className="font-weight-bolder mb-0">Quản lý đặt phòng</h6>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group input-group-outline">
              <label className="form-label">Type here...</label>
              <input type="text" className="form-control"/>
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body font-weight-bold px-0">
                <i className="fa fa-user me-sm-1"></i>
                <span className="d-sm-inline d-none">Sign In</span>
              </a>
            </li>
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body p-0">
                <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
              </a>
            </li>
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-bell cursor-pointer"></i>
              </a>
              <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img src="../assets/img/team-2.jpg" className="avatar avatar-sm  me-3 "/>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New message</span> from Laur
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
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img src="../assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm bg-gradient-dark  me-3 "/>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New album</span> by Travis Scott
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          <i className="fa fa-clock me-1"></i>
                          1 day
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                       
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          Payment successfully completed
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          <i className="fa fa-clock me-1"></i>
                          2 days
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
  /
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-xl-6 mb-xl-0 mb-4">
              <div className="card bg-transparent shadow-xl">
                <div className="overflow-hidden position-relative border-radius-xl">
                  <img src="../assets/img/illustrations/pattern-tree.svg" className="position-absolute opacity-2 start-0 top-0 w-100 z-index-1 h-100" alt="pattern-tree"/>
                  <span className="mask bg-gradient-dark opacity-10"></span>
                  <div className="card-body position-relative z-index-1 p-3">
                    <i className="material-icons text-white p-2">wifi</i>
                    <h5 className="text-white mt-4 mb-5 pb-2">4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852</h5>
                    <div className="d-flex">
                      <div className="d-flex">
                        <div className="me-4">
                          <p className="text-white text-sm opacity-8 mb-0">Card Holder</p>
                          <h6 className="text-white mb-0">Jack Peterson</h6>
                        </div>
                        <div>
                          <p className="text-white text-sm opacity-8 mb-0">Expires</p>
                          <h6 className="text-white mb-0">11/22</h6>
                        </div>
                      </div>
                      <div className="ms-auto w-20 d-flex align-items-end justify-content-end">
                        <img className="w-60 mt-2" src="../assets/img/logos/mastercard.png" alt="logo"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row">
                <div className="col-md-6 col-6">
                  <div className="card">
                    <div className="card-header mx-4 p-3 text-center">
                      <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
                        <i className="material-icons opacity-10">account_balance</i>
                      </div>
                    </div>
                    <div className="card-body pt-0 p-3 text-center">
                      <h6 className="text-center mb-0">Salary</h6>
                      <span className="text-xs">Belong Interactive</span>
                      <hr className="horizontal dark my-3"/>
                      <h5 className="mb-0">+$2000</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="card">
                    <div className="card-header mx-4 p-3 text-center">
                      <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
                        <i className="material-icons opacity-10">account_balance_wallet</i>
                      </div>
                    </div>
                    <div className="card-body pt-0 p-3 text-center">
                      <h6 className="text-center mb-0">Paypal</h6>
                      <span className="text-xs">Freelance Payment</span>
                      <hr className="horizontal dark my-3"/>
                      <h5 className="mb-0">$455.00</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-lg-0 mb-4">
              <div className="card mt-4">
                <div className="card-header pb-0 p-3">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center">
                      <h6 className="mb-0">Payment Method</h6>
                    </div>
                    <div className="col-6 text-end">
                      <a className="btn bg-gradient-dark mb-0" href="javascript:;"><i className="material-icons text-sm">add</i>&nbsp;&nbsp;Add New Card</a>
                    </div>
                  </div>
                </div>
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-md-6 mb-md-0 mb-4">
                      <div className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                        <img className="w-10 me-3 mb-0" src="../assets/img/logos/mastercard.png" alt="logo"/>
                        <h6 className="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852</h6>
                        <i className="material-icons ms-auto text-dark cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Card">edit</i>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                        <img className="w-10 me-3 mb-0" src="../assets/img/logos/visa.png" alt="logo"/>
                        <h6 className="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248</h6>
                        <i className="material-icons ms-auto text-dark cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Card">edit</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-header pb-0 p-3">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <h6 className="mb-0">Invoices</h6>
                </div>
                <div className="col-6 text-end">
                  <button className="btn btn-outline-primary btn-sm mb-0">View All</button>
                </div>
              </div>
            </div>
            <div className="card-body p-3 pb-0">
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="mb-1 text-dark font-weight-bold text-sm">March, 01, 2020</h6>
                    <span className="text-xs">#MS-415646</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $180
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="material-icons text-lg position-relative me-1">picture_as_pdf</i> PDF</button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="text-dark mb-1 font-weight-bold text-sm">February, 10, 2021</h6>
                    <span className="text-xs">#RV-126749</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $250
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="material-icons text-lg position-relative me-1">picture_as_pdf</i> PDF</button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="text-dark mb-1 font-weight-bold text-sm">April, 05, 2020</h6>
                    <span className="text-xs">#FB-212562</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $560
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="material-icons text-lg position-relative me-1">picture_as_pdf</i> PDF</button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="text-dark mb-1 font-weight-bold text-sm">June, 25, 2019</h6>
                    <span className="text-xs">#QW-103578</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $120
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="material-icons text-lg position-relative me-1">picture_as_pdf</i> PDF</button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="text-dark mb-1 font-weight-bold text-sm">March, 01, 2019</h6>
                    <span className="text-xs">#AR-803481</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $300
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="material-icons text-lg position-relative me-1">picture_as_pdf</i> PDF</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 mt-4">
          <div className="card">
            <div className="card-header pb-0 px-3">
              <h6 className="mb-0">Billing Information</h6>
            </div>
            <div className="card-body pt-4 p-3">
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="mb-3 text-sm">Oliver Liam</h6>
                    <span className="mb-2 text-xs">Company Name: <span className="text-dark font-weight-bold ms-sm-2">Viking Burrito</span></span>
                    <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">oliver@burrito.com</span></span>
                    <span className="text-xs">VAT Number: <span className="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
                  </div>
                  <div className="ms-auto text-end">
                    <a className="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;"><i className="material-icons text-sm me-2">delete</i>Delete</a>
                    <a className="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i className="material-icons text-sm me-2">edit</i>Edit</a>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="mb-3 text-sm">Lucas Harper</h6>
                    <span className="mb-2 text-xs">Company Name: <span className="text-dark font-weight-bold ms-sm-2">Stone Tech Zone</span></span>
                    <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">lucas@stone-tech.com</span></span>
                    <span className="text-xs">VAT Number: <span className="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
                  </div>
                  <div className="ms-auto text-end">
                    <a className="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;"><i className="material-icons text-sm me-2">delete</i>Delete</a>
                    <a className="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i className="material-icons text-sm me-2">edit</i>Edit</a>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="mb-3 text-sm">Ethan James</h6>
                    <span className="mb-2 text-xs">Company Name: <span className="text-dark font-weight-bold ms-sm-2">Fiber Notion</span></span>
                    <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">ethan@fiber.com</span></span>
                    <span className="text-xs">VAT Number: <span className="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
                  </div>
                  <div className="ms-auto text-end">
                    <a className="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;"><i className="material-icons text-sm me-2">delete</i>Delete</a>
                    <a className="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i className="material-icons text-sm me-2">edit</i>Edit</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-5 mt-4">
          <div className="card h-100 mb-4">
            <div className="card-header pb-0 px-3">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="mb-0">Your Transaction's</h6>
                </div>
                <div className="col-md-6 d-flex justify-content-start justify-content-md-end align-items-center">
                  <i className="material-icons me-2 text-lg">date_range</i>
                  <small>23 - 30 March 2020</small>
                </div>
              </div>
            </div>
            <div className="card-body pt-4 p-3">
              <h6 className="text-uppercase text-body text-xs font-weight-bolder mb-3">Newest</h6>
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <button className="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i className="material-icons text-lg">expand_more</i></button>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Netflix</h6>
                      <span className="text-xs">27 March 2020, at 12:30 PM</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                    - $ 2,500
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i className="material-icons text-lg">expand_less</i></button>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Apple</h6>
                      <span className="text-xs">27 March 2020, at 04:30 AM</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                    + $ 2,000
                  </div>
                </li>
              </ul>
              <h6 className="text-uppercase text-body text-xs font-weight-bolder my-3">Yesterday</h6>
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i className="material-icons text-lg">expand_less</i></button>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Stripe</h6>
                      <span className="text-xs">26 March 2020, at 13:45 PM</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                    + $ 750
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i className="material-icons text-lg">expand_less</i></button>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">HubSpot</h6>
                      <span className="text-xs">26 March 2020, at 12:30 PM</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                    + $ 1,000
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i className="material-icons text-lg">expand_less</i></button>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Creative Tim</h6>
                      <span className="text-xs">26 March 2020, at 08:30 AM</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                    + $ 2,500
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <button className="btn btn-icon-only btn-rounded btn-outline-dark mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i className="material-icons text-lg">priority_high</i></button>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Webflow</h6>
                      <span className="text-xs">26 March 2020, at 05:00 AM</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center text-dark text-sm font-weight-bold">
                    Pending
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  </main>
      </>
    )
}