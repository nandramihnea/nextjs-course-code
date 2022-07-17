import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Meetup 1",
    image: "https://source.unsplash.com/random/landscape",
    address: "123 Main St",
    description:
      "This is a description of the meetup that will be displayed in the list This is a description of the meetup that will be displayed in the lis This is a description of the meetup that will be displayed in the lis This is a description of the meetup that will be displayed in the lis This is a description of the meetup that will be displayed in the lis",
  },
  {
    id: "m2",
    title: "Meetup 2",
    image: "https://source.unsplash.com/random/landscape",
    address: "123 Main St",
    description: "This is a description",
  },
  {
    id: "m3",
    title: "Meetup 3",
    image: "https://source.unsplash.com/random/landscape",
    address: "123 Main St",
    description: "This is a description",
  },
  {
    id: "m4",
    title: "Meetup 4",
    image: "https://source.unsplash.com/random/landscape",
    address: "123 Main St",
    description: "This is a description",
  },
  {
    id: "m5",
    title: "Meetup 5",
    image: "https://source.unsplash.com/random/landscape",
    address: "123 Main St",
    description:
      "This is a description This is a description This is a description This is a description This is a description This is a description This is a description",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
