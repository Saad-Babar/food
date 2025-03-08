"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
    const [active, setActive] = useState("current"); // Ensure SSR consistency

    return (
        <header className="main-header">
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        <div className="main-menu__left">
                            <div className="main-menu__logo">
                                <Link href="/">
                                    <Image
                                        src="/assets/images/resources/logo-1.png"
                                        alt="Logo"
                                        width={150}
                                        height={50}
                                    />
                                </Link>
                            </div>
                            <div className="main-menu__shape-1 float-bob-x">
                                <Image
                                    src="/assets/images/shapes/main-menu-shape-1.png"
                                    alt="Shape"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="main-menu__right">
                            <div className="main-menu__right-top">
                                <div className="main-menu__right-top-left">
                                    <div className="main-menu__volunteers">
                                        <div className="main-menu__volunteers-icon">
                                            <Image
                                                src="/assets/images/icon/main-menu-heart-icon.png"
                                                alt="Heart Icon"
                                                width={22}
                                                height={22}
                                            />
                                        </div>
                                        <div className="main-menu__volunteers-text-box">
                                            <p className="main-menu__volunteers-text">
                                                <Link href="/become-volunteer">
                                                    Become a <span>volunteers</span>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-menu__right-top-right">
                                    <div className="main-menu__right-top-address">
                                        <ul className="list-unstyled main-menu__right-top-address-list">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-phone-call"></span>
                                                </div>
                                                <div className="content">
                                                    <p>Helpline</p>
                                                    <h5><a href="tel:980009630">+ 98 (000) - 9630</a></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-message"></span>
                                                </div>
                                                <div className="content">
                                                    <p>Send email</p>
                                                    <h5><a href="mailto:needhelp@company.com">needhelp@company.com</a></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-location"></span>
                                                </div>
                                                <div className="content">
                                                    <p>380 St Kilda Road</p>
                                                    <h5>Melbourne, Australia</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="main-menu__right-top-social">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="main-menu__right-bottom">
                                <div className="main-menu__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler">
                                        <i className="fa fa-bars"></i>
                                    </Link>
                                    <ul className="main-menu__list">
                                        <li className={`dropdown${active ? ` ${active}` : ""}`}>
                                            <Link href="/">Pages</Link>
                                            <ul>
                                                <li><Link href="/about">About</Link></li>
                                                <li><Link href="/volunteer">Volunteer</Link></li>
                                                <li><Link href="/become-volunteer">Become volunteer</Link></li>
                                                <li><Link href="/gallery">Gallery</Link></li>
                                                <li><Link href="/faq">FAQs</Link></li>
                                            </ul>
                                        </li>
                                        <li className={`dropdown${active ? ` ${active}` : ""}`}>
                                            <Link href="/">Donations</Link>
                                            <ul>
                                                <li><Link href="/donation">Donation</Link></li>
                                                <li><Link href="/donate-now">Donate Now</Link></li>
                                            </ul>
                                        </li>
                                        <li className={`dropdown${active ? ` ${active}` : ""}`}>
                                            <Link href="/">Events</Link>
                                            <ul>
                                                <li><Link href="/events">Events</Link></li>
                                            </ul>
                                        </li>
                                        <li className={`dropdown${active ? ` ${active}` : ""}`}>
                                            <Link href="/">News</Link>
                                            <ul>
                                                <li><Link href="/events">News</Link></li>
                                            </ul>
                                        </li>
                                        <li className={`dropdown${active ? ` ${active}` : ""}`}>
                                            <Link href="/">Shop</Link>
                                            <ul>
                                                <li><Link href="/events">Shop</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="main-menu__main-menu-content-box">
                                    <div className="main-menu__search-cat-btn-box">
                                        <div className="main-menu__search-box">
                                            <Link href="#" className="main-menu__search search-toggler">
                                                <i className="icon-magnifying-glass"></i>
                                            </Link>
                                        </div>
                                        <div className="main-menu__cat-box">
                                            <Link href="/cart" className="main-menu__cart">
                                                <i className="icon-shopping-cart"></i>
                                            </Link>
                                        </div>
                                        <div className="main-menu__btn-box">
                                            <Link href="/donate-now" className="main-menu__btn">
                                                <span className="fa fa-heart"></span> Donate now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
