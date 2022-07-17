import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      details={{
        id: "m1",
        title: "Meetup 1",
        image: "https://source.unsplash.com/random/landscape",
        address: "123 Main St",
        description: "This is a description",
      }}
    />
  );
}
