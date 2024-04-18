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
import { Link } from "react-router-dom";
export default function Payment() {
  return (
    <>
    <section>
	<div className="container">
		<div className="row g-4 g-lg-5">	

			{/* <!-- Left side content START --> */}
			<div className="col-xl-8">
				<div className="vstack gap-5">
					{/* <!-- Hotel information START --> */}
					<div className="card shadow">
						{/* <!-- Card header --> */}
						<div className="card-header p-4 border-bottom">
							{/* <!-- Title --> */}
							<h3 className="mb-0"><i className="fa-solid fa-hotel me-2"></i>Hotel Information</h3>
						</div>

						{/* <!-- Card body START --> */}
						<div className="card-body p-4">
							{/* <!-- Card list START --> */}
							<div className="card mb-4">
								<div className="row align-items-center">
									{/* <!-- Image --> */}
									<div className="col-sm-6 col-md-3">
										<img src="assets/images/category/hotel/4by3/02.jpg" className="card-img" alt=""/>
									</div>

									{/* <!-- Card Body --> */}
									<div className="col-sm-6 col-md-9">
										<div className="card-body pt-3 pt-sm-0 p-0">
											{/* <!-- Title --> */}
											<h5 className="card-title"><a href="#">Pride moon Village Resort &amp; Spa</a></h5>
											<p className="small mb-2"><i className="bi bi-geo-alt me-2"></i>5855 W Century Blvd, Los Angeles - 90045</p>

											{/* <!-- Rating star --> */}
											<ul className="list-inline mb-0">
												<li className="list-inline-item me-0 small"><i className="fa-solid fa-star text-warning"></i></li>
												<li className="list-inline-item me-0 small"><i className="fa-solid fa-star text-warning"></i></li>
												<li className="list-inline-item me-0 small"><i className="fa-solid fa-star text-warning"></i></li>
												<li className="list-inline-item me-0 small"><i className="fa-solid fa-star text-warning"></i></li>
												<li className="list-inline-item me-0 small"><i className="fa-solid fa-star-half-alt text-warning"></i></li>
												<li className="list-inline-item ms-2 h6 small fw-bold mb-0">4.5/5.0</li>
											</ul>
										</div>
									</div>

								</div>
							</div>
							{/* <!-- Card list END --> */}
							
							{/* <!-- Information START --> */}
							<div className="row g-4">
								{/* <!-- Item --> */}
								<div className="col-lg-4">
									<div className="bg-light py-3 px-4 rounded-3">
										<h6 className="fw-light small mb-1">Check-in</h6>
										<h5 className="mb-1">4 March 2022</h5>
										<small><i className="bi bi-alarm me-1"></i>12:30 pm</small>
									</div>
								</div>

								{/* <!-- Item --> */}
								<div className="col-lg-4">
									<div className="bg-light py-3 px-4 rounded-3">
										<h6 className="fw-light small mb-1">Check out</h6>
										<h5 className="mb-1">8 March 2022</h5>
										<small><i className="bi bi-alarm me-1"></i>4:30 pm</small>
									</div>
								</div>

								{/* <!-- Item --> */}
								<div className="col-lg-4">
									<div className="bg-light py-3 px-4 rounded-3">
										<h6 className="fw-light small mb-1">Rooms &amp; Guests</h6>
										<h5 className="mb-1">2 G - 1 R</h5>
										<small><i className="bi bi-brightness-high me-1"></i>3 Nights - 4 Days</small>
									</div>
								</div>
							</div>
							{/* <!-- Information END -->

							<!-- Card START --> */}
							<div className="card border mt-4">
								{/* <!-- Card header --> */}
								<div className="card-header border-bottom d-md-flex justify-content-md-between">
									<h5 className="card-title mb-0">Deluxe Pool View with Breakfast</h5>
									<a href="#" className="btn btn-link p-0 mb-0">View Cancellation Policy</a>
								</div>

								{/* <!-- Card body --> */}
								<div className="card-body">
									<h6>Price Included</h6>
									{/* <!-- List --> */}
									<ul className="list-group list-group-borderless mb-0">
										<li className="list-group-item h6 fw-light d-flex mb-0"><i className="bi bi-patch-check-fill text-success me-2"></i>Free Breakfast and Lunch/Dinner.</li>
										<li className="list-group-item h6 fw-light d-flex mb-0"><i className="bi bi-patch-check-fill text-success me-2"></i>Great Small Breaks.</li>
										<li className="list-group-item h6 fw-light d-flex mb-0"><i className="bi bi-patch-check-fill text-success me-2"></i>Free Stay for Kids Below the age of 12 years.</li>
										<li className="list-group-item h6 fw-light d-flex mb-0"><i className="bi bi-patch-check-fill text-success me-2"></i>On Cancellation, You will not get any refund</li>
									</ul>
								</div>
							</div>
							{/* <!-- Card END --> */}
						</div>
						{/* <!-- Card body END --> */}
					</div>
					{/* <!-- Hotel information END --> */}

					{/* <!-- Guest detail START --> */}
					<div className="card shadow">
						{/* <!-- Card header --> */}
						<div className="card-header border-bottom p-4">
							<h4 className="card-title mb-0"><i className="bi bi-people-fill me-2"></i>Guest Details</h4>
						</div>
							
						{/* <!-- Card body START --> */}
						<div className="card-body p-4">
							{/* <!-- Form START --> */}
							<form className="row g-4">
								{/* <!-- Title --> */}
								<div className="col-12">
									<div className="bg-light rounded-2 px-4 py-3">
										<h6 className="mb-0">Main Guest</h6>
									</div>
								</div>
								
								{/* <!-- Select --> */}
								<div className="col-md-2">
									<div className="form-size-lg">
										<label className="form-label">Title</label>
										<div className="choices" data-type="select-one" tabindex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div className="choices__inner"><select className="form-select js-choice choices__input" hidden="" tabindex="-1" data-choice="active"><option value="Mr" data-custom-properties="[object Object]">Mr</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="Mr" data-custom-properties="[object Object]" aria-selected="true">Mr</div></div></div><div className="choices__list choices__list--dropdown" aria-expanded="false"><div className="choices__list" role="listbox"><div id="choices--ubz7-item-choice-1" className="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="Mr" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Mr</div><div id="choices--ubz7-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="Mrs" data-select-text="Press to select" data-choice-selectable="">Mrs</div></div></div></div>
									</div>	
								</div>

								{/* <!-- Input --> */}
								<div className="col-md-5">
									<label className="form-label">First Name</label>
									<input type="text" className="form-control form-control-lg" placeholder="Enter your name"/>
								</div>

								{/* <!-- Input --> */}
								<div className="col-md-5">
									<label className="form-label">Last Name</label>
									<input type="text" className="form-control form-control-lg" placeholder="Enter your name"/>
								</div>

								{/* <!-- Button --> */}
								<div className="col-12">
									<a href="#" className="btn btn-link mb-0 p-0"><i className="fa-solid fa-plus me-2"></i>Add New Guest</a>
								</div>

								{/* <!-- Input --> */}
								<div className="col-md-6">
									<label className="form-label">Email id</label>
									<input type="email" className="form-control form-control-lg" placeholder="Enter your email"/>
									<div id="emailHelp" className="form-text">(Booking voucher will be sent to this email ID)</div>
								</div>

								{/* <!-- Input --> */}
								<div className="col-md-6">
									<label className="form-label">Mobile number</label>
									<input type="text" className="form-control form-control-lg" placeholder="Enter your mobile number"/>
								</div>
							</form>
							{/* <!-- Form END -->

							<!-- Alert START --> */}
							<div className="alert alert-info my-4" role="alert">
								<a href="sign-up.html" className="alert-heading h6">Login</a> to prefill all details and get access to secret deals
							</div>
							{/* <!-- Alert END -->

							<!-- Special request START --> */}
							<div className="card border mt-4">
								{/* <!-- Card header --> */}
								<div className="card-header border-bottom">
									<h5 className="card-title mb-0">Special request</h5>
								</div>

								{/* <!-- Card body START --> */}
								<div className="card-body">
									<form className="hstack flex-wrap gap-3">
										{/* <!-- Checkbox --> */}
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="hotelType1"/>
											<label className="form-check-label" for="hotelType1">Smoking room</label>
										</div>
										{/* <!-- Checkbox --> */}
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="hotelType2"/>
											<label className="form-check-label" for="hotelType2">Late check-in</label>
										</div>
										{/* <!-- Checkbox --> */}
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="hotelType3"/>
											<label className="form-check-label" for="hotelType3">Early check-in</label>
										</div>
										{/* <!-- Checkbox --> */}
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="hotelType4"/>
											<label className="form-check-label" for="hotelType4">Room on a high floor</label>
										</div>
										{/* <!-- Checkbox --> */}
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="hotelType5"/>
											<label className="form-check-label" for="hotelType5">Large bed</label>
										</div>
										{/* <!-- Checkbox --> */}
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="hotelType6"/>
											<label className="form-check-label" for="hotelType6">Airport transfer</label>
										</div>
										{/* <!-- Checkbox --> */}
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="hotelType8"/>
											<label className="form-check-label" for="hotelType8">Twin beds</label>
										</div>
									</form>	
								</div>
								{/* <!-- Card body END --> */}
							</div>
							{/* <!-- Special request END --> */}
						</div>
						{/* <!-- Card body END --> */}
					</div>
					{/* <!-- Guest detail END --> */}

					{/* <!-- Payment Options START --> */}
					<div className="card shadow">
						{/* <!-- Card header --> */}
						<div className="card-header border-bottom p-4">
							{/* <!-- Title --> */}
							<h4 className="card-title mb-0"><i className="bi bi-wallet-fill me-2"></i>Payment Options</h4>
						</div>
						
						{/* <!-- Card body START --> */}
						<div className="card-body p-4 pb-0">
							
							<div className="bg-primary bg-opacity-10 rounded-3 mb-4 p-3">
								<div className="d-md-flex justify-content-md-between align-items-center">
									
									<div className="d-sm-flex align-items-center mb-2 mb-md-0">
										
										<img src="assets/images/element/16.svg" className="h-50px" alt=""/>
										
										<div className="ms-sm-3 mt-2 mt-sm-0">
											<h5 className="card-title mb-0">Get Additional Discount</h5>
											<p className="mb-0">Login to access saved payments and discounts!</p>
										</div>
									</div>

									
									<a href="sign-in.html" className="btn btn-primary mb-0">Login now</a>
								</div>
							</div>
							
							<div className="accordion accordion-icon accordion-bg-light" id="accordioncircle">
								{/* <!-- Credit or debit card START --> */}
								<div className="accordion-item mb-3">
									<h6 className="accordion-header" id="heading-1">
										<button className="accordion-button rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
											<i className="bi bi-credit-card text-primary me-2"></i>	<span className="me-5">Credit or Debit Card</span>
										</button>
									</h6>
									<div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordioncircle">
										{/* <!-- Accordion body --> */}
										<div className="accordion-body">

											{/* <!-- Card list -->      */}
											<div className="d-sm-flex justify-content-sm-between my-3">
												<h6 className="mb-2 mb-sm-0">We Accept:</h6>
												<ul className="list-inline my-0">
													<li className="list-inline-item"> <a href="#"><img src="assets/images/element/visa.svg" className="h-30px" alt=""/></a></li>
													<li className="list-inline-item"> <a href="#"><img src="assets/images/element/mastercard.svg" className="h-30px" alt=""/></a></li>
													<li className="list-inline-item"> <a href="#"><img src="assets/images/element/expresscard.svg" className="h-30px" alt=""/></a></li>
												</ul>
											</div>

											{/* <!-- Form START --> */}
											<form className="row g-3">
												{/* <!-- Card number --> */}
												<div className="col-12">
													<label className="form-label"><span className="h6 fw-normal">Card Number *</span></label>
													<div className="position-relative">
														<input type="text" className="form-control" maxlength="14" placeholder="XXXX XXXX XXXX XXXX"/>
														<img src="assets/images/element/visa.svg" className="w-30px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block" alt=""/>
													</div>	
												</div>
												{/* <!-- Expiration Date --> */}
												<div className="col-md-6">
													<label className="form-label"><span className="h6 fw-normal">Expiration date *</span></label>
													<div className="input-group">
														<input type="text" className="form-control" maxlength="2" placeholder="Month"/>
														<input type="text" className="form-control" maxlength="4" placeholder="Year"/>
													</div>
												</div>	
												{/* <!--Cvv code  --> */}
												<div className="col-md-6">
													<label className="form-label"><span className="h6 fw-normal">CVV / CVC *</span></label>
													<input type="text" className="form-control" maxlength="3" placeholder="xxx"/>
												</div>
												{/* <!-- Card name --> */}
												<div className="col-12">
													<label className="form-label"><span className="h6 fw-normal">Name on Card *</span></label>
													<input type="text" className="form-control" aria-label="name of card holder" placeholder="Enter card holder name"/>
												</div>

												{/* <!-- Alert box START --> */}
												<div className="col-12">
													<div className="alert alert-success alert-dismissible fade show my-3" role="alert">

														{/* <!-- Title --> */}
														<div className="d-sm-flex align-items-center mb-3">
															<img src="assets/images/element/12.svg" className="w-40px me-3 mb-2 mb-sm-0" alt=""/> 
															<h5 className="alert-heading mb-0">$50,000 Covid Cover &amp; More</h5>
														</div>
														
														{/* <!-- Content --> */}
														<p className="mb-2">Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>

														{/* <!-- Button and price --> */}
														<div className="d-sm-flex align-items-center">
															<a href="#" className="btn btn-sm btn-success mb-2 mb-sm-0 me-3"><i className="fa-regular fa-plus me-2"></i>Add</a>
															<h6 className="mb-0">$69 per person</h6>
														</div>

														{/* <!-- Close button --> */}
														<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
													</div>
												</div>
												{/* <!-- Alert box END --> */}

												{/* <!-- Buttons --> */}
												<div className="col-12">
													<div className="d-sm-flex justify-content-sm-between align-items-center">
														<h4>$1800 <span className="small fs-6">Due now</span></h4>
														<button className="btn btn-primary mb-0">Pay Now</button>
													</div>
												</div>

											</form>
											{/* <!-- Form END --> */}
										</div>
									</div>
								</div>
								{/* <!-- Credit or debit card END --> */}

								{/* <!-- Net banking START --> */}
								<div className="accordion-item mb-3">
									<h6 className="accordion-header" id="heading-2">
										<button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
											<i className="bi bi-globe2 text-primary me-2"></i> <span className="me-5">Pay with Net Banking</span>
										</button>
									</h6>
									<div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordioncircle">
										{/* <!-- Accordion body --> */}
										<div className="accordion-body">

											{/* <!-- Form START --> */}
											<form className="row g-3 mt-1">

												{/* <!-- Popular bank --> */}
												<ul className="list-inline mb-0">

													<li className="list-inline-item"> <h6 className="mb-0">Popular Bank:</h6> </li>
													{/* <!-- Rent --> */}
													<li className="list-inline-item">
														<input type="radio" className="btn-check" name="options" id="option1"/>
														<label className="btn btn-light btn-primary-soft-check" for="option1">
															<img src="assets/images/element/13.svg" className="h-20px me-2" alt=""/>Bank of America
														</label>
													</li>
													{/* <!-- Sale --> */}
													<li className="list-inline-item">
														<input type="radio" className="btn-check" name="options" id="option2"/>
														<label className="btn btn-light btn-primary-soft-check" for="option2">
															<img src="assets/images/element/15.svg" className="h-20px me-2" alt=""/>Bank of Japan
														</label>
													</li>
													{/* <!-- Buy --> */}
													<li className="list-inline-item">
														<input type="radio" className="btn-check" name="options" id="option3"/>
														<label className="btn btn-light btn-primary-soft-check" for="option3">
															<img src="assets/images/element/14.svg" className="h-20px me-2" alt=""/>VIVIV Bank
														</label>
													</li>
												</ul>

												<p className="mb-1">In order to complete your transaction, we will transfer you over to Booking secure servers.</p>
												<p className="my-0">Select your bank from the drop-down list and click proceed to continue with your payment.</p>
												{/* <!-- Select bank --> */}
												<div className="col-md-6">
													<div className="choices" data-type="select-one" tabindex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div className="choices__inner"><select className="form-select form-select-sm js-choice border-0 choices__input" hidden="" tabindex="-1" data-choice="active"><option value="" data-custom-properties="[object Object]">Please choose one</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__placeholder choices__item--selectable" data-item="" data-id="1" data-value="" data-custom-properties="[object Object]" aria-selected="true">Please choose one</div></div></div><div className="choices__list choices__list--dropdown" aria-expanded="false"><div className="choices__list" role="listbox"><div id="choices--kz8z-item-choice-1" className="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Please choose one</div><div id="choices--kz8z-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="Bank of America" data-select-text="Press to select" data-choice-selectable="">Bank of America</div><div id="choices--kz8z-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="Bank of India" data-select-text="Press to select" data-choice-selectable="">Bank of India</div><div id="choices--kz8z-item-choice-4" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="Bank of London" data-select-text="Press to select" data-choice-selectable="">Bank of London</div></div></div></div>
												</div>

												{/* <!-- Button --> */}
												<div className="d-grid">
													<button className="btn btn-success mb-0">Pay $1800</button>
												</div>

											</form>
											{/* <!-- Form END --> */}
										</div>
									</div>
								</div>
								{/* <!-- Net banking END -->

								<!-- Paypal START --> */}
								<div className="accordion-item mb-3">
									<h6 className="accordion-header" id="heading-3">
										<button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
											<i className="bi bi-paypal text-primary me-2"></i><span className="me-5">Pay with Paypal</span>
										</button>
									</h6>
									<div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordioncircle">
										{/* <!-- Accordion body --> */}
										<div className="accordion-body">
											<div className="card card-body border align-items-center text-center mt-4">
												{/* <!-- Image --> */}
												<img src="assets/images/element/paypal.svg" className="h-70px mb-3" alt=""/>
												<p className="mb-3"><strong>Tips:</strong> Simply click on the payment button below to proceed to the PayPal payment page.</p>
												<a href="#" className="btn btn-sm btn-outline-primary mb-0">Pay with paypal</a>
											</div>
										</div>
									</div>
								</div>
								{/* <!-- Paypal END --> */}
							</div>
							{/* <!-- Accordion END --> */}
						</div>	
						{/* <!-- Card body END --> */}

						<div className="card-footer p-4 pt-0">
							{/* <!-- Condition link --> */}
							<p className="mb-0">By processing, You accept Booking <a href="#">Terms of Services</a> and <a href="#">Policy</a></p>
						</div>
					</div>
					{/* <!-- Payment Options END --> */}
				</div>	
			</div>
			{/* <!-- Left side content END -->

			<!-- Right side content START --> */}
			<aside className="col-xl-4">
				<div className="row g-4">

					{/* <!-- Price summary START --> */}
					<div className="col-md-6 col-xl-12">
						<div className="card shadow rounded-2">
							{/* <!-- card header --> */}
							<div className="card-header border-bottom">
								<h5 className="card-title mb-0">Price Summary</h5>
							</div>
	
							{/* <!-- Card body --> */}
							<div className="card-body">
								<ul className="list-group list-group-borderless">
									<li className="list-group-item d-flex justify-content-between align-items-center">
										<span className="h6 fw-light mb-0">Room Charges</span>
										<span className="fs-5">$28,660</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										<span className="h6 fw-light mb-0">Total Discount<span className="badge text-bg-danger smaller mb-0 ms-2">10% off</span></span>
										<span className="fs-5 text-success">-$2,560</span>	
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										<span className="h6 fw-light mb-0">Price after discount</span>
										<span className="fs-5">$1852</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										<span className="h6 fw-light mb-0">Taxes % Fees</span>
										<span className="fs-5">$350</span>
									</li>
								</ul>
							</div>
	
							{/* <!-- Card footer --> */}
							<div className="card-footer border-top">
								<div className="d-flex justify-content-between align-items-center">
									<span className="h5 mb-0">Payable Now</span>
									<span className="h5 mb-0">$22,500</span>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Price summary END --> */}

					{/* <!-- Offer and discount START --> */}
					<div className="col-md-6 col-xl-12">
						<div className="card shadow">
							{/* <!-- Card header --> */}
							<div className="card-header border-bottom">
								<div className="cardt-title">
									<h5 className="mb-0">Offer &amp; Discount</h5>
								</div>
							</div>
							{/* <!-- Card body --> */}
							<div className="card-body">

								{/* <!-- Radio --> */}
								<div className="bg-light rounded-2 p-3">
									<div className="form-check form-check-inline mb-0">
										<input className="form-check-input" type="radio" name="discountOptions" id="discount1" value="option1" checked=""/>
										<label className="form-check-label h5 mb-0" for="discount1">GSTBOOK</label>
										<p className="mb-1 small">Congratulations! You have saved $230 with GSTBOOK.</p>
										<h6 className="mb-0 text-success">-$230</h6>
									</div>
								</div>

								{/* <!-- Input group --> */}
								<div className="input-group mt-3">
									<input className="form-control form-control" placeholder="Coupon code"/>
									<button type="button" className="btn btn-primary">Apply</button>
								</div>
							</div>	
						</div>
					</div>
					{/* <!-- Offer and discount END -->

					<!-- Information START --> */}
					<div className="col-md-6 col-xl-12">
						<div className="card shadow">
							{/* <!-- Card header --> */}
							<div className="card-header border-bottom">
								<h5 className="card-title mb-0">Why Sign up or Log in</h5>
							</div>

							{/* <!-- Card body --> */}
							<div className="card-body">
								{/* <!-- List --> */}
								<ul className="list-group list-group-borderless">
									<li className="list-group-item d-flex mb-0"><i className="fa-solid fa-check text-success me-2"></i>
										<span className="h6 fw-normal">Get Access to Secret Deal</span>
									</li>

									<li className="list-group-item d-flex mb-0"><i className="fa-solid fa-check text-success me-2"></i>
										<span className="h6 fw-normal">Book Faster</span>
									</li>

									<li className="list-group-item d-flex mb-0"><i className="fa-solid fa-check text-success me-2"></i>
										<span className="h6 fw-normal">Manage Your Booking</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- Information END --> */}

				</div>
			</aside>
			{/* <!-- Right side content END --> */}
		</div> 
	</div>
</section>
    </>
)}