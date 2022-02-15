import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import Slider from "react-slick";
import './testimonial.scss'
import Fade from 'react-reveal/Fade'

const schoolPartnersTestimonials = [
    {
        name: "Ben Iseke, Bergen County Academies",
        testimony: "The program runners at Qubit by Qubit are incredibly devoted educators. Their willingness to engage with feedback showed how much they wanted the program to be deeply excellent, and that dedication showed in every aspect of the program that I got a chance to see. The program is genuinely incredible, and undoubtedly life-changing for many of the students that they work with. QxQ is creating the future that we need.",
        image: "images/testimonials/ben-iseke.jpg"
    },
    {
        name: "Heather Pereira",
        testimony: "Qubit by Qubit has been a wonderful partner to work with. From assisting with ensuring that the course is approved by the University of California to providing a streamlined and straightforward enrollment process, the management of the course has been great.",
        image: "images/testimonials/heather.jpeg"
    },
    {
        name: "William K. Funderburk",
        testimony: "My own participation in this course has resulted in an overall better physics curriculum at my school! and I'm very thankful I met them. I'm so pleased to recommend their high-school course in Quantum Computing to any high school.",
        image: "images/testimonials/william.jpg"
    },
];

const instructorTestimonials = [
    {
        name: "Anthony Mirand, Google",
        testimony: "“I wish I had learned coding earlier. In beginning college computer science courses you are thrown in and expected to know so much already. These kids we’re teaching now have a huge advantage -- they’ll have the solid foundation and ability to build their knowledge from the ground up -- helping them understand and learn so much more, so much easier. The beneficial impact this education at a young age will have on them is immeasurable.”",
        image: "images/testimonials/anthony-mirand.jpeg"
    },
    {
        name: "Kelly Ellis, Amazon, TCS Advisory Board",
        testimony: "“Coding gives confidence to attack problems that seem larger than life and impossible otherwise. Entering into college CS classes is daunting. It’s a scary feeling being so far behind because you never learned any coding skills prior to college. I want to help young kids learn coding, because I know it will help them succeed in any discipline. These kids we’re teaching are going to be super well equipped.”",
        image: "images/testimonials/kelley-ellis.jpeg"
    },
    {
        name: "Anthony Mirand, Google",
        testimony: "“I wish I had learned coding earlier. In beginning college computer science courses you are thrown in and expected to know so much already. These kids we’re teaching now have a huge advantage -- they’ll have the solid foundation and ability to build their knowledge from the ground up -- helping them understand and learn so much more, so much easier. The beneficial impact this education at a young age will have on them is immeasurable.”",
        image: "images/testimonials/anthony-mirand.jpeg"
    },
    {
        name: "Kelly Ellis, Amazon, TCS Advisory Board",
        testimony: "“Coding gives confidence to attack problems that seem larger than life and impossible otherwise. Entering into college CS classes is daunting. It’s a scary feeling being so far behind because you never learned any coding skills prior to college. I want to help young kids learn coding, because I know it will help them succeed in any discipline. These kids we’re teaching are going to be super well equipped.”",
        image: "images/testimonials/kelley-ellis.jpeg"
    },
    {
        name: "Anthony Mirand, Google",
        testimony: "“I wish I had learned coding earlier. In beginning college computer science courses you are thrown in and expected to know so much already. These kids we’re teaching now have a huge advantage -- they’ll have the solid foundation and ability to build their knowledge from the ground up -- helping them understand and learn so much more, so much easier. The beneficial impact this education at a young age will have on them is immeasurable.”",
        image: "images/testimonials/anthony-mirand.jpeg"
    },
    {
        name: "Kelly Ellis, Amazon, TCS Advisory Board",
        testimony: "“Coding gives confidence to attack problems that seem larger than life and impossible otherwise. Entering into college CS classes is daunting. It’s a scary feeling being so far behind because you never learned any coding skills prior to college. I want to help young kids learn coding, because I know it will help them succeed in any discipline. These kids we’re teaching are going to be super well equipped.”",
        image: "images/testimonials/kelley-ellis.jpeg"
    },
    {
        name: "Anthony Mirand, Google",
        testimony: "“I wish I had learned coding earlier. In beginning college computer science courses you are thrown in and expected to know so much already. These kids we’re teaching now have a huge advantage -- they’ll have the solid foundation and ability to build their knowledge from the ground up -- helping them understand and learn so much more, so much easier. The beneficial impact this education at a young age will have on them is immeasurable.”",
        image: "images/testimonials/anthony-mirand.jpeg"
    },
    {
        name: "Kelly Ellis, Amazon, TCS Advisory Board",
        testimony: "“Coding gives confidence to attack problems that seem larger than life and impossible otherwise. Entering into college CS classes is daunting. It’s a scary feeling being so far behind because you never learned any coding skills prior to college. I want to help young kids learn coding, because I know it will help them succeed in any discipline. These kids we’re teaching are going to be super well equipped.”",
        image: "images/testimonials/kelley-ellis.jpeg"
    },
    {
        name: "Anthony Mirand, Google",
        testimony: "“I wish I had learned coding earlier. In beginning college computer science courses you are thrown in and expected to know so much already. These kids we’re teaching now have a huge advantage -- they’ll have the solid foundation and ability to build their knowledge from the ground up -- helping them understand and learn so much more, so much easier. The beneficial impact this education at a young age will have on them is immeasurable.”",
        image: "images/testimonials/anthony-mirand.jpeg"
    },
    {
        name: "Kelly Ellis, Amazon, TCS Advisory Board",
        testimony: "“Coding gives confidence to attack problems that seem larger than life and impossible otherwise. Entering into college CS classes is daunting. It’s a scary feeling being so far behind because you never learned any coding skills prior to college. I want to help young kids learn coding, because I know it will help them succeed in any discipline. These kids we’re teaching are going to be super well equipped.”",
        image: "images/testimonials/kelley-ellis.jpeg"
    },
    {
        name: "Anthony Mirand, Google",
        testimony: "“I wish I had learned coding earlier. In beginning college computer science courses you are thrown in and expected to know so much already. These kids we’re teaching now have a huge advantage -- they’ll have the solid foundation and ability to build their knowledge from the ground up -- helping them understand and learn so much more, so much easier. The beneficial impact this education at a young age will have on them is immeasurable.”",
        image: "images/testimonials/anthony-mirand.jpeg"
    },
    {
        name: "Kelly Ellis, Amazon, TCS Advisory Board",
        testimony: "“Coding gives confidence to attack problems that seem larger than life and impossible otherwise. Entering into college CS classes is daunting. It’s a scary feeling being so far behind because you never learned any coding skills prior to college. I want to help young kids learn coding, because I know it will help them succeed in any discipline. These kids we’re teaching are going to be super well equipped.”",
        image: "images/testimonials/kelley-ellis.jpeg"
    },
    {
        name: "Anthony Mirand, Google",
        testimony: "“I wish I had learned coding earlier. In beginning college computer science courses you are thrown in and expected to know so much already. These kids we’re teaching now have a huge advantage -- they’ll have the solid foundation and ability to build their knowledge from the ground up -- helping them understand and learn so much more, so much easier. The beneficial impact this education at a young age will have on them is immeasurable.”",
        image: "images/testimonials/anthony-mirand.jpeg"
    },
    {
        name: "Kelly Ellis, Amazon, TCS Advisory Board",
        testimony: "“Coding gives confidence to attack problems that seem larger than life and impossible otherwise. Entering into college CS classes is daunting. It’s a scary feeling being so far behind because you never learned any coding skills prior to college. I want to help young kids learn coding, because I know it will help them succeed in any discipline. These kids we’re teaching are going to be super well equipped.”",
        image: "images/testimonials/kelley-ellis.jpeg"
    },
];

