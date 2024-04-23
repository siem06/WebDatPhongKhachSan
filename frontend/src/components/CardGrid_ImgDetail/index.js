import React from 'react';

const CardGrid = () => {
    return (
        <section className="card-grid pt-0">
            <div className="container">
                <div className="row g-2">
                    {/* Image */}
                    <div className="col-md-6">
                        <a data-glightbox="" data-gallery="gallery" href="https://booking.webestica.com/assets/images/gallery/14.jpg">
                            <div className="card card-grid-lg card-element-hover card-overlay-hover overflow-hidden" style={{
                                backgroundImage: 'url(https://booking.webestica.com/assets/images/gallery/14.jpg)',
                                backgroundPosition: 'center left',
                                backgroundSize: 'cover'
                            }}>
                                {/* Card hover element */}
                                <div className="hover-element position-absolute w-100 h-100">
                                    <i className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-6">
                        {/* Card item START */}
                        <div className="row g-2">
                            {/* Image */}
                            <div className="col-12">
                                <a data-glightbox="" data-gallery="gallery" href="https://booking.webestica.com/assets/images/gallery/13.jpg">
                                    <div className="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden" style={{
                                        backgroundImage: 'url(https://booking.webestica.com/assets/images/gallery/13.jpg)',
                                        backgroundPosition: 'center left',
                                        backgroundSize: 'cover'
                                    }}>
                                        {/* Card hover element */}
                                        <div className="hover-element position-absolute w-100 h-100">
                                            <i className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            {/* Image */}
                            <div className="col-md-6">
                                <a data-glightbox="" data-gallery="gallery" href="https://booking.webestica.com/assets/images/gallery/12.jpg">
                                    <div className="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden" style={{
                                        backgroundImage: 'url(https://booking.webestica.com/assets/images/gallery/12.jpg)',
                                        backgroundPosition: 'center left',
                                        backgroundSize: 'cover'
                                    }}>
                                        {/* Card hover element */}
                                        <div className="hover-element position-absolute w-100 h-100">
                                            <i className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            {/* Images */}
                            <div className="col-md-6">
                                <div className="card card-grid-sm overflow-hidden" style={{
                                    backgroundImage: 'url(https://booking.webestica.com/assets/images/gallery/11.jpg)',
                                    backgroundPosition: 'center left',
                                    backgroundSize: 'cover'
                                }}>
                                    {/* Background overlay */}
                                    <div className="bg-overlay bg-dark opacity-7"></div>

                                    {/* Popup Images */}
                                    <a data-glightbox="" data-gallery="gallery" href="https://booking.webestica.com/assets/images/gallery/11.jpg" className="stretched-link z-index-9"></a>
                                    <a data-glightbox="" data-gallery="gallery" href="https://booking.webestica.com/assets/images/gallery/15.jpg"></a>
                                    <a data-glightbox="" data-gallery="gallery" href="https://booking.webestica.com/assets/images/gallery/16.jpg"></a>

                                    {/* Overlay text */}
                                    <div className="card-img-overlay d-flex h-100 w-100">
                                        <h6 className="card-title m-auto fw-light text-decoration-underline"><a href="#" className="text-white">View all</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card item END */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardGrid;
