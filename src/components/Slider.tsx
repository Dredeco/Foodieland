
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from "react-dom";

export function Slider() {

    return (
            <Carousel 
            showArrows={false} 
            showStatus={false}
            autoPlay={false}
            infiniteLoop={true}
            interval={5000}
            transitionTime={2000}
            className="relative items-center justify-center w-full mt-40"
            >
                <div className="w-[1280px] h-[620px] bg-[#E7FAFE] rounded-xl ml-20">
                    <p>Ola mundo 1</p>
                </div>

                <div className="w-[1280px] h-[620px] bg-[#E7FAFE] rounded-xl mx-10">
                    <p>Ola mundo 2</p>
                </div>

                <div className="w-[1280px] h-[620px] bg-[#E7FAFE] rounded-xl mx-10">
                    <p>Ola mundo 3</p>
                </div>
            </Carousel>
    )
}