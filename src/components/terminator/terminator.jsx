import React from "react";

const Terminator = (props) => {
    const { id, name, serialNumber } = props
    return (
        <div className="tc bg-gray dib br3 pa3 ma2 grow">
            <img src={`https://robohash.org/${id}?size=180x180`} alt="Terminator" />
            <div>
                <h2>{name}</h2>
                <p>SN: {serialNumber}</p>
            </div>
        </div>
    )
}

export default Terminator