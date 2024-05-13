import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/style.css";
import "../assets/css/room.css";
import "../assets/css/style.css.map";
import "../assets/css/responsive.css";
import imgs from "../assets/image";
import { Link } from "react-router-dom";
export default function Payment() {
	const [currentTab, setCurrentTab] = useState(1);
	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabClick = (index) => {
		setSelectedTab(index);
	};
	// Hàm để xử lý khi người dùng chuyển tab
	const handleTabChange = (tab) => {
		setCurrentTab(tab);
	};

	// Hàm để chuyển tab sang trang trước
	const goToPreviousTab = () => {
		if (currentTab > 1) {
			setCurrentTab(currentTab - 1);
		}
	};

	// Hàm để chuyển tab sang trang sau
	const goToNextTab = () => {
		if (currentTab < 3) {
			setCurrentTab(currentTab + 1);
		}
	};

	// Hàm để kiểm tra xem tab hiện tại có phải là tab được chọn không
	const isActiveTab = (tab) => {
		return tab === currentTab;
	};
	return (
		<>
			{/* // <!--================Breadcrumb Area =================--> */}
			<section className="breadcrumb_area">
				<div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background="">
				</div>
				<div className="container">
					<div className="page-cover text-center">
						<h2 className="page-cover-tittle">Phòng</h2>
						<ol className="breadcrumb">
							<li><a href="/home">Trang chủ</a></li>
							<li className="active">Phòng</li>
						</ol>
					</div>
				</div>
			</section>
			{/* // <!--================Breadcrumb Area =================-->*/}
			<section className="pt-40 layout-pb-md mt-5">
				<div className="container">
					<div className="row x-gap-40 y-gap-30 items-center">
						<div className="col-auto">
							<div
								className={`size-60 rounded-full flex-center cursor-pointer transition ${isActiveTab(1) ? 'bg-blue-1' : 'bg-light-2'
									}`}
								onClick={() => handleTabChange(1)}
							>
								{isActiveTab(1) && (
									<i className="fa fa-check-circle text-28 text-white" aria-hidden="true"></i>
								)}
								<span className={isActiveTab(1) ? 'text-white' : 'text-blue-1'}>1</span>
							</div>
							<div className="text-18 fw-500 ml-10 text-dark">Chi tiết thông tin</div>
						</div>

						<div className="col d-none d-sm-block ">
							<div className="w-full h-1 bg-border bg-opacity-25">
							</div>
						</div>
						<div className="col-auto">
							<div
								className={`size-60 rounded-full flex-center cursor-pointer transition ${isActiveTab(2) ? 'bg-blue-1' : 'bg-light-2'
									}`}
								onClick={() => handleTabChange(2)}
							>
								{isActiveTab(2) && (
									<i className="fa fa-check-circle text-28 text-white" aria-hidden="true"></i>
								)}
								<span className={isActiveTab(2) ? 'text-white' : 'text-blue-1'}>2</span>
							</div>
							<div className="text-18 fw-500 ml-10 text-dark">Thanh toán</div>
						</div>
						<div className="col d-none d-sm-block">
							<div className="w-full h-1 bg-border">
							</div></div>
						<div className="col-auto">
							<div
								className={`size-60 rounded-full flex-center cursor-pointer transition ${isActiveTab(3) ? 'bg-blue-1' : 'bg-light-2'
									}`}
								onClick={() => handleTabChange(3)}
							>
								{isActiveTab(3) && (
									<i className="fa fa-check-circle text-28 text-white" aria-hidden="true"></i>
								)}
								<span className={isActiveTab(3) ? 'text-white' : 'text-blue-1'}>3</span>
							</div>
							<div className="text-18 fw-500 ml-10 text-dark">Xác nhận</div>
						</div>
					</div>
					{currentTab === 1 && (
						<div className="row">
							<div className="col-xl-7 col-lg-8 mt-30">
								<div className="py-15 px-20 rounded-4 text-15 text-dark">Đăng nhập để đặt phòng với các chi tiết đã lưu của bạn hoặc <a className="text-blue-1 fw-500" href="/register">đăng ký</a> để quản lý đặt chỗ của bạn khi đang di chuyển!</div>
								<h2 className="text-22 fw-500 mt-40 md:mt-24 text-dark">Nhập thông tin chi tiết của bạn</h2>
								<div className="row x-gap-20 y-gap-20 pt-20">
									<div className="col-12">
										<div className="form-input ">
											<input className="lh-1 text-16 text-light-1 text-dark" required="" type="text" placeholder="Họ và tên" />

										</div>
									</div>
									<div className="col-md-6">
										<div className="form-input ">
											<input className="lh-1 text-16 text-light-1 text-dark" required="" type="text" placeholder="Email" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-input ">
											<input className="lh-1 text-16 text-light-1 text-dark" required="" type="text" placeholder="Số điện thoại" />
										</div>
									</div>
									<div className="col-12">
										<div className="form-input ">
											<input className="lh-1 text-16 text-light-1 text-dark" required="" type="text" placeholder="Địa chỉ" />
										</div>
									</div>

									<div className="col-md-6"><div className="form-input ">
										<input className="lh-1 text-16 text-light-1 text-dark" required="" type="text" placeholder="Khu vực/ Tỉnh/ Thành phố" />
									</div>
									</div>
									<div className="col-md-6"><div className="form-input ">
										<input className="lh-1 text-16 text-light-1 text-dark" required="" type="text" placeholder="Mã bưu điện" />
									</div>
									</div>
									<div className="col-12">
										<div className="form-group">
											<textarea className="form-control" name="message" id="message" rows="1" placeholder="Yêu cầu đặc biệt" _mstplaceholder="2885870" _msthash="258"></textarea></div>
									</div>
									<div className="col-12">
										<div className="row y-gap-20 items-center justify-between">
											<div className="col-auto">
												<div className="text-14 text-light-1 text-dark">Bằng cách tiến hành đặt phòng này, tôi đồng ý với <a className="text-blue-1 fw-500" href="/register">Tôi đồng ý với Điều khoản sử dụng và Chính sách quyền riêng tư của Luxurious</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-5 col-lg-4 mt-30">
								<div className="booking-sidebar">
									<div className="px-30 py-30 border-light rounded-4">
										<div className="text-18 fw-500 mb-30 text-dark text-uppercase font-weight-bold">Chi tiết đặt phòng của bạn</div>
										<div className="row x-gap-15 y-gap-20">
											<div className="col-auto">
												<img alt="image" loading="lazy"

													decoding="async"
													data-nimg="1"
													className="size-140 rounded-4 object-cover"
													src="img/room-1.jpg" style={{ color: 'transparent', width: '140px', height: '140px' }} />
											</div>
											<div className="col">
												<div className="d-flex x-gap-5 ">
													<i className="fa fa-star text-warning text-10"></i>
													<i className="fa fa-star text-warning text-10"></i>
													<i className="fa fa-star text-warning text-10"></i>
													<i className="fa fa-star text-warning text-10"></i>
													<i className="fa fa-star text-warning text-10"></i>
												</div>
												<div className="lh-17 fw-500 text-uppercase text-dark">Phòng tổng thống</div>
												<div className="text-14 lh-15  ">200000000/đêm</div>
												<div className="row x-gap-10 y-gap-10 items-center">
													<div className="col-auto"><div className="d-flex items-center">
														<div className="size-30 flex-center bg-blue-1 rounded-4">
															<div className="text-12 fw-600 text-dark">4.8</div>
														</div>
														<div className="text-14 fw-500 ml-10 text-dark">Exceptional</div>
													</div>
													</div>
													<div className="col-auto">
														<div className="text-14 text-dark">3,014 reviews</div>
													</div>
												</div>
											</div>
										</div>
										<div className="border-top-light mt-30 mb-20">
										</div>
										<div className="row y-gap-20 justify-between">
											<div className="col-auto">
												<div className="text-15 text-dark">Nhận phòng</div>
												<div className="fw-500 font-weight-bold text-dark">Chủ nhật, 26/5/2022</div>
												{/* <div className="text-15 text-light-1 text-dark">15:00 – 23:00</div> */}
											</div>
											<div className="col-auto md:d-none">
												<div className="h-full w-1 bg-border">
												</div>
											</div>
											<div className="col-auto text-right md:text-left">
												<div className="text-15 text-dark">Trả phòng</div>
												<div className="fw-500 font-weight-bold text-dark">Thứ 2, 27/5/2024</div>
												{/* <div className="text-15 text-light-1 text-dark">01:00 – 11:00</div> */}
											</div>
										</div>
										<div className="border-top-light mt-30 mb-20"></div>
										<div>
											<div className="text-15 text-dark">Tổng thời gian lưu trú:</div>
											<div className="fw-500 font-weight-bold text-dark">1 đêm</div>
											{/* <a href="/room" className="text-15 text-blue-1 underline ">Bạn đặt phòng khác?</a> */}
										</div>
										<div className="border-top-light mt-30 mb-20"></div>
										<div className="row y-gap-20 justify-between items-center">
											<div className="col-auto">
												<div className="text-15 text-dark">Bạn đã chọn:</div>
												<div className="fw-500 font-weight-bold text-dark">Phòng tổng thống</div>
												<a href="/room" className="text-15 text-blue-1 underline">Bạn muốn thay đổi lựa chọn</a>
											</div>
											<div className="col-auto">
												<div className="text-15 text-dark">1 phòng</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
					{currentTab === 2 && (
						<div className="row">
							<div className="col-xl-7 col-lg-8">

								<div className="mt-40">
									<h3 className="text-22 fw-500 mb-20 text-dark">Phương thức thanh toán kỹ thuật số</h3>
									<div className="react-tabs" data-rttabs="true">
										
										<div className="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="panel:r0:0" aria-labelledby="tab:r0:0">
											<div className="row x-gap-20 y-gap-20 pt-20"><div className="col-12"><div className="form-input ">
											<label className="lh-1 text-16 text-light-1">Chọn phương thức thanh toán *</label>
												<input required="" type="text" />
											</div>
											</div>
												<div className="col-md-6">
													<div className="form-input ">
													<label className="lh-1 text-16 text-light-1">Tên chủ thẻ *</label>
														<input required="" type="text" />
														
													</div>
													<div className="form-input mt-20">
													<label className="lh-1 text-16 text-light-1">Số thẻ tín dụng/ thẻ ghi nợ *</label>
														<input required="" type="text" />
														
													</div>
													<div className="row x-gap-20 y-gap-20 pt-20">
														<div className="col-md-6">
															<div className="form-input ">
															<label className="lh-1 text-16 text-light-1">Ngày hết hạn *</label>
																<input required="" type="text" />
																
															</div>
														</div>
														<div className="col-md-6"><div className="form-input ">
														<label className="lh-1 text-16 text-light-1">CVC/CVV *</label>
															<input required="" type="text" />
															
														</div>
														</div>
													</div>
												</div>
												<div className="col-md-6">
													<img src="img/image.png" alt="image" style={{ color: 'transparent', width: '320px', height: '210px' }} />
												</div>
											</div>
										</div>
										<div className="react-tabs__tab-panel" role="tabpanel" id="panel:r0:1" aria-labelledby="tab:r0:1">
										</div>
									</div>
								</div>
								<div className="w-full h-1 bg-border mt-40 mb-40">
								</div>
								
							</div>
							<div className="col-xl-5 col-lg-4">
								<div className="booking-sidebar">
									<div className="px-30 py-30 border-light rounded-4 mt-30">
										<div className="text-18 fw-500 mb-20 text-uppercase font-weight-bold text-dark ">Tổng thanh toán</div>
										<div className="row y-gap-5 justify-between">
											<div className="col-auto">
												<div className="text-15 font-weight-bold text-dark">Số lượng phòng</div>
											</div>
											<div className="col-auto">
												<div className="text-15">1</div>
											</div>
										</div>
										<div className="row y-gap-5 justify-between pt-5">
											<div className="col-auto">
												<div className="text-15 font-weight-bold text-dark">Phòng tổng thống</div>
											</div>
											<div className="col-auto">
												<div className="text-15">20000000</div>
											</div>
										</div>
										<div className="row y-gap-5 justify-between pt-5">
											<div className="col-auto">
												<div className="text-15 font-weight-bold text-dark">Thuế và phí</div>
											</div>
											<div className="col-auto">
												<div className="text-15">1000000</div>
											</div>
										</div>
										<div className="row y-gap-5 justify-between pt-5">
											<div className="col-auto">
												<div className="text-15 font-weight-bold text-dark">Phí giữ phòng</div>
											</div>
											<div className="col-auto">
												<div className="text-15">Miễn phí</div>
											</div>
										</div>
										<div className="px-20 py-20 bg-blue-2 rounded-4 pt-5 mt-20">
											<div className="row y-gap-5 justify-between">
												<div className="col-auto">
													<div className="text-18 lh-13 fw-500 text-uppercase font-weight-bold text-dark">Giá</div>
												</div>
												<div className="col-auto">
													<div className="text-18 lh-13 fw-500">21000000</div>
												</div>
											</div>
										</div>
									</div>
									<div className="px-30 py-30 border-light rounded-4 mt-30">
										<div className="text-20 fw-500 mb-20 text-dark">Lịch thanh toán </div>
										<div className="row y-gap-5 justify-between">
											<div className="col-auto">
												<div className="text-15">Trước khi bạn ở lại, bạn sẽ trả tiền</div>
											</div>
											<div className="col-auto"><div className="text-15">2000000</div>
											</div>
										</div>
									</div>
									<div className="px-30 py-30 border-light rounded-4 mt-30">
										<div className="text-20 fw-500 mb-15">Bạn có mã khuyến mãi không?</div>
										<div className="form-input ">
											<input required="" type="text" />
											<label className="lh-1 text-16 text-light-1">Nhập mã khuyến mãi</label>
										</div>
										<button className="button -outline-blue-1 text-blue-1 px-30 py-15 mt-20">Áp dụng</button>
									</div>
								</div>
							</div>
						</div>
					)}
					{currentTab === 3 && (
						<div className="container">
							<div className="col-xl-8 col-lg-8 mx-auto">
								<div className="order-completed-wrapper">
									<div className="d-flex flex-column items-center mt-40 lg:md-40 sm:mt-24">
										<div className="size-80 flex-center rounded-full bg-dark-3 mt-4">
											<i className="fa fa-check-circle fa-8x text-success "></i>
										</div>
										<div className="text-30 lh-1 fw-600 font-weight-bold text-dark  mx-auto mt-2">Hệ thống, đơn đặt phòng của bạn đã được gửi thành công!</div>
										<div className="text-15 text-light-1  mx-auto">Booking details has been sent to: admin@bookingcore.test</div>
									</div>
									<div className="border-type-1 rounded-8 px-50 py-35 mt-2">
										<div className="row">
											<div className="row  y-gap-5 justify-between">
												<div className=" col-auto text-15 lh-12 font-weight-bold text-dark ">Số đơn đặt hàng</div>
												<div className=" col-auto text-15 lh-12 fw-500 blue-1 ">13119</div>
											</div>
											<div className="row  y-gap-5 justify-between">
												<div className="col-auto text-15 lh-12 font-weight-bold text-dark">Ngày</div>
												<div className="col-auto text-15 lh-12 fw-500 blue-1 ">27/07/2021</div>
											</div>
											<div className="row  y-gap-5 justify-between">
												<div className="col-auto text-15 lh-12 font-weight-bold text-dark">Tất cả</div>
												<div className="col-auto text-15 lh-12 fw-500 blue-1">21000000</div>
											</div>
											<div className="row  y-gap-5 justify-between">
												<div className="col-auto text-15 lh-12 font-weight-bold text-dark">Phương thức thanh toán</div>
												<div className="col-auto text-15 lh-12 fw-500 blue-1">Chuyển khoản</div>
											</div>
										</div>
									</div>
									<div className="border-type-1 rounded-8 px-50 py-35 mt-2">
										<h4 className="text-20 fw-500 mb-30 font-weight-bold text-dark">Thông tin của bạn</h4>
										<div className="row y-gap-10">
											<div className="col-12">
												<div className="d-flex justify-between ">
													<div className="text-15 lh-16 font-weight-bold text-dark">Tên</div>
													<div className="text-15 lh-16 fw-500 blue-1">System</div>
												</div>
											</div>
											<div className="col-12">
												<div className="d-flex justify-between ">
													<div className="text-15 lh-16 font-weight-bold text-dark">Họ</div>
													<div className="text-15 lh-16 fw-500 blue-1">Admin</div>
												</div>
											</div>
											<div className="col-12">
												<div className="d-flex justify-between ">
													<div className="text-15 lh-16 font-weight-bold text-dark">Email</div>
													<div className="text-15 lh-16 fw-500 blue-1">admin@bookingcore.test</div>
												</div>
											</div>
											<div className="col-12">
												<div className="d-flex justify-between ">
													<div className="text-15 lh-16 font-weight-bold text-dark">Số điện thoại</div>
													<div className="text-15 lh-16 fw-500 blue-1">112 666 888</div>
												</div>
											</div>
											<div className="col-12">
												<div className="d-flex justify-between ">
													<div className="text-15 lh-16 font-weight-bold text-dark">Địa chỉ</div>
													<div className="text-15 lh-16 fw-500 blue-1">Thủ Đức</div>
												</div>
											</div>
											
											<div className="col-12">
												<div className="d-flex justify-between ">
													<div className="text-15 lh-16 font-weight-bold text-dark">Thành phố</div>
													<div className="text-15 lh-16 fw-500 blue-1">HCM</div>
												</div>
											</div>
											
											<div className="col-12">
												<div className="d-flex justify-between ">
													<div className="text-15 lh-16 font-weight-bold text-dark">Mã bưu điện</div>
													<div className="text-15 lh-16 fw-500 blue-1">7100</div>
												</div>
											</div>
											<div className="col-12">
												<div className="d-flex justify-between ">
													<div className="text-15 lh-16 font-weight-bold text-dark">Quốc gia</div>
													<div className="text-15 lh-16 fw-500 blue-1">Việt Nam</div>
												</div>
											</div>
											<div className="col-12">
												<div className="d-flex justify-between ">
													<div className="text-15 lh-16 font-weight-bold text-dark">Yêu cầu đặc biệt</div>
													<div className="text-15 lh-16 fw-500 blue-1">Phòng vui</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
					<div className="row justify-content-center mx-auto">
						<div className="col-auto">
							<button className="button h-60 px-24 -blue-1 bg-light-2" disabled={currentTab === 1} onClick={goToPreviousTab}>Trước</button>
						</div>
						<div className="col-auto">
							<button className="button h-60 px-24 --blue-1 bg-light-2" disabled={currentTab === 3} onClick={goToNextTab}>Sau
								<div className="fa fa-arrow-right ml-15">
								</div>
							</button>
						</div>
					</div>
				</div>
			</section >
		</>
	)
}