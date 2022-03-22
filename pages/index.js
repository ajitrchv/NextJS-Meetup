import MeetupList from "../components/meetups/MeetupList.js";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react/cjs/react.production.min";
const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
          <title>React Meetups</title>
            <meta
            name= 'description'
            content="a large collection of places to meet up!"
            />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
};

export async function getStaticProps() {
  /// //fetch data from api or server
  const client = await MongoClient.connect(
    "mongodb+srv://hedreich:bqMqgjPjeLBVX3Sq@cluster0.fbx9r.mongodb.net/hedreich?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

// //======an aleternative===============

// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//     //fetch data from api
//     return{
//         props:{
//             meetups:DUMMY_MEETUPS,
//         }
//     };
// }

////===^^no revalidate needed, it runs eveery incoming request

export default HomePage;
