import React, { useEffect } from "react";
import Header from "../layout/Header";
export default function ManagerGeneral() {
  useEffect(() => {
    const tabs = document.querySelectorAll(".tab-item");
    const panes = document.querySelectorAll(".tab-pane");

    const tabActive = document.querySelector(".tab-item.active");
    const line = document.querySelector(".tabs .line");

    if (line && tabActive) {
      line.style.left = tabActive.offsetLeft + "px";
      line.style.width = tabActive.offsetWidth + "px";
    }

    tabs.forEach((tab, index) => {
      const pane = panes[index];

      tab.onclick = function () {
        document.querySelector(".tab-item.active").classList.remove("active");
        document.querySelector(".tab-pane.active").classList.remove("active");

        if (line) {
          line.style.left = this.offsetLeft + "px";
          line.style.width = this.offsetWidth + "px";
        }

        this.classList.add("active");
        pane.classList.add("active");
      };
    });
  }, []);

  return (
    <main className="main-content position-relative border-radius-lg ">
    
    <Header pageCurrent="Quản lý phòng"/>
    
    <div className="container-fluid py-4">
    <div>
      {/* <!-- Tab items --> */}
      <div className="tabs">
        <div className="tab-item active">
          Quản lý Blog
        </div>
        <div className="tab-item">
          Quản lý dịch vụ
        </div>
        <div className="tab-item">
          Quản lý About us
        </div>
      
        <div className="line"></div>
      </div>

      {/* <!-- Tab content --> */}
      <div className="tab-content">
        <div className="tab-pane active">
          <div className="row">
            <div className="col-md-9">
              
            </div>
            <div className="col-md-3">
             
            </div>
          </div>
          <div className="table-scroll ">
            
            
          </div>
        </div>
        <div className="tab-pane">
          <div className="table-scroll ">
           
          </div>
        </div>
        <div className="tab-pane">
          <div className="table-scroll ">
           
          </div>
        </div>
        <div className="tab-pane">
          <div className="table-scroll ">
          
          </div>
        </div>
      </div>
      </div> </div>
      </main>
  );
}
