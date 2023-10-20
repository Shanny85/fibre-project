import React from 'react';

const About = () => {

    return (
        <section
            className="pt-0" id="about">
            <div className="container pt-8" id="about">
                <div className="items-center justify-between
               sm:flex-col md:flex md:flex-row">
                    {/*-------------ABOUT CONTENT LEFT SIDE-------------*/}
                    <div className="w-full md:basis-1/2">
                        <h2 data-aos="fade-up" data-aos-duration="1500"
                            className="mt-5 text-hOneColor font-[800]
                            text-[1.8rem] leading-[35px]
                            sm:text-[40px] sm:leading-[46px] drop-shadow">
                            How It Works...?
                        </h2>
                        <p data-aos="fade-left"
                           data-aos-duration="1500"
                           className="flex gap-2 text-smallText
                           pr-8 mt-12 font-[500]
                           text-[18px] leading-7
                           sm:pl-3 ri-sm:pr-10 drop-shadow">
                            Blah blah blah
                        </p>
                    </div>
                    {/*-------------ABOUT CONTENT LEFT SIDE END-------------*/}

                </div>
            </div>

        </section>
    )

}

export default About;