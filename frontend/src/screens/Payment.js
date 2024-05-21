import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
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

// import { padding } from "@mui/system";
import { Box, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { getAllImage, getRoomsById, postBooking } from "../service/api";
export default function Payment() {
	const [currentTab, setCurrentTab] = useState(1);
	const [selectedTab, setSelectedTab] = useState(0);
	const loggedInUser = JSON.parse(localStorage.getItem("user"));
	// lay id room va id account
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const roomId = searchParams.get('roomId');
	const accountId = searchParams.get('accountId');
	const [note, setNote] = useState('');
	//   load room
	const [roomDetails, setRoomDetails] = useState(null);
	const [roomImages, setRoomImages] = useState([]);
	useEffect(() => {
		const fetchRoomData = async () => {
			try {
				const roomData = await getRoomsById(roomId);
				const imagesData = await getAllImage(roomId);
				// Tạo object chứa ảnh của phòng
				const imagesObj = {};
				imagesObj[roomId] = imagesData[0]; //
				setRoomDetails(roomData);
				console.log("ok", roomData)
				setRoomImages(imagesObj);
				console.log("hi", imagesData)
			} catch (error) {
				console.error('Failed to fetch room data', error);
			}
		};

		fetchRoomData();
	}, [roomId]);
	const getTypeRoomLabel = (typeRoom) => {
		switch (typeRoom) {
			case 1:
				return "Phòng Tiêu chuẩn";
			case 2:
				return "Phòng Cao cấp";
			case 3:
				return "Phòng Đặc biệt";
			case 4:
				return "Phòng Tổng thống";
			default:
				return "Không xác định";
		}
	};
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
	// State cho số lượng phòng
	const [roomCount, setRoomCount] = useState(1);

	// Hàm tăng số lượng phòng
	const increaseRoomCount = () => {
		setRoomCount(roomCount + 1);
	};

	// Hàm giảm số lượng phòng
	const decreaseRoomCount = () => {
		if (roomCount > 1) {
			setRoomCount(roomCount - 1);
		}
	};
	// Ngày nhận trả phòng
	const [checkInDate, setCheckInDate] = useState(dayjs());
	const [checkOutDate, setCheckOutDate] = useState(dayjs());
	const [daysDiff, setDaysDiff] = useState(0);
	const handleDateChange = (newValue) => {
		const startDate = dayjs(checkInDate).startOf('day');
		// const endDate = dayjs(checkOutDate);
		const endDate = dayjs(newValue).startOf('day');
		const diff = endDate.diff(startDate, 'day');
		setDaysDiff(diff); // Cập nhật giá trị daysDiff
		setCheckOutDate(newValue); // Cập nhật ngày trả phòng
		// Sử dụng daysDiff để làm gì đó...
	};
	// load user
	//  tong gia
	const totalPrice = roomDetails && roomDetails.price ? roomDetails.price * daysDiff * roomCount : 'Loading...';
	// submit db booking
	const saveBookingToDatabase = async () => {
		const bookingData = {
			idAccount: accountId,
			idRoom: roomId,
			totalPrice: totalPrice,
			totalRoom: roomCount,
			totalDate: daysDiff,
			checkinDate: checkInDate,
			checkoutDate: checkOutDate,
			statusBooking: 0,
			note: note
		};
		try {
			const response = await postBooking(bookingData);
			alert('Đặt phòng thành công');
		} catch (error) {
			console.error('Có lỗi xảy ra khi đặt phòng:', error);
			alert('Đặt phòng thất bại');
		}
	};
	const handleButtonClick = () => {
		goToNextTab();
		saveBookingToDatabase();
	};
	const [bookingSuccess, setBookingSuccess] = useState(false);
	const handleStepChange = (step) => {
		setCurrentTab(step);
		setBookingSuccess(false); // Reset booking success status when changing steps
	};

	const handleNextStep = () => {
		if (currentTab < 3) {
			setCurrentTab(currentTab + 1);
			if (currentTab + 1 === 3) {
				setBookingSuccess(true);
			}
		}
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
							<div className="col-md-5 mt-30">
								
								<h2 className="text-18 fw-500 mt-40 md:mt-24 text-dark text-uppercase font-weight-bold ">Thông tin chi tiết của bạn</h2>
								<div className="row x-gap-20 y-gap-20 pt-20">
									<div className="col-12">
										<div className="form-input ">
											<label className="lh-1 text-16 text-light-1">Họ và tên <span style={{ color: 'red' }}>*</span></label>
											<input className="lh-1 text-16 text-light-1 text-dark" required="" type="text" value={loggedInUser.user.useName} />

										</div>
									</div>
									<div className="col-md-6">
										<div className="form-input ">
											<label className="lh-1 text-16 text-light-1">Email <span style={{ color: 'red' }}>*</span></label>
											<input className="lh-1 text-16 text-light-1 text-dark" required="" type="text" value={loggedInUser.user.email} placeholder="info@gmail.com" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-input ">
											<label className="lh-1 text-16 text-light-1">Số điện thoại <span style={{ color: 'red' }}>*</span></label>
											<input className="lh-1 text-16 text-light-1 text-dark" required="" type="text" value={loggedInUser.user.phone} placeholder="Số điện thoại" />
										</div>
									</div>

									<div className="col-12">
										<div className="form-group">
											<label className="lh-1 text-16 text-light-1">Yêu cầu đặc biệt</label>
											<textarea className="form-control"
												name="message" id="message" rows="6"
												value={note}
												onChange={(e) => setNote(e.target.value)}
												placeholder="Cho một phòng ........"
												_mstplaceholder="2885870" _msthash="258"
												style={{
													width: '100%',
													border: '1px solid #ccc',
													resize: 'vertical'
												}}
											>
											</textarea>
										</div>
									</div>
									<div className="col-12 mt-2">
										<div className="row y-gap-20 items-center justify-between">
											<div className="col-auto">
												<div className="text-14 text-light-1 text-dark">Bằng cách tiến hành đặt phòng này, tôi đồng ý với <a className="text-blue-1 fw-500" href="/register">Tôi đồng ý với Điều khoản sử dụng và Chính sách quyền riêng tư của Luxurious</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-7 mt-30">
								<div className="booking-sidebar">
									<div className="px-30 py-30 border-light rounded-4">
										<div className="text-18 fw-500 mb-30 text-dark text-uppercase font-weight-bold">Chi tiết đặt phòng của bạn</div>
										<div className="row x-gap-15 y-gap-20">
											<div className="col-auto">
												<img alt={`Room ${roomId}`} loading="lazy"

													decoding="async"
													data-nimg="1"
													className="size-140 rounded-4 object-cover"
													src={roomImages && roomImages[roomId] ? roomImages[roomId].img : ""}
													style={{ color: 'transparent', width: '220px', height: '140px' }} />
											</div>
											<div className="col">
												<div className="d-flex x-gap-5 ">
													{[...Array(5)].map((_, index) => (
														<i key={index} className="fa fa-star text-warning text-10"></i>
													))}
												</div>
												<div className=" y-gap-20 justify-between mt-3">
													<div className=" col-auto lh-17 fw-500 font-weight-bold text-dark ">{getTypeRoomLabel(roomDetails && roomDetails.typeRoom) || 'Loading...'}</div>
													<div className=" col-auto text-14 lh-15 font-weight-bold text-dark  ">{roomDetails && roomDetails.price || 'Loading...'}/ ngày</div>
												</div>
												<div className=" y-gap-20 justify-between mt-2">
													<div className="col-auto"><div className="d-flex items-center">
														<div className="size-30 flex-center bg-blue-1 rounded-4">
															<div className="text-12 fw-600 text-dark">4.8</div>
														</div>
														<div className="fa fa-star text-warning text-10"></div>
													</div>
													</div>
													<div className="col-auto">
														<div className="text-14 text-dark">3,014 đánh giá</div>
													</div>
												</div>

												<div className="y-gap-20 justify-between mt-3 ">
													<div className=" col-auto fw-500  text-dark">Số lượng phòng: </div>
													<div className=" col-auto d-flex align-items-center mb-4">
														<button
															className="btn btn-sm button_hover  btn-primary rounded px-3 me-2"
															onClick={decreaseRoomCount}
															disabled={roomCount === 1}
														>
															-
														</button>
														<div className="form-outline">
															<input className="form-input lh-1 text-light-1 " value={roomCount} style={{ width: '50px', justifyContent: 'center' }} />
														</div>
														<button
															className="btn btn-sm button_hover  btn-primary rounded px-3 ms-2"
															onClick={increaseRoomCount}
														>
															+
														</button>
													</div>
												</div>
											</div>
										</div>
										<div className="border-top-light  mb-20">
										</div>
										<div className=" y-gap-20 justify-between">
											<div className="col-auto">
												<div className="text-15 text-dark">Nhận phòng</div>
												{/* <div className="fw-500 font-weight-bold text-dark">Chủ nhật, 26/5/2022</div> */}
												{/* <div className="text-15 text-light-1 text-dark">15:00 – 23:00</div> */}
												<Box style={{ padding: '5px' }}>
													<LocalizationProvider dateAdapter={AdapterDayjs}>
														<DatePicker
															label="Chọn ngày nhận phòng"
															value={checkInDate}
															onChange={(newValue) => setCheckInDate(newValue)}
															minDate={dayjs().startOf('day')} // Chỉ cho phép chọn từ ngày hiện tại
															renderInput={(params) => <TextField {...params} />}
														/>
													</LocalizationProvider>
												</Box>

											</div>
											<div className="col-auto md:d-none">
												<div className="h-full w-1 bg-border">
												</div>
											</div>
											<div className="col-auto text-right md:text-left">
												<div className="text-15 text-dark">Trả phòng</div>
												{/* <div className="fw-500 font-weight-bold text-dark">Thứ 2, 27/5/2024</div> */}
												{/* <div className="text-15 text-light-1 text-dark">01:00 – 11:00</div> */}
												<Box style={{ padding: '5px' }}>
													<LocalizationProvider dateAdapter={AdapterDayjs}>
														<DatePicker
															label="Chọn ngày trả phòng"
															// value={checkOutDate}
															// onChange={(newValue) => setCheckInDate(newValue)}
															// renderInput={(params) => <TextField {...params} />}
															onChange={(newValue) => {
																setCheckOutDate(newValue);
																handleDateChange(newValue);
															}}
															minDate={dayjs(checkInDate).add(1, 'day')} // Chỉ cho phép chọn từ ngày sau ngày nhận phòng
															renderInput={(params) => <TextField {...params} />}
														/>
													</LocalizationProvider>
												</Box>
											</div>
										</div>
										<div className="border-top-light mt-30 mb-20"></div>
										<div className="row y-gap-20 justify-between items-center" >
											<div className="col-auto text-15 text-dark">Tổng thời gian lưu trú:</div>
											<div className="col-auto fw-500 font-weight-bold text-dark"> {daysDiff} ngày</div>
											{/* <a href="/room" className="text-15 text-blue-1 underline ">Bạn đặt phòng khác?</a> */}
										</div>
										<div className="border-top-light mt-30 mb-20"></div>
										<div className="row y-gap-20 justify-between items-center">
											<div className="col-auto">
												<div className="text-15 text-dark">Bạn đã chọn:</div>
												<div className="text-15 text-dark">Tổng giá phòng</div>

											</div>

											<div className="col-auto">

												<div className="text-15 font-weight-bold text-dark">{roomCount} phòng</div>
												<div className="fw-500 font-weight-bold text-dark">{totalPrice}</div>
											</div>
										</div>
										<a href="/room" className="text-15 text-blue-1 underline">Bạn muốn thay đổi lựa chọn</a>
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
					<div className="row justify-content-center mx-auto mt-4 mb-4">
						<div className="col-auto">
							<button className="button h-60 px-24 blue-1 bg-light-1" disabled={currentTab === 1} onClick={goToPreviousTab}>Trước</button>
						</div>
						<div className="col-auto">
							<button className="button h-60 px-24 blue-1 bg-light-1" disabled={currentTab === 3} onClick={handleButtonClick}>Sau
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