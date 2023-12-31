import React, {useRef, useEffect} from "react";


const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);


    const stickyFunctionForHeader = () => {
        window.addEventListener('scroll', ()=> {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky-head-section')
            }else{
                headerRef.current.classList.remove('sticky-head-section')
            }
        })
    }

    useEffect(() => {
        stickyFunctionForHeader()
        return window.removeEventListener('scroll', stickyFunctionForHeader)
    }, []);


    const handleClick = e => {
        e.preventDefault();
        const targetAttribute = e.target.getAttribute('href');
        const location = document.querySelector(targetAttribute).offsetTop;

        window.scrollTo({
            top: location - 80,
            left: 0,
        });
    };

    const menuSwitch = () => menuRef.current.classList.toggle('display_menu')

    return(

        <header ref={headerRef}
                className="w-full flex items-center
                           h-[80px] leading-[80px] z-10">
            <div className="container">
                <div className="flex items-center justify-between">
                    {/*-------------LOGO-------------*/}
                    <div className="flex items-center gap-[10px]">
                        <div className="leading-[20px]">
                            <h2 id="logo" className="flex items-center
                                sm:py-3 sm:px-3 rounded-[8px] sm:max-h-[40px]
                                py-1 px-3 bg-hOneColor
                                text-[25px] lg:text-[35px] md:text-[30px]
                                text-headingText font-[600] max-h-[40px]
                                drop-shadow">
                                Fibre r Us
                            </h2>
                        </div>
                    </div>
                    {/*-------------LOGO END-------------*/}
                    {/*-------------MENU START-------------*/}
                    <div className="menu" ref={menuRef} onClick={menuSwitch}>
                        <ul className="flex items-center gap-2 text-headingText">
                            <li>
                                <a onClick={handleClick}
                                   className="flex items-center gap-2
                                   text-smallText font-[600]
                                   py-2 px-4 rounded-[8px] max-h-[40px]
                                   hover:bg-hOneColor
                                   hover:text-headingText
                                   hover:font-[600] ease-in duration-300 drop-shadow"
                                   href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a onClick={handleClick}
                                   className="flex items-center gap-2
                                   text-smallText font-[600]
                                   py-2 px-4 rounded-[8px] max-h-[40px]
                                   hover:bg-hOneColor
                                   hover:text-headingText
                                   hover:font-[600] ease-in duration-300 drop-shadow"
                                   href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a onClick={handleClick}
                                   className="flex items-center gap-2
                                   text-smallText font-[600]
                                   py-2 px-4 rounded-[8px] max-h-[40px]
                                   hover:bg-hOneColor
                                   hover:text-headingText
                                   hover:font-[600] ease-in duration-300 drop-shadow"
                                   href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/*-------------MENU END-------------*/}
                    {/*-------------MENU START RIGHT-------------*/}
                    <div className="flex items-center gap-2">
                        <a onClick={handleClick}
                           href="#contact"
                           className="flex items-center gap-2
                                text-newDarkAccent font-[600]
                                sm:py-2 sm:px-4 rounded-[8px] sm:max-h-[40px]
                                py-1 px-3 max-h-[30px]
                                bg-hOneColor
                                hover:bg-newDarkAccent
                                hover:text-headingText
                                hover:font-[600] ease-in duration-300
                                drop-shadow sm:p-1">


                            Sign Up
                        </a>
                        <span onClick={menuSwitch}
                              className="cursor-pointer text-2xl
                              flex items-center
                              sm:py-2 sm:px-2 rounded-[8px] sm:max-h-[40px]
                              py-1 px-3 max-h-[30px]
                              hover:bg-hOneColor
                              hover:text-newDarkAccent
                              hover:drop-shadow
                              text-headingText md:hidden">
                            <i className="ri-menu-line "></i>
                        </span>
                    </div>
                    {/*-------------MENU START RIGHT END-------------*/}
                </div>
            </div>
        </header>
    );
}
export default Header;
