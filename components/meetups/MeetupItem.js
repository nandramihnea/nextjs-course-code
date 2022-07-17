import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";

export default function MeetupItem({ meetup }) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + meetup.id);
  };

  return (
    <div className={classes.card}>
      <img src={meetup.image} alt={meetup.title} className={classes.image} />
      <div className={classes.cardInfo}>
        <h3>{meetup.title}</h3>
        <p className={classes.description}>{meetup.description}</p>
        <p className={classes.address}>{meetup.address}</p>
      </div>
      <button onClick={showDetailsHandler} className={classes.button}>
        Find out more
      </button>
    </div>
  );
}
