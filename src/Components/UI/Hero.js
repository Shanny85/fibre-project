import React, {useRef} from "react";
import CountUp from "react-countup";

const Hero = () => {
    const headerRef = useRef(null);


    const handleClick = e => {
        e.preventDefault();
        const targetAttribute = e.target.getAttribute('href');
        const location = document.querySelector(targetAttribute).offsetTop;

        window.scrollTo({
            top: location - 80,
            left: 0,
        });
    };


    return(
        <section ref={headerRef} id="hero" className="pt-0">
            <div className="container pt-14" id="home">
                <div className="flex flex-col lg:flex-row
                items-center justify-between
                px-4 lg:px-0
                grow relative">
                    {/*-------------HERO CONTENT LEFT SIDE-------------*/}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className="text-hOneColor
                                       font-[800]
                                       text-[1.8rem]
                                       leading-[35px]
                                       sm:text-[40px]
                                       sm:leading-[46px]
                                       drop-shadow"
                        >
                            Unlock Your Connectivity Today!
                        </h1>
                        <p
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            className="text-left lg:text-left
                                       max-w-md mx-auto mt-8
                                       font-[400] text-[16px]
                                       leading-7
                                       lg:pr-10
                                       text-smallText"
                        >
                            Experience the extraordinary potential of fiber-optic internet with us.
                            Unleash the power of seamless Uncapped connectivity.
                            Don't miss out on the lightning-fast,
                            dependable internet experience you deserve.
                        </p>
                        <div data-aos="fade-up" data-aos-duration="1800" data-aos-delay="200"
                             className="mt-7 flex flex-col items-center lg:items-start gap-6">
                            <a onClick={handleClick}
                                href="#contact"
                                className="bg-hOneColor text-newDarkAccent
                                    font-[600] flex items-center gap-2
                                    hover:bg-newDarkAccent hover:text-headingText
                                    ease-in duration-300 py-2 px-4 rounded-[8px] mb-5">
                                Check my coverage
                            </a>
                        </div>
                    </div>
                    {/*-------------HERO CONTENT RIGHT SIDE END-------------*/}
                    <div className="mt-10 lg:mt-5 text-smallText text-[16px]">
                        <ul className="lg:justify-center">
                            <li data-aos="fade-left"
                                data-aos-duration="1500"
                                className="flex items-center">
                                <i className="ri-checkbox-circle-line text-3xl text-headingText pr-1 drop-shadow"></i>
                                No Long-Term Contracts.
                            </li>
                            <li data-aos="fade-left"
                                data-aos-duration="1500"
                                className="flex items-center">
                                <i className="ri-checkbox-circle-line text-3xl pr-1 text-headingText drop-shadow"></i>
                                Effortless Payments.
                            </li>
                            <li data-aos="fade-left"
                                data-aos-duration="1500"
                                className="flex items-center">
                                <i className="ri-checkbox-circle-line text-3xl pr-1 text-headingText drop-shadow"></i>
                                Month-to-Month Freedom.
                            </li>
                            <li data-aos="fade-left"
                                data-aos-duration="1500"
                                className="flex items-center">
                                <i className="ri-checkbox-circle-line text-3xl pr-1 text-headingText drop-shadow"></i>
                                Zero Paperwork Hassles.
                            </li>
                            <li data-aos="fade-left"
                                data-aos-duration="1500"
                                className="flex items-center">
                                <i className="ri-checkbox-circle-line text-3xl pr-1 text-headingText drop-shadow"></i>
                                No Credit Checks Required.
                            </li>
                        </ul>
                    </div>
                </div>

                {/*-------------Count UP SECTION BELOW HERO-------------*/}
                <div id="below_hero"
                     className="flex flex-wrap justify-center
                                text-center mt-10 gap-3
                                md:gap-0 items-center
                                md:text-center md:justify-evenly">
                    <div data-aos="fade-left" data-aos-durations="1500" data-aos-delay="200" className="mb-10">
                        <h2 className="text-hOneColor font-[700] text-[32px] drop-shadow">
                            <CountUp start={0} end={1000} suffix=' +' />
                        </h2>
                        <h4 className="text-smallText font-[700] text-[18px] drop-shadow">
                            Satisfied Clients
                        </h4>
                    </div>
                    <div data-aos="fade-left" data-aos-durations="1500" data-aos-delay="250" className="mb-10">
                        <h2 className="text-hOneColor font-[700] text-[32px] drop-shadow">
                            <CountUp start={0} end={9} suffix='' />
                        </h2>
                        <h4 className="text-smallText font-[700] text-[18px] drop-shadow">
                            Service Providers
                        </h4>
                    </div>
                    <div data-aos="fade-left" data-aos-durations="1500" data-aos-delay="300" className="mb-10">
                        <h2 className="text-hOneColor font-[700] text-[32px] drop-shadow">
                            <CountUp start={0} end={100} suffix=' %' />
                        </h2>
                        <h4 className="text-smallText font-[700] text-[18px] drop-shadow">
                            Uncapped
                        </h4>
                    </div>
                    <div data-aos="fade-left" data-aos-durations="1500" data-aos-delay="300" className="mb-10">
                        <h2 className="text-hOneColor font-[700] text-[32px] drop-shadow">
                            <CountUp start={0} end={100} suffix=' %' />
                        </h2>
                        <h4 className="text-smallText font-[700] text-[18px] drop-shadow">
                            Network Stability
                        </h4>
                    </div>
                    <div data-aos="fade-left" data-aos-durations="1500" data-aos-delay="300" className="mb-10">
                        <h2 className="text-hOneColor font-[700] text-[32px] drop-shadow">
                            <CountUp start={0} end={100} suffix=' %' />
                        </h2>
                        <h4 className="text-smallText font-[700] text-[18px] drop-shadow">
                            Month to month
                        </h4>
                    </div>
                </div>

                {/*-------------Count UP SECTION RIGHT SIDE-------------*/}
            </div>
        </section>
    )
}
export default Hero;
