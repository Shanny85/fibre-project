import React from 'react';

const About = () => {
    return (
        <section className="pt-0" id="about">
            <div className="container pt-8">
                <div className="flex flex-col
                                items-center justify-center
                                px-4 lg:px-0
                                grow relative">
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="mt-5 text-hOneColor
                            font-semibold text-3xl
                            sm:text-4xl leading-9
                            drop-shadow">
                        How It Works...?
                    </h2>
                    {/*-------------ABOUT CONTENT-------------*/}
                    <div className="w-full
                                    text-left
                                    lg:text-left
                                    lg:flex-row-wrap
                                    sm: flex-col
                                    items-center
                                    justify-center
                                    ">
                        <p id="mission_statment_about"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            className="max-w-md mx-auto mt-8
                                       font-normal text-[16px]
                                       leading-7 lg:pr-10
                                       text-smallText">
                            <span className="text-hOneColor font-[700]">
                                Our Mission<br/></span> At{' '}
                            <span className="text-hOneColor font-[700]">Fibre R Us</span>,
                            we're on a mission to
                            transform your internet experience.
                            We believe that everyone deserves fast, reliable,
                            and hassle-free connectivity.
                            Say goodbye to the buffering wheel and hello to
                            seamless streaming, gaming, and work.
                        </p>
                        <p id="our_commitment_about"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            className="max-w-md mx-auto
                                       mt-8 font-normal
                                       text-[16px] leading-7
                                       lg:pr-10 text-smallText">
                            <span className="text-hOneColor font-[700] pb-3">
                                Our Commitment <br/></span>
                            We are committed to making your transition to fiber easy and enjoyable.
                        </p>
                        <p id="joining_about"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            className="max-w-md mx-auto mt-8
                                       font-normal text-[16px]
                                       leading-7 lg:pr-10
                                       text-smallText pb-3">
                            Here's how you can join the fiber revolution with us:
                            <span className="text-hOneColor font-[700] pb-3 ">
                                <br/>Fill Out the Form. </span>
                            Our sign-up form is simple and straightforward.
                            Just a few key details, and you're well on your way to a faster connection.
                            Review your information, hit that "Submit" button,
                            and your ticket to the world of fiber is secured.
                        </p>
                    </div>
                    {/*-------------ABOUT CONTENT END-------------*/}
                </div>
            </div>
        </section>
    );
};

export default About;
