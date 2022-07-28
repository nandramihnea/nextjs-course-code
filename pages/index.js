import Head from 'next/head';
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Meetup DADADADAs</title>
        <meta
          name="description"
          content="A simple meetup app to share your meetups with other users" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}

export async function getStaticProps() {
  //fetch data from API
  let meetups;

  const uri =
    "mongodb+srv://mememihnea:T1Su1E7u6uUE8Cm4@first-cluster.mblrxss.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect();
  const db = client.db("meetups");
  const collection = db.collection("meetups");

  meetups = await collection.find({}).toArray();
  await client.close();

  const parsedData = meetups.map((meetup) => ({
    title: meetup.title,
    address: meetup.address,
    description: meetup.description,
    image: meetup.image,
    id: meetup._id.toString(),
  }));

  return {
    props: {
      meetups: parsedData,
    },
    revalidate: 1,
  };
}

export default HomePage;
