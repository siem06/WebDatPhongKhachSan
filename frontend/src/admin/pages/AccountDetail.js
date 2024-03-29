import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AccountDetail() {

    return (
      <div className="rounded bg-white mb-5">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">Edogaru</span>
              <span className="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
           
             
            </div>
          </div>
          <div className="col-md-8 border-right">
            <div className="p-3 py-5">
             
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels fw-bold text-dark ">Họ và tên</label>
                 <p className='fs-7 fw-bold text-dark ml-5'>Phan Thị Hồng Siêm</p>
                </div>
                <div className="col-md-6">
                  <label className="labels">Ngày Sinh</label>
                  <p className='ml-3'>Phan Thị Hồng Siêm</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Số điện thoại</label>
                  <p>Phan Thị Hồng Siêm</p>
                </div>
                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <p>Phan Thị Hồng Siêm</p>
                </div> 
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
  
