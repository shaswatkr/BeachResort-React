import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/roomContainer";

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our rooms">
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>

            <RoomContainer />
        </>
    );
};

export default Rooms;
