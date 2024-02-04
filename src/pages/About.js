import React from "react";
import  './About.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import whoWeAreImg from "./assets/images/aboutus/whoWeAre2.jpg"

import whyChooseUs from "./assets/images/aboutus/whyChooseUs.svg"
import profile from './assets/images/aboutus/profile.jpg'
const About = () => {
  return (
    <div>
      <div className="spacing1"></div>
      <section
        className={`article05 cid-u2djpAWs48 `}
        id="about-us-5-u2djpAWs48"
      >
        <div className="container ">
          <div className="row justify-content-center align-items-center ">
            <div className="col-12 ">
              <div className="card-wrapper rounded-5 ">
                <div className="row d-flex">
                  <div className="col-12 col-md-12 col-lg-5 image-wrapper align-self-stretch">
                    <img
                      className="w-100 rounded-5 h-100"
                      src={whoWeAreImg.src}
                      alt="alt"
                    />
                    {/* <Image src={whoWeAreImg} className=" w-100 rounded-5 h-100" height={10000} /> */}
                  </div>
                  <div className="col-12 col-lg-7 col-md-12">
                    <div className="text-wrapper align-left">
                      <h1 className="mbr-section-title text-center mb-4 ">
                        <strong className="display-3">Who We Are ?</strong>
                      </h1>
                      <p className="mbr-text mb-3 display-7">
                        Gravitii aims to ease and facilitate the process of
                        renting the warehouses. Our platform makes it convenient
                        for warehouse owners and customers to list their
                        offering and requirements respectively, thereby helping
                        them to find the perfect storage solution.
                      </p>
                      <p className="mbr-text mb-3 display-7">
                        We believe that the process of finding a storage space
                        should be simple and relaxed. We are excited about
                        closing the gap between stakeholders, thereby easing the
                        process of renting a warehouse.
                      </p>
                      <p className="mbr-text mb-3 display-7">
                        At Gravitii, we do not aim to be just a platform. We are
                        all about our warehouse owners and customers. You can
                        now say good bye to the old and conventional ways of
                        searching a warehouse after switching to us.
                      </p>
                      <p className="mbr-text  display-7">
                        Join us in transforming the way customers find the
                        warehouse. Happy Searching…
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="article2 cid-u2djpAXSub p-4 "
        id="generic-text-2-u2djpAXSub"
      >
        <div className="container bg-white rounded-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-5 image-wrapper p-0">
              <img className="w-100 rounded-5" src={whyChooseUs.src} alt="alt"/>
            </div>
            <div className="col-12 col-md-12 col-lg px-3 p-md-5 ">
              <div className="text-wrapper align-left ">
                <h1 className="mbr-section-title mb-4 display-2 text-center">
                  <strong>Why Choose Us ?</strong>
                </h1>
                <p className="mbr-text align-left  mb-0 display-7">
                  Our user-friendly platform will help you to:
                </p>
                <div className=" mbr-text align-left  mb-3 display-7 ">
                  <ul className="p-3 pt-0 ulListStyleBullets">
                    <li className="">
                      List your warehouse and/or storage requirement.
                    </li>
                    <li>Highlight your warehouse on a national level.</li>
                    <li>Search and post warehouses across India.</li>
                    <li>
                      Select a list of features that you either want or provide
                      in a warehouse.
                    </li>
                    <li>Provide the feedback to stakeholders.</li>
                  </ul>
                </div>

                <p className="mbr-text align-left  mb-3 display-7">
                  Join us in our mission to revolutionize the warehouse rental
                  industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="people03 cid-u2djpAYqTN px-4 px-sm-5" id="team-1-u2djpAYqTN">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 content-head">
                            <div className="mbr-section-head mb-5 pb-4">
                                <h4 className="mbr-section-title text-center align-center mb-4 pb-2 display-2">
                                    <strong>Our Team</strong>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 d-flex justify-content-center align-items-center">
                        <div className="item features-image col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                            <div className="item-wrapper">
                                <div className="item-img mb-3 ">
                                    <img src={profile.src} className='rounded-5 rounded-circle hover-zoom' alt="alt"/>
                                </div>
                                <div className="item-content align-left">
                                    <h6 className="item-subtitle text-center display-5">
                                        <strong>Pranav</strong></h6>
                                    <p className="mbr-text text-center display-7">Co-founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                            <div className="item-wrapper">
                                <div className="item-img mb-3 ">
                                    <img src={profile.src} className='rounded-5 rounded-circle hover-zoom' alt="alt"/>
                                </div>
                                <div className="item-content align-left">
                                    <h6 className="item-subtitle text-center display-5">
                                        <strong>Kartik</strong></h6>
                                    <p className="mbr-text text-center display-7">Co-founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                            <div className="item-wrapper">
                                <div className="item-img mb-3 ">
                                    <img src={profile.src} className='rounded-5 rounded-circle hover-zoom' alt="alt"/>
                                </div>
                                <div className="item-content align-left">
                                    <h6 className="item-subtitle text-center display-5">
                                        <strong>Prateek</strong></h6>
                                    <p className="mbr-text text-center display-7">Co-founder</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row mt-5  d-flex justify-content-center align-items-center">
                        <div className="item features-image col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                            <div className="item-wrapper">
                                <div className="item-img mb-3 ">
                                    <img src={profile.src} className='rounded-5 rounded-circle hover-zoom' alt="alt"/>
                                </div>
                                <div className="item-content align-left">
                                    <h6 className="item-subtitle text-center display-5">
                                        <strong>Sarthak</strong></h6>
                                    <p className="mbr-text text-center display-7">Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                            <div className="item-wrapper">
                                <div className="item-img mb-3 ">
                                    <img src={profile.src} className='rounded-5 rounded-circle hover-zoom' alt="alt"/>
                                </div>
                                <div className="item-content align-left">
                                    <h6 className="item-subtitle text-center display-5">
                                        <strong>Toheed</strong></h6>
                                    <p className="mbr-text text-center display-7">Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="item features-image col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                            <div className="item-wrapper">
                                <div className="item-img mb-3 ">
                                    <img src={profile.src} className='rounded-5 rounded-circle hover-zoom' alt="alt"/>
                                </div>
                                <div className="item-content align-left">
                                    <h6 className="item-subtitle text-center display-5">
                                        <strong>Shubham</strong></h6>
                                    <p className="mbr-text text-center display-7">Developer</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
      </section>
      <section className="list1 cid-u2djpAZyU7" id="faq-1-u2djpAZyU7">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg-10 m-auto">
                            <div className="content">
                                <div className="mbr-section-head align-left mb-5">
                                    <h3 className="mbr-section-title mb-4 text-center display-2">
                                        <strong>FAQs</strong>
                                    </h3>
                                </div>
                                <div id="bootstrap-accordion_0" className="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">
                                    <div className="card mb-3">
                                        <div className="card-header" role="tab" id="headingOne">
                                            <a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse1_0" aria-expanded="false" aria-controls="collapse1">
                                                <h6 className="panel-title-edit mbr-semibold  mb-0 display-6">
                                                    How do I list my warehouse?
                                                </h6>
                                                <span className="sign mbr-iconfont mobi-mbri-arrow-down"><ArrowDropDownIcon fontSize='large' /></span>
                                            </a>
                                        </div>
                                        <div id="collapse1_0" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_0">
                                            <div className="panel-body">
                                                <p className=" panel-text display-7">
                                                    Listing your warehouse is easy! Simply create an account, go to the &#x27;List Warehouse&#x27; section, and fill in the details of your space.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-header" role="tab" id="headingOne">
                                            <a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse2_0" aria-expanded="false" aria-controls="collapse2">
                                                <h6 className="panel-title-edit mbr-semibold  mb-0 display-6">
                                                    Can I visit a warehouse before renting?
                                                </h6>
                                                <span className="sign mbr-iconfont mobi-mbri-arrow-down"><ArrowDropDownIcon fontSize='large' /></span>
                                            </a>
                                        </div>
                                        <div id="collapse2_0" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_0">
                                            <div className="panel-body">
                                                <p className=" panel-text display-7">
                                                    Yes, you can schedule a visit to any warehouse before making a rental decision. Contact the owner to arrange a viewing.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-header" role="tab" id="headingOne">
                                            <a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse3_0" aria-expanded="false" aria-controls="collapse3">
                                                <h6 className="panel-title-edit mbr-semibold mb-0 display-6">
                                                    What if I need a larger space?
                                                </h6>
                                                <span className="sign mbr-iconfont mobi-mbri-arrow-down"><ArrowDropDownIcon fontSize='large' /></span>
                                            </a>
                                        </div>
                                        <div id="collapse3_0" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_0">
                                            <div className="panel-body">
                                                <p className="panel-text display-7">
                                                    If you need a larger space, simply upgrade to our Premium Plan or contact us for custom solutions tailored to your needs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-header" role="tab" id="headingOne">
                                            <a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse4_0" aria-expanded="false" aria-controls="collapse4">
                                                <h6 className="panel-title-edit mbr-semibold  mb-0 display-6">
                                                    Is my rental transaction secure?
                                                </h6>
                                                <span className="sign mbr-iconfont mobi-mbri-arrow-down"> <ArrowDropDownIcon fontSize='large' /></span>
                                            </a>
                                        </div>
                                        <div id="collapse4_0" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_0">
                                            <div className="panel-body">
                                                <p className=" panel-text display-7">
                                                    Absolutely! We prioritize the security of all rental transactions on our platform. Your peace of mind is our top priority.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-header" role="tab" id="headingOne">
                                            <a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#collapse5_0" aria-expanded="false" aria-controls="collapse5">
                                                <h6 className="panel-title-edit mbr-semibold  mb-0 display-6">
                                                    How do I contact customer support?
                                                </h6>
                                                <span className="sign mbr-iconfont mobi-mbri-arrow-down">
                                                    <ArrowDropDownIcon fontSize='large' />
                                                </span>
                                            </a>
                                        </div>
                                        <div id="collapse5_0" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_0">
                                            <div className="panel-body">
                                                <p className=" panel-text display-7">
                                                    You can reach our customer support team via email, phone, or by filling out the contact form on our website.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </section>
    </div>
  );
};

export default About;
