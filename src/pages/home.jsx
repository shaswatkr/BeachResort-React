import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import Services from "../components/services";
import FeaturedRooms from "../components/featuredRooms";
import Footer from "../components/footer";

const Home = () => {
    return (
        <>
            <Hero>
                <Banner
                    title="Luxurious Rooms"
                    subTitle="deluxe rooms starting at Rs5999"
                >
                    <Link to="/rooms" className="btn-primary">
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>

            <Services />

            <FeaturedRooms />

            <Footer />
        </>
    );
};

export default Home;
