import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const addressInputRef = useRef();
  const imageInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      description: enteredDescription,
      address: enteredAddress,
      image: enteredImage,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.wrapper}>
        <label htmlFor="title">Title</label>
        <input ref={titleInputRef} type="text" name="title" id="title" />
      </div>

      <div className={classes.wrapper}>
        <label htmlFor="description">Description</label>
        <textarea
          ref={descriptionInputRef}
          type="text"
          name="description"
          id="description"
        ></textarea>
      </div>

      <div className={classes.wrapper}>
        <label htmlFor="address">Address</label>
        <input ref={addressInputRef} type="text" name="address" id="address" />
      </div>

      <div className={classes.wrapper}>
        <label htmlFor="image">Image URL</label>
        <input ref={imageInputRef} type="text" name="image" id="image" />
      </div>

      <button className={classes.button} type="submit">
        Add Meetup
      </button>
    </form>
  );
}
