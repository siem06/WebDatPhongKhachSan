import React from "react";

// Hàm chuyển đổi typeService thành icon tương ứng
function getTypeIcon(typeService) {
  switch (typeService) {
    case "Nhà hàng":
      return "lnr lnr-dinner";
    case "Câu lạc bộ thể thao":
      return "lnr lnr-bicycle";
    case "Hồ bơi":
      return "lnr lnr-shirt";
    case "Double Deluxe Room":
      return "lnr lnr-apartment";
    case "Bar":
      return "lnr lnr-construction";
    case "Gymnesium":
      return "lnr lnr-heart-pulse";
    default:
      return "";
  }
}

export default function FacilitieItem({ data }) {
  if (!data) return null;

  return (
    <div className="row mb_30">
      {data.map((facilitie, index) => (
        <div key={facilitie.id} className="col-lg-4 col-md-6">
          <div className="facilities_item">
            <h4 className="sec_h4">
              <i className={getTypeIcon(facilitie.typeService)}></i>
              {facilitie.typeService}
            </h4>
            <p>{facilitie.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
