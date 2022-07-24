import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails({ meetup }) {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta
          name="description"
          content={meetup.description} />
      </Head>
      <MeetupDetail
        details={meetup}
      />
    </>
  );
}

export async function getStaticPaths() {
  let meetups;

  const uri =
    "mongodb+srv://mememihnea:T1Su1E7u6uUE8Cm4@first-cluster.mblrxss.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect();
  const db = client.db("meetups");
  const collection = db.collection("meetups");

  meetups = await collection.find({}, { _id: 1 }).toArray();
  await client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  const uri =
    "mongodb+srv://mememihnea:T1Su1E7u6uUE8Cm4@first-cluster.mblrxss.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri, { useUnifiedTopology: true });

  await client.connect();
  const db = client.db("meetups");
  const collection = db.collection("meetups");

  const selectedMeetup = await collection.findOne({ _id: ObjectId(meetupId) });
  await client.close();

  return {
    props: {
      meetup: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}
