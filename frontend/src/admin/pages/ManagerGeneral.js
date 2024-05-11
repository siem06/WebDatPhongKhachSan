import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../layout/Header";
import Table from "../../components/Table";
import FormInformation from "../../components/Form";
import * as yup from "yup";
import {
  deleteBlog,
  getAboutus,
  getAllService,
  getBlogAllArticle,
  getBlogAllCate,
} from "../../service/api";
import Edit from "@mui/icons-material/Edit";
import Model from "../layout/Model";

export default function ManagerGeneral() {
  const [cateBlog, setCateBlog] = useState(null);
  const [aricleBlog, setArticleBlog] = useState(null);
  const [service, setService] = useState(null);
  const [aboutus, setAboutus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleEdit = (rowData) => {
    setIsModalOpen(true);
    console.log("Data của hàng được chọn:", rowData);
    // Thực hiện các hành động khác tùy thuộc vào dữ liệu của hàng được chọn
  };
  const handleDelete = async (rowData) => {
    try {
      await deleteBlog(rowData.id);
      alert("Đã xóa thành công!");
    } catch (error) {
      console.error("Lỗi khi xóa bài đăng:", error);
    }
  };

  useEffect(() => {
    async function getAll() {
      try {
        const data = await getBlogAllCate();
        const aricleBlog = await getBlogAllArticle();
        const serviceData = await getAllService();
        const aboutusData = await getAboutus();
        setCateBlog(data);
        setArticleBlog(aricleBlog);
        setService(serviceData);
        setAboutus(aboutusData);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    }

    getAll();
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

  const columns = [
    {
      name: "Tiêu đề",
      selector: (row) => row.topic,
      sortable: true,
    },
    // {
    //   name: "Danh mục",
    //   selector: (row) => row.topic,
    //   sortable: true,
    // },
    {
      key: "status",
      name: "Trạng thái",
      cell: (row) => (
        <span style={{ color: row.status === "1" ? "#2ea817" : "red" }}>
          {row.status === "1" ? "Đang hiển thị" : "Đang ẩn"}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <button
            className="btn w-30 text-capitalize d-flex justify-content-center "
            onClick={() => handleEdit(row)}
          >
            <Edit />
          </button>
          <button
            className="btn w-30 text-capitalize d-flex justify-content-center "
            onClick={() => handleDelete(row)}
          >
            <DeleteIcon />
          </button>
        </>
      ),
    },
  ];

  const columnService = [
    {
      name: "Dịch vụ",
      cell: (row) => row.typeService,
      sortable: true,
    },

    {
      name: "Trạng thái",
      cell: (row) => (row.status === 1 ? "Hiển thị" : "Ẩn"),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button className="btn w-30 text-capitalize d-flex justify-content-center">
          <Edit />
        </button>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <button className="btn w-30 text-capitalize d-flex justify-content-center">
          <DeleteIcon />
        </button>
      ),
    },
  ];

  // const [userData, setUserData] = useState({
  //   id: "1",
  //   slogan: "siem",
  //   content: "jdhiwj",
  //   img: "kk",
  // });
  const initialValues = {
    slogan1: aboutus ? aboutus.slogan1 : "",
    slogan2: aboutus ? aboutus.slogan2 : "",
    content: aboutus ? aboutus.content : "",
    img: aboutus ? aboutus.img : "",
  };
  console.log("s", initialValues);
  const schema = yup.object().shape({
    slogan: yup.string().required(),
    content: yup.string().required(),
    img: yup.string().required().oneOf([true], "terms must be accepted"),
  });
  const handleSubmit = (values) => {
    console.log(values); // Do something with form values
  };
  return (
    <main className="main-content position-relative border-radius-lg ">
      <Header pageCurrent="Quản lý chung" />

      <div className="container-fluid py-4">
        <div>
          {/* <!-- Tab items --> */}
          <div className="tabs">
            <div className="tab-item active">Quản lý Blog</div>
            <div className="tab-item">Quản lý dịch vụ</div>
            <div className="tab-item">Quản lý About us</div>
            <div className="line"></div>
          </div>

          <div className="tab-content">
            <div className="tab-pane active">
              <div className="table-scroll ">
                <div className="row">
                  <h4 className="bg-secondary p-3">
                    Danh sách bài đăng nổi bật
                  </h4>
                  {cateBlog && (
                    <Table columns={columns} data={cateBlog} type="1" />
                  )}
                </div>
              </div>
              <div className="table-scroll mt-4">
                <div className="row">
                  <h4 className="bg-secondary p-3"> Danh sách bài đăng mới</h4>
                  {aricleBlog && (
                    <Table columns={columns} data={aricleBlog} type="2" />
                  )}
                </div>
                {isModalOpen && <Model onClose={() => setIsModalOpen(false)} />}
              </div>
            </div>
            <div className="tab-pane">
              <div className="table-scroll ">
                <div className="row">
                  {service && <Table columns={columnService} data={service} />}
                </div>
              </div>
            </div>
            <div className="tab-pane">
              {/* <div className="table-scroll "> */}
              <div className="row">
                <h4 className="bg-secondary p-3">Thông tin Abouts us</h4>
                {aboutus !== null ? (
                  <FormInformation
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                  />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