const studentTestimonials = [
    {
        name: "Faraz",
        testimony: "This program has given me a thorough introductionary understanding of quantum computing and mainly how interesting and fun it is. If the correct opportunity arises in the future, I would be more than happy to join another course/study about quantum computing agian. It would not only be a missed opportunity if I didn't further my knowledge of quantum computing, but also a missed opportunity to enjoy a very fun subject.",
        image: "images/testimonials/faraz.JPG"
    },
    {
        name: "Lucy",
        testimony: "I appreciated the opportunity to continue learning during my winter break, interact with diverse students, and engage in material about a topic I would not have the chance to learn about otherwise.",
        image: "images/testimonials/lucy.jpg"
    },
    {
        name: "Michelle",
        testimony: "“I am so lucky that I am learning quantum computing as a high school student. Having gone through this course, I feel that I can overcome any academic challenge that awaits in my high school, and later college, STEM classes. I feel so powerful, and this course further developed my interest in conducting research in the field.”",
        image: "images/testimonials/michelle.jpg"
    },
    {
        name: "Faraz",
        testimony: "This program has given me a thorough introductionary understanding of quantum computing and mainly how interesting and fun it is. If the correct opportunity arises in the future, I would be more than happy to join another course/study about quantum computing agian. It would not only be a missed opportunity if I didn't further my knowledge of quantum computing, but also a missed opportunity to enjoy a very fun subject.",
        image: "images/testimonials/faraz.JPG"
    },
    {
        name: "Lucy",
        testimony: "I appreciated the opportunity to continue learning during my winter break, interact with diverse students, and engage in material about a topic I would not have the chance to learn about otherwise.",
        image: "images/testimonials/lucy.jpg"
    },
    {
        name: "Michelle",
        testimony: "“I am so lucky that I am learning quantum computing as a high school student. Having gone through this course, I feel that I can overcome any academic challenge that awaits in my high school, and later college, STEM classes. I feel so powerful, and this course further developed my interest in conducting research in the field.”",
        image: "images/testimonials/michelle.jpg"
    },
    {
        name: "Faraz",
        testimony: "This program has given me a thorough introductionary understanding of quantum computing and mainly how interesting and fun it is. If the correct opportunity arises in the future, I would be more than happy to join another course/study about quantum computing agian. It would not only be a missed opportunity if I didn't further my knowledge of quantum computing, but also a missed opportunity to enjoy a very fun subject.",
        image: "images/testimonials/faraz.JPG"
    },
    {
        name: "Lucy",
        testimony: "I appreciated the opportunity to continue learning during my winter break, interact with diverse students, and engage in material about a topic I would not have the chance to learn about otherwise.",
        image: "images/testimonials/lucy.jpg"
    },
    {
        name: "Michelle",
        testimony: "“I am so lucky that I am learning quantum computing as a high school student. Having gone through this course, I feel that I can overcome any academic challenge that awaits in my high school, and later college, STEM classes. I feel so powerful, and this course further developed my interest in conducting research in the field.”",
        image: "images/testimonials/michelle.jpg"
    },
    {
        name: "Faraz",
        testimony: "This program has given me a thorough introductionary understanding of quantum computing and mainly how interesting and fun it is. If the correct opportunity arises in the future, I would be more than happy to join another course/study about quantum computing agian. It would not only be a missed opportunity if I didn't further my knowledge of quantum computing, but also a missed opportunity to enjoy a very fun subject.",
        image: "images/testimonials/faraz.JPG"
    },
    {
        name: "Lucy",
        testimony: "I appreciated the opportunity to continue learning during my winter break, interact with diverse students, and engage in material about a topic I would not have the chance to learn about otherwise.",
        image: "images/testimonials/lucy.jpg"
    },
    {
        name: "Michelle",
        testimony: "“I am so lucky that I am learning quantum computing as a high school student. Having gone through this course, I feel that I can overcome any academic challenge that awaits in my high school, and later college, STEM classes. I feel so powerful, and this course further developed my interest in conducting research in the field.”",
        image: "images/testimonials/michelle.jpg"
    },
    {
        name: "Faraz",
        testimony: "This program has given me a thorough introductionary understanding of quantum computing and mainly how interesting and fun it is. If the correct opportunity arises in the future, I would be more than happy to join another course/study about quantum computing agian. It would not only be a missed opportunity if I didn't further my knowledge of quantum computing, but also a missed opportunity to enjoy a very fun subject.",
        image: "images/testimonials/faraz.JPG"
    },
    {
        name: "Lucy",
        testimony: "I appreciated the opportunity to continue learning during my winter break, interact with diverse students, and engage in material about a topic I would not have the chance to learn about otherwise.",
        image: "images/testimonials/lucy.jpg"
    },
    {
        name: "Michelle",
        testimony: "“I am so lucky that I am learning quantum computing as a high school student. Having gone through this course, I feel that I can overcome any academic challenge that awaits in my high school, and later college, STEM classes. I feel so powerful, and this course further developed my interest in conducting research in the field.”",
        image: "images/testimonials/michelle.jpg"
    },
    {
        name: "Faraz",
        testimony: "This program has given me a thorough introductionary understanding of quantum computing and mainly how interesting and fun it is. If the correct opportunity arises in the future, I would be more than happy to join another course/study about quantum computing agian. It would not only be a missed opportunity if I didn't further my knowledge of quantum computing, but also a missed opportunity to enjoy a very fun subject.",
        image: "images/testimonials/faraz.JPG"
    },
];

