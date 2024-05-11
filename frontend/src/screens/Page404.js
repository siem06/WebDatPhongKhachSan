import React from "react";

export default function Page404() {
  //   const navigate = useNavigate();

  //   const throttledNavigate = useCallback(() => {
  //     navigate("/");
  //   }, [navigate]);

  //   useEffect(() => {
  //     const timer = setTimeout(throttledNavigate); // Throttle navigation to once per second
  //     return () => clearTimeout(timer);
  //   }, [throttledNavigate]);

  return (
    <div className="d-flex justify-content-center align-items-center m-10">
      <div className="col-md-12 text-center justify-content-center align-items-center">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        {/* <p onClick={throttledNavigate}>Trang chủ</p> */}
      </div>
    </div>
  );
}
