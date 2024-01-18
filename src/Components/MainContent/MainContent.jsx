import { Link } from 'react-router-dom'
import ImgOne from '../../assets/img/shape/1.webp'
import ImgTwo from '../../assets/img/shape/2.webp'
import ImgThree from '../../assets/img/shape/3.webp'
import ImgFour from '../../assets/img/shape/4.webp'
import ImgFive from '../../assets/img/shape/5.webp'
import ImgSix from '../../assets/img/shape/6.webp'

import BlogImgOne from '../../assets/img/blog/1.webp'
import BlogImgTwo from '../../assets/img/blog/2.webp'

import ProjectImgOne from '../../assets/img/projects/w1.webp'
import ProjectImgTwo from '../../assets/img/projects/w2.webp'
import ProjectImgThree from '../../assets/img/projects/w3.webp'
import ProjectImgFour from '../../assets/img/projects/w4.webp'

import TeamImgOne from '../../assets/img/team/1.webp'
import TeamImgTwo from '../../assets/img/team/2.webp'
import TeamImgThree from '../../assets/img/team/3.webp'
import TeamImgFour from '../../assets/img/team/4.webp'

import ServiceImgOne from '../../assets/img/service/2.webp'
import ServiceImgTwo from '../../assets/img/service/2.webp'
import ServiceImgThree from '../../assets/img/service/3.webp'
import ServiceImgFour from '../../assets/img/service/4.webp'

import PhotoImgOne from '../../assets/img/photos/a1.webp'

import IconQuote from '../../assets/img/icons/quote-icon.webp'
import SliderImgOne from '../../assets/img/slider/2.webp'
import SliderImgTwo from '../../assets/img/slider/1.webp'



