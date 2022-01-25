import Layaut from '../layout/Layout'
import homeVideo from "../img/video/271615819_645188563579221_9010116722901761548_n.mp4"
import ReactPlayer from 'react-player'
import { useEffect } from "react";
import {get_products_frontpage} from "../redux/actions/product"
import { connect } from "react-redux"

import Feature from '../components/homepage/Featured';
const Home = ({
    get_products_frontpage,
    producstFrontpage
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        get_products_frontpage();
    }, []);
    
    return (
        <Layaut>
            <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
                <div className="max-w-xl mx-auto lg:max-w-screen-xl">
                    <div className="mb-16 lg:max-w-lg lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                    CLOTHING
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Texto relevante
                                <br className="hidden md:block" />
                                jumps over{' '}
                                <span className="inline-block text-deep-purple-accent-400">
                                   llamativo
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae. explicabo.
                            </p>
                        </div>
                        <div className="flex items-center">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Ver cata
                            </a>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end" >
                    <ReactPlayer
                        url={homeVideo} playing loop muted width={550} height={550} />
                </div>

            </div>

            <div>
            
            <Feature data={producstFrontpage} />
            </div>
        </Layaut>
    );
};

const mapStateToProps = state =>({
    producstFrontpage : state.Product.producstFrontpage

})

export default connect (mapStateToProps,{
    get_products_frontpage
}) (Home)

