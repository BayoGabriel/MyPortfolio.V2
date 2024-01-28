import React, { useEffect, useRef, useState } from 'react'
import "../Assets/Styles/port.css"
import imag from "../Assets/Images/kk.jpg"
import mrsam from "../Assets/Images/mrsam.jpg"
import profile from "../Assets/Images/profile.svg"

import prev from "../Assets/Images/prev.svg"
import next from "../Assets/Images/next.svg"
import tola from "../Assets/Images/WhatsApp Image 2023-12-03 at 20.45.56_6e726a7e.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Portfolio = (props) => {
    const { prop1, prop2, prop3 } = props;

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [counter3, setCounter3] = useState(0)
    
    const [quote1, setQuote1] = useState([
        'Excellent guy', "I'm a web developer myself so it was particularly nice working with Malik. Quality quality stuffs always.", "Hell yeah!, this guy's great. I've tried other developers and he's the only one that nailed exactly what I wanted perfectly.", "My search for developers ended when I met Malik. Top top guy."
    ])

    const [quote2, setQuote2] = useState([
        "I'm a web developer myself so it was particularly nice working with Malik. Quality quality stuffs always.", "Hell yeah!, this guy's great. I've tried other developers and he's the only one that nailed exactly what I wanted perfectly.", "My search for developers ended when I met Malik. Top top guy.", 'Excellent guy'
    ])

    const [quote3, setQuote3] = useState([
        "Hell yeah!, this guy's great. I've tried other developers and he's the only one that nailed exactly what I wanted perfectly.", "My search for developers ended when I met Malik. Top top guy.", 'Excellent guy', "I'm a web developer myself so it was particularly nice working with Malik. Quality quality stuffs always."
    ])

    const [name1, setName1] = useState([
        "MR SAM", "ADETOLA", "CARL JOHNSON", "DANIEL BAKER"
    ])

    const [name2, setName2] = useState([
        "ADETOLA", "CARL JOHNSON", "DANIEL BAKER", "MR SAM"
    ])

    const [name3, setName3] = useState([
        "CARL JOHNSON", "DANIEL BAKER","MR SAM",  "ADETOLA"
    ])

    const [rel1, setRel1] = useState([
        "Boss - soairafrica", "Boss - soairafrica", "Client", "Client"
    ])

    const [rel2, setRel2] = useState([
        "Boss - soairafrica", "Client", "Client", "Boss - soairafrica"
    ])

    const [rel3, setRel3] = useState([
        "Client", "Client", "Boss - soairafrica", "Boss - soairafrica"
    ])

    const [image1, setImage1] = useState([
        mrsam, tola, profile, profile
    ])
    const [image2, setImage2] = useState([
        tola, profile, profile, mrsam
    ])
    const [image3, setImage3] = useState([
        profile, profile, mrsam, tola
    ])
    const add1 = ()=> {
        setCounter1(e=> e + 1)
    }
    const add2 = ()=> {
        setCounter2(e=> e + 1)
    }
    const add3 = ()=> {
        setCounter3(e=> e + 1)
    }
    const sub1 = ()=> {
        if(counter1 === 0){
            setCounter1(image1.length -1)
        }else{
           setCounter1(e=> e - 1) 
        }
        
    }
    const sub2 = ()=> {
        if(counter2 === 0){
            setCounter2(image2.length -1)
        }else{
           setCounter2(e=> e - 1) 
        }
        
    }
    const sub3 = ()=> {
        if(counter3 === 0){
            setCounter3(image3.length -1)
        }else{
           setCounter3(e=> e - 1) 
        }
        
    }
    const sub = ()=> {
        sub1()
        sub2()
        sub3()
    }
    const add = ()=> {
        add1()
        add2()
        add3()
    }
    const buttonRef = useRef(null);
  return (
    <>
        <div className='container-fluid p-0 aboutme'>
            <div className='container'>
                <div className='row crrow' data-aos="fade-up" data-aos-duration="1000">
                    <div className='col-xl-4'>
                        <fieldset className='crfs'>
                            <legend><img src={image1[counter1 % image1.length]} /></legend>
                            <p className='reviewp1'>{name1[counter1 % name1.length]}</p>
                            <p className='reviewp2'>{rel1[counter1 % rel1.length]}</p>
                            
                            <p className='reviewp3'>{quote1[counter1 % quote1.length]}</p>
                        </fieldset>
                    </div>
                    <div className='col-xl-4 hide'>
                        <fieldset className='crfs'>
                            <legend><img src={image2[counter2 % image2.length]} /></legend>
                            <p className='reviewp1'>{name2[counter2 % name2.length]}</p>
                            <p className='reviewp2'>{rel2[counter2 % rel2.length]}</p>
                            <p className='reviewp3'>{quote2[counter2 % quote2.length]}</p>
                        </fieldset>
                    </div>
                    <div className='col-xl-4 crcol hide'>
                        <fieldset>
                            <img src={image3[counter3 % image3.length]}/>
                            <p className='reviewp1'>{name3[counter3 % name3.length]}</p>
                            <p className='reviewp2'>{rel3[counter3 % rel3.length]}</p>
                            <p className='reviewp3'>{quote3[counter3 % quote3.length]}</p>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div className='revbtndiv pt-5'>
                <div onClick={sub} className='revbutton2 mx-2'>
                <img src={prev} alt="" />
                </div>
                <div onClick={add} ref={buttonRef} className='revbutton mx-2'>
                <img src={next} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio