import React from 'react'

export default function FacilitieItem({data}) {
  
  return (
    <div className="row mb_30">
            {data.map((facilitie, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="facilities_item">
                  <h4 className="sec_h4">
                    <i className={facilitie.icon}></i>
                    {facilitie.name}
                  </h4>
                  <p>{facilitie.description}</p>
                </div>
              </div>
            ))}
          </div>
  )
}
