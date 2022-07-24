import { MongoClient } from "mongodb";

// request to /api/new-meetup
// POST /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const uri =
      "mongodb+srv://mememihnea:T1Su1E7u6uUE8Cm4@first-cluster.mblrxss.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    const run = async () => {
      try {
        await client.connect();
        const db = client.db("meetups");
        const collection = db.collection("meetups");

        await collection.insertOne(data);
      } finally {
        await client.close();
      }
    };

    run().catch(console.dir);
    res.status(201).json({ message: "Meetup added successfully" });
  }
};

export default handler;
