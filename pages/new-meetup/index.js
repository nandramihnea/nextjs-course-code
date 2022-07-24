import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

export default function NewMeetupPage() {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>New Meetup page</title>
        <meta
          name="description"
          content="A simple meetup app to share your meetups with other users"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
