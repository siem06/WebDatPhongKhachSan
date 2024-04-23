import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import "../assets/css/responsive.css";

import Sidebar from "../components/RightSide";
import CardGrid from "../components/CardGrid_ImgDetail";
export default function RoomDetail() {
    
    return (

        <main>
            {/* // <!-- Breadcrumb Section Begin --> */}
            <section className="breadcrumb_area">
                <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background="">
                </div>
                <div className="container">
                    <div className="page-cover text-center">
                        <h2 className="page-cover-tittle">Chi tiết phòng</h2>
                        <ol className="breadcrumb">
                            <li><a href="/home">Trang chủ</a></li>
                            <li className="active">Chi tiết phòng</li>
                        </ol>
                    </div>
                </div>
            </section>
            {/* // <!-- Breadcrumb Section End -->

// <!-- Room Details Section Begin --> */}




            <section className="pt-0 mt-5">
                <div className="container" data-sticky-container="">

                    <div className="row g-4 g-xl-5">
                        {/* <!-- Content START --> */}
                        <div className="col-xl-8 order-1">
                            <div className="vstack gap-5">

                                {/* <!-- About hotel START --> */}
                                <div className="card bg-transparent">
                                    {/* <!-- Card header --> */}
                                    <div className="d-lg-flex justify-content-lg-between  card-header border-bottom bg-transparent ">
                                        <h2 className="mb-0">PHÒNG TỔNG THỐNG</h2>
                                        <ul className="list-inline text-end ">
                                            {/* <!-- Heart icon --> */}
                                            <li className="list-inline-item ">
                                                <a href="#" className="btn  btn-light px-2"><i className="fa-solid fa-lg fa-heart "></i></a>
                                            </li>
                                            {/* <!-- Share icon --> */}
                                            <li className="list-inline-item dropdown">
                                                {/* Share button */}
                                                <a href="#" className="btn btn-light px-2" role="button" id="dropdownShare" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fa-solid fa-lg fa-share-alt"></i>
                                                </a>
                                                {/* dropdown button */}
                                                <ul className="dropdown-menu dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare" data-popper-placement="top-end"
                                                    style={{
                                                        position: 'absolute',
                                                        inset: 'auto 0px 0px auto',
                                                        margin: '0px',
                                                        transform: 'translate3d(0px, -41.6px, 0px)',
                                                        display: 'block',
                                                        zIndex: 1000 // Đảm bảo popper hiển thị trên các phần tử khác
                                                    }}>
                                                    <li><a className="dropdown-item" href="#"><i className="fab fa-twitter-square me-2"></i>Twitter</a></li>
                                                    <li><a className="dropdown-item" href="#"><i className="fab fa-facebook-square me-2"></i>Facebook</a></li>
                                                    <li><a className="dropdown-item" href="#"><i className="fab fa-linkedin me-2"></i>LinkedIn</a></li>
                                                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-copy me-2"></i>Copy link</a></li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="card-body  ">
                                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img class="d-block w-100" src="img/room-1.jpg" alt="First slide"/>
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="img/room-2.jpg" alt="Second slide"/>
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="img/room-3.jpg" alt="Third slide"/>
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!-- Card body START --> */}
                                    <div className="card-body  ">

                                        {/* <!-- Highlights Icons --> */}
                                        <div className="hstack gap-3 mb-3">
                                            <div className="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Free wifi" data-bs-original-title="Free wifi">
                                                <i className="fa-solid fa-wifi"></i>
                                            </div>
                                            <div className="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Swimming Pool" data-bs-original-title="Swimming Pool">
                                                <i className="fa-solid fa-swimming-pool"></i>
                                            </div>
                                            <div className="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Central AC" data-bs-original-title="Central AC">
                                                <i className="fa-solid fa-snowflake"></i>
                                            </div>
                                            <div className="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Free Service" data-bs-original-title="Free Service">
                                                <i className="fa-solid fa-concierge-bell"></i>
                                            </div>
                                        </div>

                                        <p className="mb-3">Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why. <b>Bed one supposing breakfast day fulfilled off depending questions.</b></p>
                                        <p className="mb-0">Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.</p>

                                        <div className="collapse" id="collapseContent">
                                            <p className="my-3">We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn't going to get the job done so that's why this rickets is packed with practical hands-on examples that you can follow step by step.</p>
                                            <p className="mb-0">Behavioral psychology and influence triggers which are crucial for becoming a well rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn't going to get the job done so that's why this tickets is packed with practical hands-on examples that you can follow step by step.</p>
                                        </div>
                                        <a className="p-0 mb-4 mt-2 btn-more d-flex align-items-center collapsed" data-bs-toggle="collapse" href="#collapseContent" role="button" aria-expanded="false" aria-controls="collapseContent">
                                            See <span className="see-more ms-1">more</span><span className="see-less ms-1">less</span><i className="fa-solid fa-angle-down ms-2"></i>
                                        </a>

                                        {/* <!-- List --> */}
                                        <h5 className="fw-light mb-2">Advantages</h5>
                                        <ul className="list-group list-group-borderless mb-0">
                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="bi bi-patch-check-fill text-success me-2"></i>Every hotel staff to have Proper PPT kit for COVID-19</li>
                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="bi bi-patch-check-fill text-success me-2"></i>Every staff member wears face masks and gloves at all service times.</li>
                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="bi bi-patch-check-fill text-success me-2"></i>Hotel staff ensures to maintain social distancing at all times.</li>
                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="bi bi-patch-check-fill text-success me-2"></i>The hotel has In-Room Dining options available </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Card body END --> */}
                                </div>
                                {/* <!-- About hotel START --> */}

                                {/* <!-- Amenities START --> */}
                                <div className="card bg-transparent">
                                    {/* <!-- Card header --> */}
                                    <div className="card-header border-bottom bg-transparent ">
                                        <h3 className="card-title mb-0">Amenities</h3>
                                    </div>

                                    {/* <!-- Card body START --> */}
                                    <div className="card-body pt-4 ">
                                        <div className="row g-4">
                                            {/* <!-- Activities --> */}
                                            <div className="col-sm-6">
                                                <h6><i className="fa-solid fa-biking me-2"></i>Activities</h6>
                                                {/* <!-- List --> */}
                                                <ul className="list-group list-group-borderless mt-2 mb-0">
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Swimming pool
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Spa
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Kids' play area
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Gym
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* <!-- Payment Method --> */}
                                            <div className="col-sm-6">
                                                <h6><i className="fa-solid fa-credit-card me-2"></i>Payment Method</h6>
                                                {/* <!-- List --> */}
                                                <ul className="list-group list-group-borderless mt-2 mb-0">
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Credit card (Visa, Master card)
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Cash
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Debit Card
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* <!-- Services --> */}
                                            <div className="col-sm-6">
                                                <h6><i className="fa-solid fa-concierge-bell me-2"></i>Services</h6>
                                                {/* <!-- List --> */}
                                                <ul className="list-group list-group-borderless mt-2 mb-0">
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Dry cleaning
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Room Service
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Special service
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Waiting Area
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Secrete smoking area
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Concierge
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Laundry facilities
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Ironing Service
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Lift
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* <!-- Safety & Security --> */}
                                            <div className="col-sm-6">
                                                <h6><i className="bi bi-shield-fill-check me-2"></i>Safety &amp; Security</h6>
                                                {/* <!-- List --> */}
                                                <ul className="list-group list-group-borderless mt-2 mb-4 mb-sm-5">
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Doctor on Call
                                                    </li>
                                                </ul>

                                                <h6><i className="fa-solid fa-volume-up me-2"></i>Staff Language</h6>
                                                {/* <!-- List --> */}
                                                <ul className="list-group list-group-borderless mt-2 mb-0">
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>English
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Spanish
                                                    </li>
                                                    <li className="list-group-item pb-0">
                                                        <i className="fa-solid fa-check-circle text-success me-2"></i>Hindi
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <!-- Card body END --> */}
                                </div>
                                {/* <!-- Amenities END --> */}


                                {/* <!-- Customer Review START --> */}
                                <div className="card bg-transparent">
                                    {/* <!-- Card header --> */}
                                    <div className="card-header border-bottom bg-transparent ">
                                        <h3 className="card-title mb-0">Customer Review</h3>
                                    </div>

                                    {/* <!-- Card body START --> */}
                                    <div className="card-body pt-4 ">
                                        {/* <!-- Progress bar and rating START --> */}
                                        <div className="card bg-light p-4 mb-4">
                                            <div className="row g-4 align-items-center">
                                                {/* <!-- Rating info --> */}
                                                <div className="col-md-4">
                                                    <div className="text-center">
                                                        {/* <!-- Info --> */}
                                                        <h2 className="mb-0">4.5</h2>
                                                        <p className="mb-2">Based on 120 Reviews</p>
                                                        {/* <!-- Star --> */}
                                                        <ul className="list-inline mb-0">
                                                            <li className="list-inline-item me-0"><i className="fa-solid fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0"><i className="fa-solid fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0"><i className="fa-solid fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0"><i className="fa-solid fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0"><i className="fa-solid fa-star-half-alt text-warning"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* <!-- Progress-bar START --> */}
                                                <div className="col-md-8">
                                                    <div className="card-body ">
                                                        <div className="row gx-3 g-2 align-items-center">
                                                            {/* <!-- Progress bar and Rating --> */}
                                                            <div className="col-9 col-sm-10">
                                                                {/* <!-- Progress item --> */}
                                                                <div className="progress progress-sm bg-warning bg-opacity-15">
                                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!-- Percentage --> */}
                                                            <div className="col-3 col-sm-2 text-end">
                                                                <span className="h6 fw-light mb-0">85%</span>
                                                            </div>

                                                            {/* <!-- Progress bar and Rating --> */}
                                                            <div className="col-9 col-sm-10">
                                                                {/* <!-- Progress item --> */}
                                                                <div className="progress progress-sm bg-warning bg-opacity-15">
                                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!-- Percentage --> */}
                                                            <div className="col-3 col-sm-2 text-end">
                                                                <span className="h6 fw-light mb-0">75%</span>
                                                            </div>

                                                            {/* <!-- Progress bar and Rating --> */}
                                                            <div className="col-9 col-sm-10">
                                                                {/* <!-- Progress item --> */}
                                                                <div className="progress progress-sm bg-warning bg-opacity-15">
                                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!-- Percentage --> */}
                                                            <div className="col-3 col-sm-2 text-end">
                                                                <span className="h6 fw-light mb-0">60%</span>
                                                            </div>

                                                            {/* <!-- Progress bar and Rating --> */}
                                                            <div className="col-9 col-sm-10">
                                                                {/* <!-- Progress item --> */}
                                                                <div className="progress progress-sm bg-warning bg-opacity-15">
                                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '35%' }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!-- Percentage --> */}
                                                            <div className="col-3 col-sm-2 text-end">
                                                                <span className="h6 fw-light mb-0">35%</span>
                                                            </div>

                                                            {/* <!-- Progress bar and Rating --> */}
                                                            <div className="col-9 col-sm-10">
                                                                {/* <!-- Progress item --> */}
                                                                <div className="progress progress-sm bg-warning bg-opacity-15">
                                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!-- Percentage --> */}
                                                            <div className="col-3 col-sm-2 text-end">
                                                                <span className="h6 fw-light mb-0">15%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Progress-bar END --> */}

                                            </div>
                                        </div>
                                        {/* <!-- Progress bar and rating END -->

							<!-- Leave review START --> */}
                                        <form className="mb-5">
                                            {/* <!-- Rating --> */}
                                            <div className="form-control-bg-light mb-3">
                                                <div className="choices" data-type="select-one" tabindex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div className="choices__inner">
                                                    <select className="form-select js-choice choices__input" hidden="" tabindex="-1" data-choice="active">
                                                        <option value="★★★★★ (5/5)" data-custom-properties="[object Object]">★★★★★ (5/5)</option>
                                                        <option value="★★★★ (4/5)" data-custom-properties="[object Object]">★★★★★ (4/5)</option>
                                                        <option value="★★★ (3/5)" data-custom-properties="[object Object]">★★★★★ (3/5)</option>
                                                        <option value="★★ (2/5)" data-custom-properties="[object Object]">★★★★★ (2/5)</option>
                                                        <option value="★ (1/5)" data-custom-properties="[object Object]">★★★★★ (1/5)</option>
                                                    </select>

                                                    {/* <div className="choices__list choices__list--single">
                                                        <div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="★★★★★ (5/5)" data-custom-properties="[object Object]" aria-selected="true">★★★★★ (5/5)</div>
                                                    </div> */}
                                                </div>
                                                    {/* <div className="choices__list choices__list--dropdown" aria-expanded="false">
                                                        <div className="choices__list" role="listbox">
                                                            <div id="choices--4slr-item-choice-1" className="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="★★★★★ (5/5)" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">★★★★★ (5/5)</div>
                                                            <div id="choices--4slr-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="★★★★☆ (4/5)" data-select-text="Press to select" data-choice-selectable="">★★★★☆ (4/5)</div>
                                                            <div id="choices--4slr-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="★★★☆☆ (3/5)" data-select-text="Press to select" data-choice-selectable="">★★★☆☆ (3/5)</div>
                                                            <div id="choices--4slr-item-choice-4" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="★★☆☆☆ (2/5)" data-select-text="Press to select" data-choice-selectable="">★★☆☆☆ (2/5)</div>
                                                            <div id="choices--4slr-item-choice-5" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="5" data-value="★☆☆☆☆ (1/5)" data-select-text="Press to select" data-choice-selectable="">★☆☆☆☆ (1/5)</div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            {/* <!-- Message --> */}
                                            <div className="form-control-bg-light mb-3">
                                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your review" rows="3"></textarea>
                                            </div>
                                            {/* <!-- Button --> */}
                                            <button type="submit" className="btn btn-lg btn-primary mb-0">Post review <i className="bi fa-fw bi-arrow-right ms-2"></i></button>
                                        </form>
                                        {/* <!-- Leave review END --> */}

                                        {/* <!-- Review item START --> */}
                                        <div className="d-md-flex my-4">
                                            {/* <!-- Avatar --> */}
                                            <div className="avatar avatar-lg me-3 flex-shrink-0">
                                                <img className="avatar-img rounded-circle" src="https://booking.webestica.com/assets/images/avatar/09.jpg" alt="avatar" />
                                            </div>
                                            {/* <!-- Text --> */}
                                            <div>
                                                <div className="d-flex justify-content-between mt-1 mt-md-0">
                                                    <div>
                                                        <h6 className="me-3 mb-0">Jacqueline Miller</h6>
                                                        {/* <!-- Info --> */}
                                                        <ul className="nav nav-divider small mb-2">
                                                            <li className="nav-item">Stayed 13 Nov 2022</li>
                                                            <li className="nav-item">4 Reviews written</li>
                                                        </ul>
                                                    </div>
                                                    {/* <!-- Review star --> */}
                                                    <div className="icon-md rounded text-bg-warning fs-6">4.5</div>
                                                </div>

                                                <p className="mb-2">Handsome met debating sir dwelling age material. As style lived he worse dried.
                                                    Offered related so visitors we private removed. Moderate do subjects to distance. </p>

                                                {/* <!-- Images --> */}
                                                <div className="row g-4">
                                                    <div className="col-4 col-sm-3 col-lg-2">
                                                        <img src="https://booking.webestica.com/assets/images/category/hotel/4by3/07.jpg" className="rounded" alt="" />
                                                    </div>
                                                    {/* <div className="col-4 col-sm-3 col-lg-2">
                                                        <img src="https://booking.webestica.com/assets/images/category/hotel/4by3/08.jpg" className="rounded" alt="" />
                                                    </div>
                                                    <div className="col-4 col-sm-3 col-lg-2">
                                                        <img src="https://booking.webestica.com/assets/images/category/hotel/4by3/05.jpg" className="rounded" alt="" />
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Child review START --> */}
                                        <div className="my-4 ps-2 ps-md-3">
                                            <div className="d-md-flex p-3 bg-light rounded-3">
                                                <img className="avatar avatar-sm rounded-circle me-3" src="https://booking.webestica.com/assets/images/avatar/02.jpg" alt="avatar" />
                                                <div className="mt-2 mt-md-0">
                                                    <h6 className="mb-1">Manager</h6>
                                                    <p className="mb-0">But discretion frequently sir she instruments unaffected admiration everything. </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Child review END --> */}

                                        {/* <!-- Divider --> */}
                                        <hr />
                                        {/* <!-- Review item END --> */}

                                        {/* <!-- Review item START --> */}
                                        <div className="d-md-flex my-4">
                                            {/* <!-- Avatar --> */}
                                            <div className="avatar avatar-lg me-3 flex-shrink-0">
                                                <img className="avatar-img rounded-circle" src="https://booking.webestica.com/assets/images/avatar/08.jpg" alt="avatar" />
                                            </div>
                                            {/* <!-- Text --> */}
                                            <div>
                                                <div className="d-flex justify-content-between mt-1 mt-md-0">
                                                    <div>
                                                        <h6 className="me-3 mb-0">Dennis Barrett</h6>
                                                        {/* <!-- Info --> */}
                                                        <ul className="nav nav-divider small mb-2">
                                                            <li className="nav-item">Stayed 02 Nov 2022</li>
                                                            <li className="nav-item">2 Reviews written</li>
                                                        </ul>
                                                    </div>
                                                    {/* <!-- Review star --> */}
                                                    <div className="icon-md rounded text-bg-warning fs-6">4.0</div>
                                                </div>

                                                <p className="mb-0">Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.</p>
                                            </div>
                                        </div>

                                        {/* <!-- Divider --> */}
                                        <hr />
                                        {/* <!-- Review item END --> */}

                                        {/* <!-- Button --> */}
                                        <div className="text-center">
                                            <a href="#" className="btn btn-primary-soft mb-0">Load more</a>
                                        </div>
                                    </div>
                                    {/* <!-- Card body END --> */}
                                </div>
                                {/* <!-- Customer Review END --> */}

                                {/* <!-- Hotel Policies START --> */}
                                <div className="card bg-transparent">
                                    {/* <!-- Card header --> */}
                                    <div className="card-header border-bottom bg-transparent ">
                                        <h3 className="mb-0">Hotel Policies</h3>
                                    </div>

                                    {/* <!-- Card body START --> */}
                                    <div className="card-body pt-4 ">
                                        {/* <!-- List --> */}
                                        <ul className="list-group list-group-borderless mb-2">
                                            <li className="list-group-item d-flex">
                                                <i className="bi bi-check-circle-fill me-2"></i>This is a family farmhouse, hence we request you to not indulge.
                                            </li>
                                            <li className="list-group-item d-flex">
                                                <i className="bi bi-check-circle-fill me-2"></i>Drinking and smoking within controlled limits are permitted at the farmhouse but please do not create a mess or ruckus at the house.
                                            </li>
                                            <li className="list-group-item d-flex">
                                                <i className="bi bi-check-circle-fill me-2"></i>Drugs and intoxicating illegal products are banned and not to be brought to the house or consumed.
                                            </li>
                                            <li className="list-group-item d-flex">
                                                <i className="bi bi-x-circle-fill me-2"></i>For any update, the customer shall pay applicable cancellation/modification charges.
                                            </li>
                                        </ul>

                                        {/* <!-- List --> */}
                                        <ul className="list-group list-group-borderless mb-2">
                                            <li className="list-group-item h6 fw-light d-flex mb-0">
                                                <i className="bi bi-arrow-right me-2"></i>Check-in: 1:00 pm - 9:00 pm
                                            </li>
                                            <li className="list-group-item h6 fw-light d-flex mb-0">
                                                <i className="bi bi-arrow-right me-2"></i>Check out: 11:00 am
                                            </li>
                                            <li className="list-group-item h6 fw-light d-flex mb-0">
                                                <i className="bi bi-arrow-right me-2"></i>Self-check-in with building staff
                                            </li>
                                            <li className="list-group-item h6 fw-light d-flex mb-0">
                                                <i className="bi bi-arrow-right me-2"></i>No pets
                                            </li>
                                            <li className="list-group-item h6 fw-light d-flex mb-0">
                                                <i className="bi bi-arrow-right me-2"></i>No parties or events
                                            </li>
                                            <li className="list-group-item h6 fw-light d-flex mb-0">
                                                <i className="bi bi-arrow-right me-2"></i>Smoking is allowed
                                            </li>
                                        </ul>

                                        {/* <!-- Important note --> */}
                                        <div className="bg-danger bg-opacity-10 rounded-2 p-3 mb-3">
                                            <p className="mb-0 text-danger">During the COVID-19 pandemic, all hosts and guests must review and follow Booking social distancing and other COVID-19-related guidelines.</p>
                                        </div>
                                        <div className="bg-danger bg-opacity-10 rounded-2 p-3">
                                            <p className="mb-0 text-danger">Smoke alarm not reported — The host hasn't reported a smoke alarm on the property. We suggest bringing a portable detector for your trip.</p>
                                        </div>
                                    </div>
                                    {/* <!-- Card body END --> */}
                                </div>
                                {/* <!-- Hotel Policies START --> */}
                                {/* <!-- Room option START --> */}

                                {/* <!-- Room option END --> */}
                            </div>
                        </div>
                        {/* <!-- Content END --> */}
                        <Sidebar />

                    </div>
                </div>
            </section>




            {/* <!-- Room Details Section End --> */}
        </main>

    )
}