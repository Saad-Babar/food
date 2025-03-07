"use client";

import React, { useEffect, useState } from "react";

function Preloader() {
    const [opacity, setOpacity] = useState(1); // Ensure SSR and CSR match initially

    useEffect(() => {
        setOpacity(0.999245); // Update opacity after mounting to prevent hydration errors
    }, []);

    return (
        <div className="preloader" style={{ opacity }}>
            <div className="preloader__image"></div>
        </div>
    );
}

export default Preloader;
