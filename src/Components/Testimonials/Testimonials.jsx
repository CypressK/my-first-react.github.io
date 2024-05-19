import React,{useRef,useEffect,useState} from 'react'
import './Testimonials.css'
import { FaLongArrowAltLeft,FaLongArrowAltRight } from "react-icons/fa";
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const userInfo=[
        {
            img: user_1,
            name: "William Jackson",
            school: "Edusity, UK",
            text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
          },
          {
            img: user_2,
            name: "David Wilson",
            school: "Edusity, HK",
            text: "Enrolling in the advanced technology program at Edusity has been a life-changing experience. The dedicated professors, cutting-edge curriculum, and hands-on learning opportunities have prepared me for a successful career in the tech industry."
          },
          {
            img: user_3,
            name: "Emma Ali",
            school: "Edusity, USA",
            text: "The decision to study at Edusity has been incredibly rewarding. The diverse and inclusive environment, paired with the exceptional support from faculty, has allowed me to thrive academically and personally. I highly recommend Edusity to anyone seeking a top-notch education."
          },
          {
            img: user_4,
            name: "Tom Williams",
            school: "Edusity, JP",
            text: "Attending Edusity has surpassed all my expectations. The innovative programs, state-of-the-art resources, and inspiring community have not only enhanced my knowledge but also ignited a passion for lifelong learning. I'm grateful for the opportunities Edusity has provided."
          },

    ]



    const sliderRef = useRef();
    const [tx,setTx] = useState(0)

    
    useEffect(() => {
        
        const slider = sliderRef.current;
        const slideCount = userInfo.length;

        const handleResize = () =>{
            if (window.innerWidth <= 750){
                slider.style.width = `${(slideCount * 100)}%`;
            }else{
                slider.style.width = `${(slideCount * 50)}%`;
            }
        };
        
        handleResize();

        window.addEventListener('resize',handleResize);

        return () =>{
            window.removeEventListener('resize',handleResize);
        }
       
        }, [userInfo.length]);

    
    const nextBtn = () => {
        const slideWidth = 100/userInfo.length;//no matter how many ul, they all contained in 100%, so use 100/length instead fixed 25%/50%


        const maxTranslateX = (window.innerWidth<=750) ? -(((userInfo.length-1)) * slideWidth):-(((userInfo.length-2)) * slideWidth)
        if (tx > maxTranslateX) {
            setTx(tx -slideWidth);
        }

    };


    const prevBtn = () => {
        const slideWidth = 100 / userInfo.length;
        if (tx < 0) {
            let newTx = tx + slideWidth;
            if (newTx > 0) {
                newTx = 0;
            }
            setTx(newTx);
        }
    };


    useEffect(() => {
        const slider = sliderRef.current;
        slider.style.transform = `translateX(${tx}%)`;
    }, [tx]);
    

  return (
    <div className='testimonials'>
        <FaLongArrowAltLeft className='bi left' onClick={prevBtn} /><FaLongArrowAltRight className='bi right' onClick={nextBtn} />
        <div className='slider'>
            <ul ref={sliderRef}>
                {userInfo.map((user,index)=>{
                    return(
                        <li key={index}>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user.img} alt={index} />
                                <div>
                                    <h3>{user.name}</h3>
                                    <span>{user.school}</span>
                                </div>
                            </div>
                            <p>{user.text}</p>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Testimonials