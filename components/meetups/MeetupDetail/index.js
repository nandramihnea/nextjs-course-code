import React from "react";
import classes from "./MeetupDetail.module.css";

export default function MeetupDetail({ details }) {
  return (
    <section className={classes.wrapper}>
      <img src={details.image} alt={details.title} />
      <h1>{details.title}</h1>
      <address>{details.address}</address>
      <p>{details.description}</p>
    </section>
  );
}
