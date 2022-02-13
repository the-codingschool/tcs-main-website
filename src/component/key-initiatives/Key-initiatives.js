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
            title: 'Proin et lorem lectus. Nam ac lacus vel metus lobortis aliquet.',
            img: '/images/code-connect.png',
            link:'#0',
            anim:'left'
        },
        {
            name: '1',
            title: 'Proin et lorem lectus. Nam ac lacus vel metus lobortis aliquet.',
            img: '/images/qubit.png',
            link:'#0',
            anim:'top'
        },
        {
            name: '1',
            title: 'Proin et lorem lectus. Nam ac lacus vel metus lobortis aliquet.',
            img: '/images/train.png',
            link:'#0',
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
                        
                    <img src={item["img"]} alt='students' />
                    <h6>{item["title"]}</h6>
                    <a className='link' href={item["link"]} >Read More</a>
                    </div>
                </div>
                </Fade>
                :
                <Fade right>
                <div className='col-md-4 postBox'>
                    <div className='postBox-wrap'>
                        
                    <img src={item["img"]} alt='students' />
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
        <Fade right><h4 className='w-80 m-auto'>We're making sure of it
55% of our students are from underrepresented backgrounds </h4></Fade>
            </div>
        </div>
    </div>
  )
}

export default KeyInitiatives;
