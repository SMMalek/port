import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import WrapperLeft from "./WrapperLeft";
import WrapperMiddle from "./WrapperMiddle";
import WrapperRight from "./WrapperRight";
import LeftTab from "./LeftTab"


function Wrapper() {
    const sectionStylebot = {
        backgroundImage: "url(" + require('./wave-bot.png') + ")"
    };
    const sectionStylemid = {
        backgroundImage: "url(" + require('./wave-mid.png') + ")"
    };
    const sectionStyletop = {
        backgroundImage: "url(" + require('./wave-top.png') + ")"
    };

    return (
        <div>
            <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                    <div className="wave waveTop" style={sectionStyletop}/>
                </div>
                <div className="waveWrapperInner bgMiddle">
                    <div className="wave waveMiddle" style={sectionStylemid}/>
                </div>
                <div className="waveWrapperInner bgBottom">
                    <div className="wave waveBottom" style={sectionStylebot}/>
                </div>
            </div>
            <div className="wrapper">
                <WrapperLeft/>
                <WrapperMiddle/>
                <WrapperRight/>
            </div>
        </div>



    )
}

export default Wrapper
/*            <div className="wrapper">
                <WrapperLeft/>
                <WrapperMiddle/>
                <WrapperRight/>
            </div>

             <div className="waveWrapperInner bgMiddle">
                <img className="wave waveMiddle"
                     src={ImgMid}   ></img>
            </div>
            <div className="waveWrapperInner bgBottom">
                <img className="wave waveBottom"
                     src={ImgBot}
                ></img>
            </div>

        <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
                <div className="wave waveTop"
                    style = {sectionStyle}
                ></div>
            </div>

        </div>


*/