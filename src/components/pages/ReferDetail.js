import React from 'react';
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";

class ReferDetail extends React.Component {
    componentDidMount(){

        document.querySelector("body").style.background = "#F0EEEB";
        this.mainAnimation();
    }

    mainAnimation = () => {
        gsap.to("#header", {
            duration: 0.8, 
            top: 0,
        });
        gsap.to("#footer", {
            duration: 0.8, 
            bottom: 0,
            delay: 0.2,
        });
        gsap.to(".refer__inner", {
            duration: 0.8, 
            bottom: 0,
            delay: 0.6,
        });
    }

    render(){
        return (
            <>
                <Header color="light" />
                <Contents>
                    <section className="refer__cont light">
                        <div className="container">
                            <div className="refer__inner">
                                ddd
                            </div>
                        </div>
                    </section>
                </Contents>
                <Footer color="light" />
            </>
        )
    }
}


export default ReferDetail