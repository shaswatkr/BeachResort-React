import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <Hero>
            <Banner title="404" subTitle="page not Found">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
    );
};

export default Error;
