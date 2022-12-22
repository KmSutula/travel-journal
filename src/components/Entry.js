import React from "react";

export default function Entry(props) {
  return (
    <div className="entry">
      <img
        className="locationimage"
        src={require(`/public/assets/${props.imageUrl}`)}
        alt=""
      />
      <div className="info">
        <p className="location">
          <i className="fa-solid fa-compass"></i>
          {props.location}
        </p>
        <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>

        <h1 className="title">{props.title}</h1>
        <p className="dates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