var FeaturedSettings = {
dots: false,
arrows:true,
infinite: true,
speed: 500,
slidesToShow: 5,
slidesToScroll: 2,
cssEase: 'ease-in-out',
centerMode:false,
responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // centerMode: true,
        }
    },
    {
        breakpoint: 767,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        }
    }
]
};

const showMore = true;

const featuredPost = [
    {
        name: '1',
        title: 'ACE-Ed',
        img: '/images/american-council-on-education-ace-logo-vector.png',
        description: 'THE CODING SCHOOL & IBM QUANTUM OFFERING FREE QUANTUM COURSE TO 5,000 STUDENTS',
        link: "https://ace-ed.org/the-coding-school-ibm-quantum-offering-free-quantum-course-to-5000-students/"
    },
    {
        name: '1',
        title: 'TechGig',
        img: '/images/Ol6sXv5b_400x400.jpg',
        description: 'IBM and The Coding School to offer free quantum education to 5000 students',
        link:'https://content.techgig.com/ibm-and-the-coding-school-to-offer-free-quantum-education-to-5000-students/articleshow/78538803.cms'
    },
    {
        name: '1',
        title: 'Quantum Insider',
        img: '/images/FOR-SOCIALS-CLASSIC.png',
        description: 'TQD Quantum Ethics Exclusive: Qubit by Qubit’s Mission is to Train a Diverse Quantum Workforce',
        link:'https://thequantuminsider.com/2021/03/01/tqd-quantum-ethics-exclusive-qubit-by-qubits-mission-is-to-train-a-diverse-quantum-workforce/'
    }
    ,
    {
        name: '1',
        title: 'Business Insider',
        img: '/images/BI_blue_background_vertical.png',
        description: 'Preparing for the Jobs of the Future: The Coding School and MIT Physicists Are Making Quantum Computing Accessible',
        link:'https://markets.businessinsider.com/news/stocks/preparing-for-the-jobs-of-the-future-the-coding-school-and-mit-physicists-are-making-quantum-computing-accessible-to-high-school-students-this-summer-1029279911'
    },
    {
        name: '1',
        title: 'Communications of ACM',
        img: '/images/2014-communications-of-the-acm.png',
        description:'MIT Researchers Lead High School Educational Initiative on Quantum Computing',
        link:'https://cacm.acm.org/careers/246701-mit-researchers-lead-high-school-educational-initiative-on-quantum-computing/fulltext?mobile=false'
    },
    {
        name: '1',
        title: 'Agnes Irwin School',
        img: '/images/The-Agnes-Irwin-School-logo.png',
        description:'Two Juniors Accepted Into First-Ever Quantum Computing Course',
        link:'https://www.agnesirwin.org/about/news/news-detail-page/~board/news/post/two-juniors-accepted-into-first-ever-quantum-computing-course'
    }
];