function MainContent() {
  return (
    <main class="main-content">
    {/**Start Hero Area Wrapper */}
    <section className="home-slider-area slider-default">
        <div className="home-slider-content">
            <div className="swiper-container home-slider-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {/**Start Slide Item  */}
                        <div className="home-slider-item">
                            <div className="slider-content-area bg-img" data-bg-img={SliderImgTwo}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-6">
                                            <div className="content">
                                                <div className="inner-content">
                                                    <div className="wrap-one">
                                                        <h2>Fast & trusted transportation service.</h2>
                                                    </div>
                                                    <div className="wrap-two">
                                                        <p>It is long established fact that reader will be distracted readable content of page when looking.</p>
                                                    </div>
                                                    <div className="wrap-three">
                                                        <Link href="contact.html" className="link btn-theme">Booking Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="thumb">
                                                <div className="bg-thumb bg-img" data-bg-img={SliderImgOne}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-logo bg-img" data-bg-img={ImgSix}></div>
                                </div>
                                <div className="bg-overlay"></div>
                            </div>
                        </div>
                        {/**End Slide Item */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/**End Hero Area Wrapper */}

    {/**Start Tracking Area Wrapper */}
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="tracking-form-wrap">
                        <form className="tracking-searchbox">
                            <div className="track-dropdown">
                                <select className="form-control select-dropdown">
            <option selected="">Shipment Type</option>
            <option value="lan1">Shipment One</option>
            <option value="lan2">Shipment Two</option>
            <option value="lan3">Shipment Three</option>
          </select>
                            </div>
                            <div className="track-dropdown style-two">
                                <select className="form-control select-dropdown">
            <option selected="">Product Type</option>
            <option value="lan1">Product One</option>
            <option value="lan2">Product Two</option>
            <option value="lan3">Product Three</option>
          </select>
                            </div>
                            <input className="form-control" type="text" placeholder="Tracking Number" />
                            <button className="btn btn-theme" type="button">Track Now <i class="icon icofont-long-arrow-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/**End Tracking Area Wrapper */}

    {/*Start About Area Wrapper */}
    <section className="about-area about-default-area">
        <div className="container">
            <div className="row row-gutter-0">
                <div className="col-md-6 col-lg-4">
                    <div className="about-content">
                        <div className="section-title">
                            <h4 className="subtitle">ABOUT US</h4>
                            <h2 className="title">Strist is world famous logistic partner over 38 years of experience.</h2>
                            <p>It long established fact a reader will be distracted the readable content of a pages when looking layout point using is that has more less normal distribution making it look like readable.</p>
                            <p>It long established fact a reader will be distracted the readable content of a pages when looking layout point using is that has more less normal distribution making it look like readable.</p>
                            <Link className='link' href="about.html" class="btn-theme">Team Members</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="about-thumb">
                        <img src={PhotoImgOne} alt="Image" style={{ width: '350px', height: '570px'}} />
                    </div>
                </div>
                <div class="col-md-12 col-lg-4">
                    <div className="featured-wrp">
                        <div className="featured-item">
                            <h4 className="title"><Link className='link' href="about.html">Highly Professional Staff</Link></h4>
                            <p>It long estabhed fact that reader readab content page when looking point using that less</p>
                        </div>
                        <div className="featured-item">
                            <h4 className="title"><Link className='link' href="about.html">Great Transportation</Link></h4>
                            <p>It long estabhed fact that reader readab content page when looking point using that less</p>
                        </div>
                        <div className="featured-item">
                            <h4 className="title"><Link className='link' href="about.html">Warehousing Storage</Link></h4>
                            <p>It long estabhed fact that reader readab content page when looking point using that less</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/**End About Area Wrapper */}

    {/**Start Service Area Wrapper */}
    <section className="service-area service-default-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 m-auto">
                    <div className="section-title text-center">
                        <h4 className="subtitle">AWESOME SERVICES</h4>
                        <h2 className="title">Logistic Services</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="swiper-container service-slider-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                {/** Start Service Item */}
                                <div className="service-item">
                                    <div className="thumb">
                                        <Link className='link' href="service-details.html"><img src={ServiceImgOne} alt="Image" style={{ width: '270px', height: '308px'}} /></Link>
                                    </div>
                                    <div className="content">
                                        <h4 className="title"><Link className='link' href="service-details.html">Commercial Movers</Link></h4>
                                    </div>
                                </div>
                                {/**End Service Item */}
                            </div>
                            <div className="swiper-slide">
                                {/**Start Service Item */}
                                <div className="service-item">
                                    <div className="thumb">
                                        <Link className='link' href="service-details.html"><img src={ServiceImgTwo} alt="Image" style={{ width: '270px', height: '308px'}} /></Link>
                                    </div>
                                    <div class="content">
                                        <h4 className="title"><Link className='link' href="service-details.html">Air Transportation</Link></h4>
                                    </div>
                                </div>
                                {/**End Service Item */}
                            </div>
                            <div className="swiper-slide">
                                {/**Start Service Item */}
                                <div className="service-item">
                                    <div className="thumb">
                                        <Link href="service-details.html"><img src={ServiceImgThree} alt="Image" style={{ width: '270px', height: '308px'}} /></Link>
                                    </div>
                                    <div className="content">
                                        <h4 className="title"><Link className='link' href="service-details.html">Warehousing</Link></h4>
                                    </div>
                                </div>
                                {/**End Service Item */}
                            </div>
                            <div className="swiper-slide">
                                {/**Start Service Item  */}
                                <div className="service-item">
                                    <div className="thumb">
                                        <Link className='link' href="service-details.html"><img src={ServiceImgFour} alt="Image" style={{ width: '270px', height: '308px'}} /></Link>
                                    </div>
                                    <div className="content">
                                        <h4 className="title"><Link className='link' href="service-details.html">Consulting Storage</Link></h4>
                                    </div>
                                </div>
                                {/**End Service Item */}
                            </div>
                        </div>
                        {/**Add Pagination */}
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p className="get-started">We are ready to give 24/7 support for your cutomer. <Link className='link' href="services.html">Get Started</Link></p>
                </div>
            </div>
            <div className="shape-group">
                <div className="shape-style2">
                    <img src={ImgTwo} alt="Image" style={{width: '353', height: '918'}} />
                </div>
                <div className="shape-style3">
                    <img src={ImgThree} alt="Image" style={{width: '353', height: '918'}} />
                </div>
            </div>
        </div>
    </section>
    {/**End Service Area Wrapper */}

    {/**Start Divider Area Wrapper */}
    <section className="divider-area divider-style1-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="divider-wrap">
                        <div className="column-left">
                            <div className="content">
                                <p>Strist is trusted logistic ompany. You can contact for any logistic service.</p>
                            </div>
                        </div>
                        <div className="column-right">
                            <div className="content">
                                <h2 className="title">88 95 46 37</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/**End Divider Area Wrapper */}

    {/**Start Team Area */}
    <section class="team-area team-default-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-title text-center">
                        <h4 class="subtitle">TEAM MEMBERS</h4>
                        <h2 class="title">Highly Experienced Team</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div className="team-slider-content">
                        <div className="swiper-container team-slider-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="team-member">
                                        <div className="thumb">
                                        <img src={TeamImgOne} alt="Image" style={{width: '161', height: '199'}} />
                                        </div>
                                        <div className="content">
                                            <div className="member-info">
                                                <h4 className="name">Keshia Mchugh</h4>
                                                <h6 className="designation">Delivery Manager</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="team-member">
                                        <div className="thumb">
                                        <img src={TeamImgTwo} alt="Image" style={{width: '161', height: '199'}} />
                                        </div>
                                        <div className="content">
                                            <div className="member-info">
                                                <h4 className="name">Robin Justice</h4>
                                                <h6 className="designation">Cargo Supervisor</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="team-member">
                                        <div className="thumb">
                                            <img src={TeamImgThree} alt="Image" style={{width: '161', height: '199'}} />
                                        </div>
                                        <div className="content">
                                            <div className="member-info">
                                                <h4 className="name">Kandis Justice</h4>
                                                <h6 className="designation">Cargo Supervisor</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="team-member">
                                        <div className="thumb">
                                            <img src={TeamImgFour} alt="Image" style={{width: '161', height: '199'}} />
                                        </div>
                                        <div className="content">
                                            <div className="member-info">
                                                <h4 className="name">Sacha Preston</h4>
                                                <h6 className="designation">Delivery Manager</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/**End Team Area */}

    {/**Start Project Area */}
    <section className="project-area project-default-area">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 m-auto">
                    <div className="section-title text-center">
                        <h4 className="subtitle">COMPLETE PROJECTS</h4>
                        <h2 class="title">Work For Customer</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="projects-slider-content">
                        <div className="swiper-container projects-slider-container">
                            <div className="swiper-wrapper projects-slider-wrapper">
                                <div className="swiper-slide">
                                    <div className="project-item">
                                        <div className="thumb">
                                            <Link href="project-details.html"><img src={ProjectImgOne} alt="Image" style={{width: '564px', height: '347px'}} /></Link>
                                        </div>
                                        <div className="content">
                                            <h4 className="title"><Link className='link' href="project-details.html">Security System Cargo</Link></h4>
                                            <h6 className="category"><Link className='link' href="projects.html">Transportation Project</Link></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="project-item">
                                        <div className="thumb">
                                            <Link className='link' href="project-details.html"><img src={ProjectImgTwo} alt="Image" style={{width: '564px', height: '347px'}} /></Link>
                                        </div>
                                        <div className="content">
                                            <h4 className="title"><a href="project-details.html">Drone Ride Service</a></h4>
                                            <h6 className="category"><a href="projects.html">Transportation Project</a></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="project-item">
                                        <div className="thumb">
                                            <Link className='link' href="project-details.html"><img src={ProjectImgThree} alt="Image" style={{width: '564px', height: '347px'}} /></Link>
                                        </div>
                                        <div className="content">
                                            <h4 className="title"><Link className='link' href="project-details.html">Security System Cargo</Link></h4>
                                            <h6 className="category"><Link className='link' href="projects.html">Transportation Project</Link></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="project-item">
                                        <div className="thumb">
                                            <Link className='link' href="project-details.html"><img src={ProjectImgFour} alt="Image" style={{width: '564px', height: '347px'}} /></Link>
                                        </div>
                                        <div className="content">
                                            <h4 className="title"><a href="project-details.html">Drone Ride Service</a></h4>
                                            <h6 className="category"><a href="projects.html">Transportation Project</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/**Add Arrows */}
                            <div className="swiper-btn-next"><i className="icofont-long-arrow-right"></i></div>
                            <div className="swiper-btn-prev"><i className="icofont-long-arrow-left"></i></div>
                            {/**Add Pagination */}
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-shape-style" data-bg-img={ImgFive}></div>
    </section>
    {/**End Project Area */}

    {/**Start Testimonial Area Wrapper */}
    <section className="testimonial-area testimonial-default-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 m-auto">
                    <div className="section-title text-center">
                        <h4 className="subtitle">HAPPY CLIENTS</h4>
                        <h2 className="title">Feedback From Clients</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="swiper-container testimonial-slider-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                {/**Start Testimonial Item */}
                                <div className="testimonial-item">
                                    <div className="content">
                                        <p>“Lorem Ipsum simply dummy text printing typesetting industry lorem has been industry standard dummy text sinces when unknowns printer took galley type and scram make type specimen book”.</p>
                                        <img className="quote-icon" src={IconQuote} alt="Icon" style={{width: '252px', height: '190px'}} />
                                    </div>
                                    <div className="client-info">
                                        <div className="desc">
                                            <h5>Founder of Musion</h5>
                                            <h4>Shoshana Horsley</h4>
                                        </div>
                                        <div className="rating">
                                            <span className="rating-color icofont-star"></span>
                                            <span className="rating-color icofont-star"></span>
                                            <span className="rating-color icofont-star"></span>
                                            <span className="icofont-star"></span>
                                            <span className="icofont-star"></span>
                                        </div>
                                    </div>
                                </div>
                                {/**End Testimonial Item */}
                            </div>
                            <div className="swiper-slide">
                                {/**Start Testimonial Item */}
                                <div className="testimonial-item">
                                    <div className="content">
                                        <p>“There are many varioution of Lorem Ipsum. lorem has been industry standard dummy text sinces when unknowns printer took galley type and scram make type specimen simply dummy text”.</p>
                                        <img className="quote-icon" src={IconQuote} alt="Icon" style={{width: '252px', height: '190px'}} />
                                    </div>
                                    <div className="client-info">
                                        <div className="desc">
                                            <h5>Founder of Eleren</h5>
                                            <h4>Elisa Marshall</h4>
                                        </div>
                                        <div className="rating">
                                            <span className="rating-color icofont-star"></span>
                                            <span className="rating-color icofont-star"></span>
                                            <span className="rating-color icofont-star"></span>
                                            <span className="rating-color icofont-star"></span>
                                            <span className="icofont-star"></span>
                                        </div>
                                    </div>
                                </div>
                                {/**End Testimonial Item */}
                            </div>
                            <div className="swiper-slide">
                                {/**Start Testimonial Item */}
                                <div className="testimonial-item">
                                    <div className="content">
                                        <p>“Lorem Ipsum simply dummy text printing typesetting industry lorem has been industry standard dummy text sinces when unknowns printer took galley type and scram make type specimen book”.</p>
                                        <img className="quote-icon" src={IconQuote} alt="Icon" style={{width: '252px', height: '191px'}} />
                                    </div>
                                    <div className="client-info">
                                        <div className="desc">
                                            <h5>Founder of Musion</h5>
                                            <h4>Shoshana Horsley</h4>
                                        </div>
                                        <div className="rating">
                                            <span className="rating-color icofont-star"></span>
                                            <span className="rating-color icofont-star"></span>
                                            <span className="rating-color icofont-star"></span>
                                            <span className="icofont-star"></span>
                                            <span className="icofont-star"></span>
                                        </div>
                                    </div>
                                </div>
                                {/**End Testimonial Item */}
                            </div>
                            <div className="swiper-slide">
                                {/**Start Testimonial Item */}
                                <div className="testimonial-item">
                                    <div className="content">
                                        <p>“Lorem Ipsum simply dummy text printing typesetting industry lorem has been industry standard dummy text sinces when unknowns printer took galley type and scram make type specimen book”.</p>
                                        <img className="quote-icon" src={IconQuote} alt="Icon" style={{ width: '252px', height: '191'}} />
                                    </div>
                                    <div className="client-info">
                                        <div className="desc">
                                            <h5>Founder of Musion</h5>
                                            <h4>Elisa Marshall</h4>
                                        </div>
                                        <div className="rating">
                                            <span className="rating-color icofont-star"></span>
                                            <span className="rating-color icofont-star"></span>
                                            <span className="icofont-star"></span>
                                            <span className="icofont-star"></span>
                                            <span className="icofont-star"></span>
                                        </div>
                                    </div>
                                </div>
                                {/**End Testimonial Item */}
                            </div>
                        </div>
                        {/**Add Pagination */}
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/**End Testimonial Area Wrapper */}

    {/**Start Divider Area Wrapper */}
    <section className="divider-area divider-default-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-8 col-md-7">
                    <div className="content">
                        <h2 className="title">Stay connect with for<br /> daily logistic service update.</h2>
                    </div>
                </div>
                <div className="col-sm-4 col-md-5">
                    <div className="divider-btn">
                        <Link className="link btn-theme btn-white" href="index.html">Subscribe Now <i class="icofont-rounded-double-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="shape-group">
            <div className="shape-style4">
                <img src={ImgFour} alt="Image" style={{width: '560px', height: '250px'}} />
            </div>
        </div>
    </section>
    {/**End Divider Area Wrapper */}

    {/**Start Blog Area Wrapper */}
    <section className="blog-area blog-default-area position-relative">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 m-auto">
                    <div className="section-title">
                        <h4 className="subtitle">OUR LATEST BLOG POST</h4>
                        <h2 className="title">Latest News & Article</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    {/**Start Blog Post Item */}
                    <div className="post-item mb-sm-50">
                        <div className="thumb">
                            <img src={BlogImgOne} alt="Image" style={{ width: '420px', height: '370'}} />
                        </div>
                        <div className="content">
                            <Link href="blog.html" className="link meta-tag"><span class="post-date"></span>31 June 2022</Link>
                            <h3 className="title"><Link className='link' href="blog-details.html">Make type specimen book has survived not only five centurie’s the into electronic.</Link></h3>
                            <p>It long established fact that a will be distracted looking at using is that has distribution</p>
                            <Link className="link btn-link" href="blog-details.html">Read More</Link>
                        </div>
                    </div>
                    {/**End Blog Post Item */}
                </div>
                <div className="col-md-6">
                    {/**Start Blog Post Item */}
                    <div className="post-item">
                        <div className="thumb">
                            <img src={BlogImgTwo} alt="Image" style={{ width: '420px', height: '370'}} />
                        </div>
                        <div class="content">
                            <Link className='link' href="blog.html" class="meta-tag"><span class="post-date"></span>31 June 2022</Link>
                            <h3 className="title"><Link className='link' href="blog-details.html">Fast & trusted transportation service. five centurie’s the into technology.</Link></h3>
                            <p>Stay connect with for daily logistic service update from our logistic action source</p>
                            <Link className="link btn-link" href="blog-details.html">Read More</Link>
                        </div>
                    </div>
                    {/**End Blog Post Item */}
                </div>
            </div>
        </div>
        <div className="shape-group">
            <div className="shape-style1">
                <img src={ImgOne} alt="Image" style={{width: '185px', height: '185px'}} />
            </div>
        </div>
    </section>
    {/* End Blog Area Wrapper*/}
</main>
  )
}

export default MainContent