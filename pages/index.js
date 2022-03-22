import MeetupList from "../components/meetups/MeetupList.js";
import { MongoClient } from "mongodb";
import {} from "next/router";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Rajastan Meetup.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Amber_palace%2C_Jaipur.jpg/1024px-Amber_palace%2C_Jaipur.jpg",
    address: "Jaipur, Rajastan, India",
    description:
      "Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 percent of Indias total geographical area. It is the largest Indian state by area and the seventh largest by population.",
  },
  {
    id: "m2",
    title: "Goa Meetup.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Goa_beautiful_beach.JPG/280px-Goa_beautiful_beach.JPG",
    address: "Panjim, Goa, India",
    description:
      "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",
  },
  {
    id: "m3",
    title: "West Bengal Meetup.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Howrah_bridge_betwixt_Lights.jpg/250px-Howrah_bridge_betwixt_Lights.jpg",
    address: "Kolkata, West Bengal, India",
    description:
      "West Bengal is a state in eastern India, between the Himalayas and the Bay of Bengal. Its capital, Kolkata (formerly Calcutta), retains architectural and cultural remnants of its past as an East India Company trading post and capital of the British Raj. The citys colonial landmarks include the government buildings around B.B.D. Bagh Square, and the iconic Victoria Memorial, dedicated to Britains queen",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
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
      meetups: meetups.map(meetup =>({
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
