"use client"; // Ensure this runs only on the client

import React, { useEffect, useState } from "react";

function StickyHeader() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Prevent mismatch by not rendering on the server

    return (
        <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content"></div>
        </div>
    );
}

export default StickyHeader;
