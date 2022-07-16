import classes from "./MeetupItem.module.css";

export default function MeetupItem({ meetup }) {
  return (
    <div className={classes.card}>
      <img src={meetup.image} alt={meetup.title} className={classes.image} />
      <div className={classes.cardInfo}>
        <h3>{meetup.title}</h3>
        <p className={classes.description}>{meetup.description}</p>
        <p className={classes.address}>{meetup.address}</p>
      </div>
    </div>
  );
}
