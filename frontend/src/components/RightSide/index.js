import React from 'react';

const Sidebar = () => {
    return (
        <aside className="col-xl-4 order-xl-2">
            <div data-sticky="" data-margin-top="100" data-sticky-for="1199" style={{
                position: 'fixed',
                width: '435px',
                left: '980px',
                zIndex: 1000
            }}>
                {/* <!-- Book now START --> */}

               
                
                {/* <!-- Book now END --> */}
                {/* <!-- Best deal START --> */}
                <div className="mt-4 d-none d-xl-block">
                    <h4>Today's Best Deal</h4>
                    <div className="card shadow rounded-3 overflow-hidden">
                        <div className="row g-0 align-items-center">
                            {/* <!-- Image --> */}
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <img src="https://booking.webestica.com/assets/images/offer/04.jpg" className="card-img rounded-0" alt="" />
                            </div>
                            {/* <!-- Title and content --> */}
                            <div className="col-sm-6 col-md-12 col-lg-6">
                                <div className="card-body p-3">
                                    <h6 className="card-title"><a href="offer-detail.html" className="stretched-link">Travel Plan</a></h6>
                                    <p className="mb-0">Get up to $10,000 for lifetime limits</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Best deal END --> */}
            </div>
        </aside>
    );
}

export default Sidebar;
