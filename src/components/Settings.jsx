import React, { useEffect } from "react";
import Account from "./Account";

const Settings = () => {
    useEffect(() => {
        document.title = "Settings | Cortex";
    }, []);

    return (
        <>
            <Account />
        </>
    );
};

export default Settings;
