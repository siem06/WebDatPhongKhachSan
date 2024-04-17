import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import InputGroup from "../components/InputGroup";

import "bootstrap/dist/css/bootstrap.min.css";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import "../assets/css/responsive.css";
import imgs from "../assets/image";
export default function RoomDetail() {
    return (
          
          <main>
                {/* // <!-- Breadcrumb Section Begin --> */}
                <div className="breadcrumb-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-text">
                                    <h2>Our Rooms</h2>
                                    <div className="bt-option">
                                        <a href="./home.html">Home</a>
                                        <span>Rooms</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // <!-- Breadcrumb Section End -->

// <!-- Room Details Section Begin --> */}
                <section className="card-grid pt-0">
                    <div className="container">
                        <div className="row g-2">
                            {/* <!-- Image --> */}
                            <div className="col-md-6">
                                <a data-glightbox="" data-gallery="gallery" href="assets/images/gallery/14.jpg">
                                    <div className="card card-grid-lg card-element-hover card-overlay-hover overflow-hidden" >
                                        {/* <!-- Card hover element --> */}
                                        <div className="hover-element position-absolute w-100 h-100">
                                            <i className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-6">
                                {/* <!-- Card item START --> */}
                                <div className="row g-2">
                                    {/* <!-- Image --> */}
                                    <div className="col-12">
                                        <a data-glightbox="" data-gallery="gallery" href="assets/images/gallery/13.jpg">
                                            <div className="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden" >
                                                {/* <!-- Card hover element --> */}
                                                <div className="hover-element position-absolute w-100 h-100">
                                                    <i className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    {/* <!-- Image --> */}
                                    <div className="col-md-6">
                                        <a data-glightbox="" data-gallery="gallery" href="assets/images/gallery/12.jpg">
                                            <div className="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden" >
                                                {/* <!-- Card hover element --> */}
                                                <div className="hover-element position-absolute w-100 h-100">
                                                    <i className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    {/* <!-- Images --> */}
                                    <div className="col-md-6">
                                        <div className="card card-grid-sm overflow-hidden" >
                                            {/* <!-- Background overlay --> */}
                                            <div className="bg-overlay bg-dark opacity-7"></div>

                                            {/* <!-- Popup Images --> */}
                                            <a data-glightbox="" data-gallery="gallery" href="assets/images/gallery/11.jpg" className="stretched-link z-index-9"></a>
                                            <a data-glightbox="" data-gallery="gallery" href="assets/images/gallery/15.jpg"></a>
                                            <a data-glightbox="" data-gallery="gallery" href="assets/images/gallery/16.jpg"></a>

                                            {/* <!-- Overlay text --> */}
                                            <div className="card-img-overlay d-flex h-100 w-100">
                                                <h6 className="card-title m-auto fw-light text-decoration-underline"><a href="#" className="text-white">View all</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Card item END --> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-0">
                    <div className="container" data-sticky-container="">

                        <div className="row g-4 g-xl-5">
                            {/* <!-- Content START --> */}
                            <div className="col-xl-7 order-1">
                                <div className="vstack gap-5">

                                    {/* <!-- About hotel START --> */}
                                    <div className="card bg-transparent">
                                        {/* <!-- Card header --> */}
                                        <div className="card-header border-bottom bg-transparent px-0 pt-0">
                                            <h3 className="mb-0">About This Hotel</h3>
                                        </div>

                                        {/* <!-- Card body START --> */}
                                        <div className="card-body pt-4 p-0">
                                            <h5 className="fw-light mb-4">Main Highlights</h5>

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
                                        <div className="card-header border-bottom bg-transparent px-0 pt-0">
                                            <h3 className="card-title mb-0">Amenities</h3>
                                        </div>

                                        {/* <!-- Card body START --> */}
                                        <div className="card-body pt-4 p-0">
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

                                    {/* <!-- Room START --> */}
                                    <div className="card bg-transparent" id="room-options">
                                        {/* <!-- Card header --> */}
                                        <div className="card-header border-bottom bg-transparent px-0 pt-0">
                                            <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                <h3 className="mb-2 mb-sm-0">Room Options</h3>

                                                <div className="col-sm-4">
                                                    <form className="form-control-bg-light">
                                                        <div className="choices" data-type="select-one" tabindex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div className="choices__inner"><select className="form-select form-select-sm js-choice border-0 choices__input" hidden="" tabindex="-1" data-choice="active"><option value="" data-custom-properties="[object Object]">Select Option</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__placeholder choices__item--selectable" data-item="" data-id="1" data-value="" data-custom-properties="[object Object]" aria-selected="true">Select Option</div></div></div><div className="choices__list choices__list--dropdown" aria-expanded="false"><div className="choices__list" role="listbox"><div id="choices--q8c9-item-choice-1" className="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Select Option</div><div id="choices--q8c9-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="Recently search" data-select-text="Press to select" data-choice-selectable="">Recently search</div><div id="choices--q8c9-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="Most popular" data-select-text="Press to select" data-choice-selectable="">Most popular</div><div id="choices--q8c9-item-choice-4" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="Top rated" data-select-text="Press to select" data-choice-selectable="">Top rated</div></div></div></div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Card body START --> */}
                                        <div className="card-body pt-4 p-0">
                                            <div className="vstack gap-4">

                                                {/* <!-- Room item START --> */}
                                                <div className="card shadow p-3">
                                                    <div className="row g-4">
                                                        {/* <!-- Card img --> */}
                                                        <div className="col-md-5 position-relative">

                                                            {/* <!-- Overlay item --> */}
                                                            <div className="position-absolute top-0 start-0 z-index-1 mt-3 ms-4">
                                                                <div className="badge text-bg-danger">30% Off</div>
                                                            </div>

                                                            {/* <!-- Slider START --> */}
                                                            <div className="tiny-slider arrow-round arrow-xs arrow-dark overflow-hidden rounded-2">
                                                                <div className="tns-outer" id="tns1-ow"><div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">5</span>  of 4</div><div id="tns1-mw" className="tns-ovh"><div className="tns-inner" id="tns1-iw"><div className="tiny-slider-inner  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" data-autoplay="true" data-arrow="true" data-dots="false" data-items="1" id="tns1" ><div className="tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1"><img src="assets/images/category/hotel/4by3/01.jpg" alt="Card image"/></div>
                                                                    {/* <!-- Image item --> */}
                                                                    <div className="tns-item" id="tns1-item0" aria-hidden="true" tabindex="-1"><img src="assets/images/category/hotel/4by3/04.jpg" alt="Card image"/></div>

                                                                    {/* <!-- Image item --> */}
                                                                    <div className="tns-item" id="tns1-item1" aria-hidden="true" tabindex="-1"><img src="assets/images/category/hotel/4by3/02.jpg" alt="Card image"/></div>

                                                                    {/* <!-- Image item --> */}
                                                                    <div className="tns-item" id="tns1-item2" aria-hidden="true" tabindex="-1"><img src="assets/images/category/hotel/4by3/03.jpg" alt="Card image"/></div>

                                                                    {/* <!-- Image item --> */}
                                                                    <div className="tns-item tns-slide-active" id="tns1-item3"><img src="assets/images/category/hotel/4by3/01.jpg" alt="Card image"/></div>
                                                                    <div className="tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1"><img src="assets/images/category/hotel/4by3/04.jpg" alt="Card image"/></div></div></div></div><div className="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="tns1"><i className="bi bi-arrow-left"></i></button><button type="button" data-controls="next" tabindex="-1" aria-controls="tns1"><i className="bi bi-arrow-right"></i></button></div></div>
                                                            </div>
                                                            {/* <!-- Slider END -->

                                                        <!-- Button --> */}
                                                            <a href="#" className="btn btn-link text-decoration-underline p-0 mb-0 mt-1" data-bs-toggle="modal" data-bs-target="#roomDetail"><i className="bi bi-eye-fill me-1"></i>View more details</a>
                                                        </div>

                                                        {/* <!-- Card body --> */}
                                                        <div className="col-md-7">
                                                            <div className="card-body d-flex flex-column h-100 p-0">

                                                                {/* <!-- Title --> */}
                                                                <h5 className="card-title"><a href="#">Luxury Room with Balcony</a></h5>

                                                                {/* <!-- Amenities --> */}
                                                                <ul className="nav nav-divider mb-2">
                                                                    <li className="nav-item">Air Conditioning</li>
                                                                    <li className="nav-item">Wifi</li>
                                                                    <li className="nav-item">Kitchen</li>
                                                                    <li className="nav-item">
                                                                        <a href="#" className="mb-0 text-primary">More+</a>
                                                                    </li>
                                                                </ul>

                                                                <p className="text-success mb-0">Free Cancellation till 7 Jan 2022</p>

                                                                {/* <!-- Price and Button --> */}
                                                                <div className="d-sm-flex justify-content-sm-between align-items-center mt-auto">
                                                                    {/* <!-- Button --> */}
                                                                    <div className="d-flex align-items-center">
                                                                        <h5 className="fw-bold mb-0 me-1">$750</h5>
                                                                        <span className="mb-0 me-2">/day</span>
                                                                        <span className="text-decoration-line-through mb-0">$1000</span>
                                                                    </div>
                                                                    {/* <!-- Price --> */}
                                                                    <div className="mt-3 mt-sm-0">
                                                                        <a href="#" className="btn btn-sm btn-primary mb-0">Select Room</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Room item END -->

                                            <!-- Room item START --> */}
                                                <div className="card shadow p-3">
                                                    <div className="row g-4">
                                                        {/* <!-- Card img --> */}
                                                        <div className="col-md-5 position-relative">

                                                            {/* <!-- Overlay item --> */}
                                                            <div className="position-absolute top-0 start-0 z-index-1 mt-3 ms-4">
                                                                <div className="badge text-bg-danger">15% Off</div>
                                                            </div>

                                                            {/* <!-- Slider START --> */}
                                                            <div className="tiny-slider arrow-round arrow-xs arrow-dark overflow-hidden rounded-2">
                                                                <div className="tns-outer" id="tns2-ow"><div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">5</span>  of 4</div><div id="tns2-mw" className="tns-ovh"><div className="tns-inner" id="tns2-iw"><div className="tiny-slider-inner  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" data-autoplay="true" data-arrow="true" data-dots="false" data-items="1" id="tns2" ><div className="tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1"><img src="assets/images/category/hotel/4by3/01.jpg" alt="Card image"/></div>
                                                                    {/* <!-- Image item --> */}
                                                                    <div className="tns-item" id="tns2-item0" aria-hidden="true" tabindex="-1"><img src="assets/images/category/hotel/4by3/03.jpg" alt="Card image"/></div>

                                                                    {/* <!-- Image item --> */}
                                                                    <div className="tns-item" id="tns2-item1" aria-hidden="true" tabindex="-1"><img src="assets/images/category/hotel/4by3/02.jpg" alt="Card image"/></div>

                                                                    {/* <!-- Image item --> */}
                                                                    <div className="tns-item" id="tns2-item2" aria-hidden="true" tabindex="-1"><img src="assets/images/category/hotel/4by3/04.jpg" alt="Card image"/></div>

                                                                    {/* <!-- Image item --> */}
                                                                    <div className="tns-item tns-slide-active" id="tns2-item3"><img src="assets/images/category/hotel/4by3/01.jpg" alt="Card image"/></div>
                                                                    <div className="tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1"><img src="assets/images/category/hotel/4by3/03.jpg" alt="Card image"/></div></div></div></div><div className="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="tns2"><i className="bi bi-arrow-left"></i></button><button type="button" data-controls="next" tabindex="-1" aria-controls="tns2"><i className="bi bi-arrow-right"></i></button></div></div>
                                                            </div>
                                                            {/* <!-- Slider END -->

                                                        <!-- Button --> */}
                                                            <a href="#" className="btn btn-link text-decoration-underline p-0 mb-0 mt-1" data-bs-toggle="modal" data-bs-target="#roomDetail"><i className="bi bi-eye-fill me-1"></i>View more details</a>
                                                        </div>

                                                        {/* <!-- Card body --> */}
                                                        <div className="col-md-7">
                                                            <div className="card-body d-flex flex-column p-0 h-100">

                                                                {/* <!-- Title --> */}
                                                                <h5 className="card-title"><a href="#">Deluxe Pool View with Breakfast</a></h5>

                                                                {/* <!-- Amenities --> */}
                                                                <ul className="nav nav-divider mb-2">
                                                                    <li className="nav-item">Air Conditioning</li>
                                                                    <li className="nav-item">Wifi</li>
                                                                    <li className="nav-item">Kitchen</li>
                                                                    <li className="nav-item">
                                                                        <a href="#" className="mb-0 text-primary">More+</a>
                                                                    </li>
                                                                </ul>

                                                                <p className="text-danger mb-3">Non Refundable</p>

                                                                {/* <!-- Price and Button --> */}
                                                                <div className="d-sm-flex justify-content-sm-between align-items-center mt-auto">
                                                                    {/* <!-- Button --> */}
                                                                    <div className="d-flex align-items-center">
                                                                        <h5 className="fw-bold mb-0 me-1">$750</h5>
                                                                        <span className="mb-0 me-2">/day</span>
                                                                        <span className="text-decoration-line-through mb-0">$1000</span>
                                                                    </div>
                                                                    {/* <!-- Price --> */}
                                                                    <div className="mt-3 mt-sm-0">
                                                                        <a href="#" className="btn btn-sm btn-primary mb-0">Select Room</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Room item END --> */}
                                            </div>
                                        </div>
                                        {/* <!-- Card body END --> */}
                                    </div>
                                    {/* <!-- Room END -->

                                <!-- Customer Review START --> */}
                                    <div className="card bg-transparent">
                                        {/* <!-- Card header --> */}
                                        <div className="card-header border-bottom bg-transparent px-0 pt-0">
                                            <h3 className="card-title mb-0">Customer Review</h3>
                                        </div>

                                        {/* <!-- Card body START --> */}
                                        <div className="card-body pt-4 p-0">
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
                                                        <div className="card-body p-0">
                                                            <div className="row gx-3 g-2 align-items-center">
                                                                {/* <!-- Progress bar and Rating --> */}
                                                                <div className="col-9 col-sm-10">
                                                                    {/* <!-- Progress item --> */}
                                                                    <div className="progress progress-sm bg-warning bg-opacity-15">
                                                                        <div className="progress-bar bg-warning" role="progressbar" >
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
                                                                        <div className="progress-bar bg-warning" role="progressbar" >
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
                                                                        <div className="progress-bar bg-warning" role="progressbar" >
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
                                                                        <div className="progress-bar bg-warning" role="progressbar" >
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
                                                                        <div className="progress-bar bg-warning" role="progressbar" >
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
                                            {/* <!-- Progress bar and rating END --> */}

                                            {/* <!-- Leave review START --> */}
                                            <form className="mb-5">
                                                {/* <!-- Rating --> */}
                                                <div className="form-control-bg-light mb-3">
                                                    <div className="choices" data-type="select-one" tabindex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div className="choices__inner"><select className="form-select js-choice choices__input" hidden="" tabindex="-1" data-choice="active"><option value="★★★★★ (5/5)" data-custom-properties="[object Object]">★★★★★ (5/5)</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="★★★★★ (5/5)" data-custom-properties="[object Object]" aria-selected="true">★★★★★ (5/5)</div></div></div><div className="choices__list choices__list--dropdown" aria-expanded="false"><div className="choices__list" role="listbox"><div id="choices--m4qa-item-choice-1" className="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="★★★★★ (5/5)" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">★★★★★ (5/5)</div><div id="choices--m4qa-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="★★★★☆ (4/5)" data-select-text="Press to select" data-choice-selectable="">★★★★☆ (4/5)</div><div id="choices--m4qa-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="★★★☆☆ (3/5)" data-select-text="Press to select" data-choice-selectable="">★★★☆☆ (3/5)</div><div id="choices--m4qa-item-choice-4" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="★★☆☆☆ (2/5)" data-select-text="Press to select" data-choice-selectable="">★★☆☆☆ (2/5)</div><div id="choices--m4qa-item-choice-5" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="5" data-value="★☆☆☆☆ (1/5)" data-select-text="Press to select" data-choice-selectable="">★☆☆☆☆ (1/5)</div></div></div></div>
                                                </div>
                                                {/* <!-- Message --> */}
                                                <div className="form-control-bg-light mb-3">
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your review" rows="3"></textarea>
                                                </div>
                                                {/* <!-- Button --> */}
                                                <button type="submit" className="btn btn-lg btn-primary mb-0">Post review <i className="bi fa-fw bi-arrow-right ms-2"></i></button>
                                            </form>
                                            {/* <!-- Leave review END -->

                                        <!-- Review item START --> */}
                                            <div className="d-md-flex my-4">
                                                {/* <!-- Avatar --> */}
                                                <div className="avatar avatar-lg me-3 flex-shrink-0">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar"/>
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

                                                    <p className="mb-2">Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance. </p>

                                                    {/* <!-- Images --> */}
                                                    <div className="row g-4">
                                                        <div className="col-4 col-sm-3 col-lg-2">
                                                            <img src="assets/images/category/hotel/4by3/07.jpg" className="rounded" alt=""/>
                                                        </div>
                                                        <div className="col-4 col-sm-3 col-lg-2">
                                                            <img src="assets/images/category/hotel/4by3/08.jpg" className="rounded" alt=""/>
                                                        </div>
                                                        <div className="col-4 col-sm-3 col-lg-2">
                                                            <img src="assets/images/category/hotel/4by3/05.jpg" className="rounded" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- Child review START --> */}
                                            <div className="my-4 ps-2 ps-md-3">
                                                <div className="d-md-flex p-3 bg-light rounded-3">
                                                    <img className="avatar avatar-sm rounded-circle me-3" src="assets/images/avatar/02.jpg" alt="avatar"/>
                                                        <div className="mt-2 mt-md-0">
                                                            <h6 className="mb-1">Manager</h6>
                                                            <p className="mb-0">But discretion frequently sir she instruments unaffected admiration everything. </p>
                                                        </div>
                                                </div>
                                            </div>
                                            {/* <!-- Child review END -->

                                        <!-- Divider --> */}
                                            <hr />
                                            {/* <!-- Review item END -->

                                            <!-- Review item START --> */}
                                            <div className="d-md-flex my-4">
                                                {/* <!-- Avatar --> */}
                                                <div className="avatar avatar-lg me-3 flex-shrink-0">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg" alt="avatar"/>
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
                                        <div className="card-header border-bottom bg-transparent px-0 pt-0">
                                            <h3 className="mb-0">Hotel Policies</h3>
                                        </div>

                                        {/* <!-- Card body START --> */}
                                        <div className="card-body pt-4 p-0">
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
                                </div>
                            </div>
                            {/* <!-- Content END -->

                            <!-- Right side content START --> */}
                            <aside className="col-xl-5 order-xl-2">
                                <div data-sticky="" data-margin-top="100" data-sticky-for="1199" >
                                    {/* <!-- Book now START --> */}
                                    <div className="card card-body border">

                                        {/* <!-- Title --> */}
                                        <div className="d-sm-flex justify-content-sm-between align-items-center mb-3">
                                            <div>
                                                <span>Price Start at</span>
                                                <h4 className="card-title mb-0">$3,500</h4>
                                            </div>
                                            <div>
                                                <h6 className="fw-normal mb-0">1 room per night</h6>
                                                <small>+ $285 taxes &amp; fees</small>
                                            </div>
                                        </div>

                                        {/* <!-- Rating --> */}
                                        <ul className="list-inline mb-2">
                                            <li className="list-inline-item me-1 h6 fw-light mb-0"><i className="bi bi-arrow-right me-2"></i>4.5</li>
                                            <li className="list-inline-item me-0 small"><i className="fa-solid fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fa-solid fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fa-solid fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fa-solid fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fa-solid fa-star-half-alt text-warning"></i></li>
                                        </ul>

                                        <p className="h6 fw-light mb-4"><i className="bi bi-arrow-right me-2"></i>Free breakfast available</p>

                                        {/* <!-- Button --> */}
                                        <div className="d-grid">
                                            <a href="#room-options" className="btn btn-lg btn-primary-soft mb-0">View 10 Rooms Options</a>
                                        </div>
                                    </div>
                                    {/* <!-- Book now END --> */}

                                    {/* <!-- Best deal START --> */}
                                    <div className="mt-4 d-none d-xl-block">
                                        <h4>Today's Best Deal</h4>

                                        <div className="card shadow rounded-3 overflow-hidden">
                                            <div className="row g-0 align-items-center">
                                                {/* <!-- Image --> */}
                                                <div className="col-sm-6 col-md-12 col-lg-6">
                                                    <img src="assets/images/offer/04.jpg" className="card-img rounded-0" alt="" />
                                                </div>

                                                {/* <!-- Title and content --> */}
                                                <div className="col-sm-6 col-md-12 col-lg-6">
                                                    <div className="card-body p-3">
                                                        <h6 className="card-title"><a href="offer-detail.html" className="stretched-link">Travel Plan</a></h6>
                                                        <p className="mb-0">Get up to $10,000 for lifetime limits</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Best deal END --> */}
                                </div>
                            </aside>
                            {/* <!-- Right side content END --> */}
                        </div>
                    </div>
                </section>
                {/* <!-- Room Details Section End --> */}
                </main>      
           
            )
}