const partnersLogo = [
    {
        src: '/images/dod_stem.svg',
    },
    {
        src: '/images/google.png',
    },
    {
        src: '/images/ibm_q.png',
    },
    {
        src: '/images/ne.svg',
    },
    {
        src: '/images/usc.svg',
    }
];

const featuredLogo = [
    {
        src: '/images/mitnews.svg',
    },
    {
        src: '/images/los.svg',
    },
    {
        src: '/images/business-insider.svg',
    },
    {
        src: '/images/inside-quantum.svg',
    },
    {
        src: '/images/quantum-tech.svg',
    },
    {
        src: '/images/built-la.svg',
    },
    {
        src: '/images/american.svg',
    },
    {
        src: '/images/tech-gig.svg',
    },
    {
        src: '/images/s-logo.svg',
    }
];

var settings = {
    dots: true,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode:false,
};

function Testimonial() {
    const [isActive, setIsActive] = useState(0);

    const sliderRefStudent = useRef();
    const sliderRefPartners = useRef();
    const sliderRefInstructors = useRef();
    
    function handleOnClickStudent(e) {
        e.preventDefault();
        sliderRefStudent.current.slickGoTo(e.target.dataset.slide);
        setIsActive(e.target.dataset.slide)
    };
    function handleOnClickPartners(e) {
        e.preventDefault();
        sliderRefPartners.current.slickGoTo(e.target.dataset.slide);
        setIsActive(e.target.dataset.slide)
    };
    function handleOnClickInstructors(e) {
        e.preventDefault();
        sliderRefInstructors.current.slickGoTo(e.target.dataset.slide);
        setIsActive(e.target.dataset.slide)
    };

    return (
        <div id="" className="testimonia-sec">
            <Fade top>
                <div className='container'>
                    <div className='visual-text text-center mb-30'>
                        <h3>Testimonials</h3>
                    </div>

                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab" href="#studenst" className='active'>Students</a></li>
                        <li><a data-toggle="tab" href="#partner-school">Partner Schools</a></li>
                        <li><a data-toggle="tab" href="#instructors">Instructors</a></li>
                    </ul>
                </div>
            </Fade>
        
            <div className='testimonia-sec-bg' style={{ backgroundImage: `url("/images/testimonial-bg-new.png")` }}>
                <div className='container'>
                    <div class="tab-content">
                        <div id="studenst" class="tab-pane fade in active show">
                            <div className="go-to-slide">
                                {studentTestimonials.map((item,index)=>{
                                    return (
                                        <a key={index} className={ isActive == index ? "active" : null} href="#" onClick={handleOnClickStudent}>
                                            <img src={`${item['image']}`} data-slide={`${index}`} />
                                        </a>
                                    )
                                })}
                            </div>
                            <div className='visual-text text-center mb-30'>
                                <h4>STUDENTS</h4>
                            </div>
                            <ul className='testimonials'>
                                <Slider {...settings} ref={sliderRefStudent}>
                                    {studentTestimonials.map((item,index)=>{
                                        return (
                                            <li>

                                                <p>{item['testimony']}</p>
                                                <img src={`${item['image']}`} />
                                                <h6>{item['name']}</h6>
                                            </li>
                                        )
                                    })}
                                </Slider>
                            </ul>
                        </div>
        
                        <div id="partner-school" class="tab-pane fade">
                            <div className="go-to-slide">
                                {schoolPartnersTestimonials.map((item,index)=>{
                                    return (
                                        <a key={index} className={ isActive == index ? "active" : null} href="#" onClick={handleOnClickPartners}>
                                            <img src={`${item['image']}`} data-slide={`${index}`}/>
                                        </a>
                                    )
                                })}
                            </div>
                            <div className='visual-text text-center mb-30'>
                                <h4>Partner Schools</h4>
                            </div>
                            <ul className='testimonials'>
                                <Slider {...settings} ref={sliderRefPartners}>
                                    {schoolPartnersTestimonials.map((item,index)=>{
                                        return (
                                            <li>
                                                <p>{item['testimony']}</p>
                                                <h6>{item['name']}</h6>
                                            </li>
                                        )
                                    })}
                                </Slider>
                            </ul>
                        </div>
                        
                        <div id="instructors" class="tab-pane fade">
                            <div className="go-to-slide">
                                {instructorTestimonials.map((item,index)=>{
                                    return (
                                            <a key={index} className={ isActive == index ? "active" : null} href="#" onClick={handleOnClickInstructors}>
                                            <img src={`${item['image']}`} data-slide={`${index}`}/>
                                        </a>
                                    )
                                })}
                            </div>
                            <div className='visual-text text-center mb-30'>
                                <h4>Instructors</h4>
                            </div>
                            <ul className='testimonials'>
                                <Slider {...settings} ref={sliderRefInstructors}>
                                    {instructorTestimonials.map((item,index)=>{
                                        return (
                                            <li>
                                                <p>{item['testimony']}</p>
                                                <h6>{item['name']}</h6>
                                            </li>
                                        )
                                    })}
                                </Slider>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='partner-sponsor'>
                <div className='container'>
                    <div className='partner-sponsor-wrap'>
                        <div className='visual-text text-center mb-30'>
                            <Fade top>
                                <h3>Our Partners & Sponsors</h3>
                            </Fade>
                            <Fade bottom>
                                <p>It takes a village to create high quality, high impact STEM education and make it accessible to all. We are grateful to our sponsors and partners for helping make it happen.</p>
                            </Fade>
                        </div>
                        <ul>
                            {partnersLogo.map((item,index)=>{
                                return (
                                    <li className={index >= 5 ? 'hide' : 'show'}  ><img src={item["src"]} /></li>
                                )
                            })}
                        </ul>

                        <div class="row home-banner mt-30 p-0">
                            <div class="col-md-6 text-right">
                                <Link className='btn btn-outline link' to='/about_us'> SEE MORE</Link>
                            </div>
                            <div class="col-md-6 text-left">
                                <Link className='btn btn-outline link' to='/involved' > PARTNER WITH US</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='news-sec'>
                <div className='visual-text text-center mb-30'>
                    <h3>In the News</h3>
                </div>
            </div>
    
            <div className='featured-logo'>
                <div className='featured-in-section container-1920'>
                    <div className='visual-text text-center mb-30'>
                        <h4>Featured In</h4>
                    </div>

                    <ul className='featuredLogo'>
                        {featuredLogo.map((item,index)=>{
                            return (
                                {...index / 2 ?
                                    <Fade top>
                                        <li className={index >= 5 ? 'hide' : 'show'}  ><img src={item["src"]} /></li>
                                    </Fade>
                                    :
                                    <Fade bottom>
                                        <li className={index >= 5 ? 'hide' : 'show'}  ><img src={item["src"]} /></li>
                                    </Fade>
                                }
                            )
                        })}
                    </ul>
                </div>
        
                <div className='featured-post'>
                    <ul>
                        <Slider {...FeaturedSettings}>
                            {featuredPost.map((item,index)=>{
                                return (
                                    <li className='featuredPost-item'>
                                        <div className='featuredPost-img'>
                                            <img src={item["img"]} />
                                        </div>
                                        <div className='featuredPost-desc'>
                                            <h4>{item["title"]}</h4>
                                            <p>{item["description"]}</p>
                                            <a className='link' href={item["link"]}>Read More</a>
                                        </div>
                                    </li>
                                )
                            })}
                        </Slider>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;
