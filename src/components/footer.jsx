import React from "react";
import {
    FaPhoneAlt,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaGithub,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <section className="footers">
            <div className="footers-center">
                <div className="footer">
                    <span>
                        <FaPhoneAlt /> Phone Support
                    </span>
                    <h6> 24 Hours a Day </h6>
                    <p> +91 697 004 1428 </p>
                </div>
                <div className="footer">
                    <span> Follow Us </span>
                    <h6> Social Media Center </h6>
                    <p>
                        <a title="Facebook">
                            <FaFacebookF />
                        </a>
                        <a title="Twitter">
                            <FaTwitter />
                        </a>
                        <a title="youTube">
                            <FaYoutube />
                        </a>
                        <a title="instagram">
                            <FaInstagram />
                        </a>
                        <a title="GitHub">
                            <FaGithub />
                        </a>
                    </p>
                </div>
                <div className="footer">
                    <span>
                        <FaMapMarkerAlt /> Address
                    </span>
                    <h6> 221B Baker St </h6>
                    <h6> Marylebone </h6>
                    <h6> London NW1 6XE, UK </h6>
                </div>
            </div>
        </section>
    );
};

export default Footer;
