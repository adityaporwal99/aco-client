import React from "react";

function Loader() {
    return (
        <div>
            <div className="spinner-border spinner-border-sm" aria-hidden="true"></div>
            <strong role="status">Loading...</strong>
        </div>
    )
}

export default Loader