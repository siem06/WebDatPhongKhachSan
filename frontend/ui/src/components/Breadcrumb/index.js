import React from 'react'
import { NavLink } from "react-router-dom";

export default function Breadcrumb({currently,classNameImg}) {
  return (
    <section className={`breadcrumb_area  ${classNameImg}`}>
            <div className={`overlay bg-parallax`} data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div className="container">
                <div className="page-cover text-center">
                    <h2 className="page-cover-tittle">{currently}</h2>
                    <ol className="breadcrumb justify-content-center">
                   
                        <li> <NavLink className="nav-link font-size-16" to="/">Trang chủ</NavLink></li>
                        <li className="active">{currently}</li>   
                    </ol>
                </div>
            </div>
        </section>
  )
}
