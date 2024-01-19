import imageA from  '../../../assets/banner/benefit-from-the-Quran.jpg'
import imageB from  '../../../assets/banner//image3.jpg'
import imageC from  '../../../assets/banner/image5.jpg'
import imageD from  '../../../assets//banner/imgae4.jpg'
import imageE from  '../../../assets/banner//image7.jpg'
import imageF from  '../../../assets/banner//image8.jpg'

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <div   data-aos="zoom-in" className='mx-auto  '>
            <AutoplaySlider play={true}cancelOnInteraction={false} interval={6000}
  >
       <div data-src={imageE} />
    <div data-src={imageF} />
    <div data-src={imageA} />
   
    <div data-src={imageB} />
    <div data-src={imageC} />
    <div data-src={imageD} />
 
     
   
  </AutoplaySlider>
        </div>
    );
};

export default Banner;