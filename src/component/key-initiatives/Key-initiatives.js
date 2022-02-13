import './key-initiatives.scss'


//import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade'
function KeyInitiatives() {
    function onLoad() {

    }
    let items=['Item 1','Item 2','Item 3','Item 4','Item 5'];
    const keyPost = [
        {
            name: '1',
            title: 'CodeConnects is the online learning initiative that aims to empower the next generation through computer science education',
            img: '/images/code-connect.png',
            link:'https://codeconnects.org/',
            anim:'left'
        },
        {
            name: '1',
            title: 'Qubit by Qubit is our quantum computing program accessible to high school students. ',
            img: '/images/qubit.png',
            link:'https://www.qubitbyqubit.org',
            anim:'top'
        },
        {
            name: '1',
            title: 'TRAIN is offering two first-of-its-kind programs focused on Machine Learning (ML), a subfield of AI.',
            img: '/images/train.png',
            link:'/train',
            anim:'right'
        }
    ];

  return (
    <div id="" className="KeyInitiatives mt-80 mb-80">
        <div className='container d-none'>
            <div className='visual-text text-center mb-30'>
                <h3>
                Key Initiatives
                </h3>
            </div>
        </div>
        <div className='w-100 d-none'>
            <div className='row'>
            {keyPost.map((item,index)=>{
                return (
                //<li key={index}>{item['title']}</li>
                {...index / 2 ?

                <Fade left>
                <div className='col-md-4 postBox'>
                    <div className='postBox-wrap'>

                    <img src={item["img"]} alt='/images/qubit.png' />
                    <h6>{item["title"]}</h6>
                    <a className='link' href={item["link"]} >Learn More</a>
                    </div>
                </div>
                </Fade>
                :
                <Fade right>
                <div className='col-md-4 postBox'>
                    <div className='postBox-wrap'>

                    <img src={item["img"]} alt='/images/qubit.png' />
                    <h6>{item["title"]}</h6>
                    <a className='link' href={item["link"]} >Learn More</a>
                    </div>
                </div>
                </Fade>
                }
                )
            })}
            </div>
        </div>
        <div className='container'>
        <div className='visual-text text-center mt-80'>
        <Fade left><h4 className='m-auto mb-30'>The future STEM workforce is <span className='highlight-underline'>diverse</span></h4></Fade>
        <Fade right><h4 className='w-80 m-auto'>We're making sure of it</h4></Fade>
        <Fade left><h4 className='m-auto mb-30'><span className='highlight-underline'>55%</span> of our students are from underrepresented backgrounds</h4></Fade>
            </div>
        </div>
    </div>
  )
}

export default KeyInitiatives;
