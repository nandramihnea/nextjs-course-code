import MeetupList from "../components/meetups/MeetupList";
import Layout from "../layout/Layout";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Meetup 1",
    image: "https://source.unsplash.com/random",
    address: "123 Main St",
    description:
      "This is a description of the meetup that will be displayed in the list This is a description of the meetup that will be displayed in the lis This is a description of the meetup that will be displayed in the lis This is a description of the meetup that will be displayed in the lis This is a description of the meetup that will be displayed in the lis",
  },
  {
    id: "m2",
    title: "Meetup 2",
    image: "https://source.unsplash.com/random",
    address: "123 Main St",
    description: "This is a description",
  },
  {
    id: "m3",
    title: "Meetup 3",
    image: "https://source.unsplash.com/random",
    address: "123 Main St",
    description: "This is a description",
  },
];

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />;
    </Layout>
  );
}

export default HomePage;
