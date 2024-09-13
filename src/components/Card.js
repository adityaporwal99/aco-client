import React from "react";

function Card({ title, description, url, image, publishedAt, source }) {
    const brokenImg = `${process.env.PUBLIC_URL}/assets/brokenImg.jpg`
    return (
        <div>
            <div className="card p-2 border-dark cardHover">
                <img src={image ? image : brokenImg} className="card-img-top imgSize" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 50)}...</h5>
                    <p className="card-text">{description.slice(0, 90)}...</p>
                    <a href={url} target="blank" className="btn btn-primary">Read More</a>
                </div>
                <p className="card-text m-0"><small className="text-body-secondary">Source: {source ? source : 'Unknown'}</small></p>
                <p className="card-text"><small className="text-body-secondary">Published At: {publishedAt ? publishedAt : 'Unknown'}</small></p>
            </div>
        </div>
    )
}

export default Card