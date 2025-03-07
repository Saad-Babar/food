import React from "react";
import Image from "next/image";

function MainSlider () {
    return (
        // <!--Main Slider Start-->
        <section className="main-slider clearfix">
            <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": true,
                "effect": "fade",
                "pagination": {
                "el": "#main-slider-pagination",
                "type": "bullets",
                "clickable": true
                },
                "navigation": {
                "nextEl": "#main-slider__swiper-button-next",
                "prevEl": "#main-slider__swiper-button-prev"
                },
                "autoplay": {
                "delay": 5000
                }}'>
                <div className="swiper-wrapper">

                    <div className="swiper-slide">
                        <div className="image-layer"
                            style={{backgroundImage: "url(/assets/images/backgrounds/main-slider-1-1.png)"}}></div>
                        {/* <!-- /.image-layer --> */}

                        <div className="main-slider-shape-1"
                            style={{backgroundImage: "url(/assets/images/shapes/main-slider-shape-1.jpg)"}}></div>
                        <div className="main-slider-shape-2 float-bob-x">
                            <Image src="/assets/images/shapes/main-slider-shape-2.png" alt="" fill/>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-8">
                                    <div className="main-slider__content">
                                        <p className="main-slider__sub-title">Always donate for childrens</p>
                                        <h2 className="main-slider__title">Lend a Helping Hand to Those in Need</h2>
                                        <div className="main-slider__btn-box">
                                            <a href="about.html" className="thm-btn main-slider__btn"> Discover more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="image-layer"
                            style={{backgroundImage: "url(/assets/images/backgrounds/main-slider-1-2.png)"}}></div>
                        {/* <!-- /.image-layer --> */}

                        <div className="main-slider-shape-1"
                            style={{backgroundImage: "url(/assets/images/shapes/main-slider-shape-1.jpg)"}}></div>
                        <div className="main-slider-shape-2 float-bob-x">
                            <Image src="/assets/images/shapes/main-slider-shape-2.png" alt="" fill/>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-8">
                                    <div className="main-slider__content">
                                        <p className="main-slider__sub-title">Always donate for childrens</p>
                                        <h2 className="main-slider__title">Lend a Helping Hand to Those in Need</h2>
                                        <div className="main-slider__btn-box">
                                            <a href="about.html" className="thm-btn main-slider__btn"> Discover more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="image-layer"
                            style={{backgroundImage: "url(/assets/images/backgrounds/main-slider-1-3.png)"}}></div>
                        {/* <!-- /.image-layer --> */}

                        <div className="main-slider-shape-1"
                            style={{backgroundImage: "url(/assets/images/shapes/main-slider-shape-1.jpg)"}}></div>
                        <div className="main-slider-shape-2 float-bob-x">
                            <Image src="/assets/images/shapes/main-slider-shape-2.png" alt="" fill/>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-8">
                                    <div className="main-slider__content">
                                        <p className="main-slider__sub-title">Always donate for childrens</p>
                                        <h2 className="main-slider__title">Lend a Helping Hand to Those in Need</h2>
                                        <div className="main-slider__btn-box">
                                            <a href="about.html" className="thm-btn main-slider__btn"> Discover more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- If we need navigation buttons --> */}
                <div className="main-slider__nav">
                    <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                        <i className="icon-left-arrow"></i>
                    </div>
                    <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                        <i className="icon-right-arrow"></i>
                    </div>
                </div>

            </div>
        </section>
        // {/* <!--Main Slider End--> */}
    )
}

export default MainSlider