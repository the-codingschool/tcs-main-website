import './testimonial.scss'


import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import React, { useEffect } from 'react';


import Fade from 'react-reveal/Fade'    



const schoolPartnersTestimonials = [
    {
        title: 'Ben Iseke',
        description: '“The program runners at Qubit by Qubit are incredibly devoted educators. Their willingness to engage with feedback showed how much they wanted the program to be deeply excellent, and that dedication showed in every aspect of the program that I got a chance to see. The program is genuinely incredible, and undoubtedly life-changing for many of the students that they work with. QxQ is creating the future that we need.”',
        tag: 'Bergen County Academies'
    },
    {
        title: 'Heather Pereira',
        description: '“Qubit by Qubit has been a wonderful partner to work with. From assisting with ensuring that the course is approved by the University of California to providing a streamlined and straightforward enrollment process, the management of the course has been great.”',
        tag: ''
    },
    {
        title: 'William K. Funderburk',
        description: '“My own participation in this course has resulted in an overall better physics curriculum at my school! and I`m very thankful I met them. I`m so pleased to recommend their high-school course in Quantum Computing to any high school.”',
        tag: ''
    }
];
const instructorTestimonials = [
    {
        tag: 'Google',
        title: 'Anthony Mirand',
        description: '“I wish I had learned coding earlier. In beginning college computer science courses you are thrown in and expected to know so much already. These kids we’re teaching now have a huge advantage -- they’ll have the solid foundation and ability to build their knowledge from the ground up -- helping them understand and learn so much more, so much easier. The beneficial impact this education at a young age will have on them is immeasurable.”'
    },
    {
        tag:'Amazon, TCS Advisory Board',
        title: 'Kelly Ellis',
        description: '“Coding gives confidence to attack problems that seem larger than life and impossible otherwise. Entering into college CS classes is daunting. It’s a scary feeling being so far behind because you never learned any coding skills prior to college. I want to help young kids learn coding, because I know it will help them succeed in any discipline. These kids we’re teaching are going to be super well equipped.”'
    }
];
const studentTestimonials = [
    {
        tag: '',
        title: 'Faraz',
        description: '“This program has given me a thorough introductionary understanding of quantum computing and mainly how interesting and fun it is. If the correct opportunity arises in the future, I would be more than happy to join another course/study about quantum computing again. It would not only be a missed opportunity if I didn`t further my knowledge of quantum computing, but also a missed opportunity to enjoy a very fun subject.”'
    },
    {
        tag:'',
        title: 'Lucy',
        description: '“I appreciated the opportunity to continue learning during my winter break, interact with diverse students, and engage in material about a topic I would not have the chance to learn about otherwise.”'
    },
    {
        tag:'',
        title: 'Michelle',
        description: '“I am so lucky that I am learning quantum computing as a high school student. Having gone through this course, I feel that I can overcome any academic challenge that awaits in my high school, and later college, STEM classes. I feel so powerful, and this course further developed my interest in conducting research in the field.”'
    }
];

var settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode:false
  };
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
        title: 'Quantum Computing: Summer Camps,Research Opportunities & Internships',
        img: '/images/pro-post1.png',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
        link:'#0'
    },
    {
        name: '1',
        title: 'Quantum Computing: Summer Camps,Research Opportunities & Internships',
        img: '/images/pro-post1.png',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
        link:'#0'
    },
    {
        name: '1',
        title: 'Quantum Computing: Summer Camps,Research Opportunities & Internships',
        img: '/images/pro-post1.png',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
        link:'#0'
    }
    ,
    {
        name: '1',
        title: 'Quantum Computing: Summer Camps,Research Opportunities & Internships',
        img: '/images/pro-post1.png',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
        link:'#0'
    },
    {
        name: '1',
        title: 'Quantum Computing: Summer Camps,Research Opportunities & Internships',
        img: '/images/pro-post1.png',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
        link:'#0'
    },
    {
        name: '1',
        title: 'Quantum Computing: Summer Camps,Research Opportunities & Internships',
        img: '/images/pro-post1.png',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
        link:'#0'
    }
];
const partnersLogo = [
    {
        src: '/images/dod-stem.svg',
    },
    {
        src: '/images/google.svg',
    },
    {
        src: '/images/ibm.svg',
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

function Testimonial() {
    function onLoad() {
        
    }

    
  return (
    <div id="" className="testimonia-sec"  >
        <Fade top><div className='container'>
            <div className='visual-text text-center mb-30'>
            <h3>
                Testimonial
                </h3>
            
            </div>
            
            <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#studenst" className='active'>Students</a></li>
                <li><a data-toggle="tab" href="#partner-school">Partner Schools</a></li>
                <li><a data-toggle="tab" href="#instructors">Instructors</a></li>
            </ul>
            
        </div>
        </Fade>
        <div className='testimonia-sec-bg' style={{ backgroundImage: `url("/images/test-images.png")` }}>
                <div className='container'>
            

            <div class="tab-content mt-50">
                <div id="studenst" class="tab-pane fade in active show">
                <div className='visual-text text-center mb-30'>
                    <h4>
                    STUDENTS
                    </h4>
                </div>
                
                <ul className='testimonials'>
                    <Slider {...settings}>
                    {studentTestimonials.map((item,index)=>{
                    return (
                    
                    //<li key={index}>{item['title']}</li>
                    <li>
                        <p>{item['description']}</p>
                        <h6>{item['title']}</h6>
                        <span>{item['tag']}</span>
                    </li>
                    )
                    })}
                    </Slider>
                </ul>

                </div>
                <div id="partner-school" class="tab-pane fade">
                <div className='visual-text text-center mb-30'>
                <h4>
                    Partner Schools
                    </h4>
                </div>
                <ul className='testimonials'>
                    <Slider {...settings}>
                    {schoolPartnersTestimonials.map((item,index)=>{
                    return (
                    
                    //<li key={index}>{item['title']}</li>
                    <li>
                        <p>{item['description']}</p>
                        <h6>{item['title']}</h6>
                        <span>{item['tag']}</span>
                    </li>
                    )
                    })}
                    </Slider>
                </ul>
                </div>
                <div id="instructors" class="tab-pane fade">
                <div className='visual-text text-center mb-30'>
                    <h4>
                    Instructors
                    </h4>
                </div>
                <ul className='testimonials'>
                    <Slider {...settings}>
                    {instructorTestimonials.map((item,index)=>{
                    return (
                    
                    //<li key={index}>{item['title']}</li>
                    <li>
                        <p>{item['description']}</p>
                        <h6>{item['title']}</h6>
                        <span>{item['tag']}</span>
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
                <Fade top><h3>
                        Our Partners & <span className='highlight-underline'>Sponsors</span>
                    </h3></Fade><Fade bottom>
                    <p>It takes a village to create high quality, high impact STEM education and make it accessible to all. We are grateful to our sponsors and partners for helping make it happen.</p>
                    </Fade>
                </div>
             
                
                <ul >
                {partnersLogo.map((item,index)=>{
                    return (
                        <li className={index >= 5 ? 'hide' : 'show'}  ><img src={item["src"]} /></li>
                    )
                })}
                </ul>
                <div class="row home-banner mt-30 p-0">
                    <div class="col-md-6 text-right">
                        <a class="btn btn-primary link" 
        >SEE MORE</a>
                    </div>
                    <div class="col-md-6 text-left">
                        <a class="btn btn-outline link">PARTNER WITH US</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className='news-sec'>
            <div className='visual-text text-center mb-30'>
                <h3>
                    In the News
                </h3>
            </div>

        </div>
        <div className='featured-logo'>
            <div className='container container-1920'>
            <div className='visual-text text-center mb-30'>
                <h4>
                Featured In
                </h4>
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
                            <a className='link' href='{item["link"]}'>Read More</a>
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