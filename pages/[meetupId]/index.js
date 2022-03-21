//import { Fragment } from "react/cjs/react.production.min";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Amber_palace%2C_Jaipur.jpg/1024px-Amber_palace%2C_Jaipur.jpg"
      title="Rajastan Meetup"
      address="Jaipur, Rajastan, India"
      description="Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 percent of Indias total geographical area. It is the largest Indian state by area and the seventh largest by population."
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  //fetch data here
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Amber_palace%2C_Jaipur.jpg/1024px-Amber_palace%2C_Jaipur.jpg",
        id: meetupId,
        title: "Rajastan Meetup",
        address: "Jaipur, Rajastan, India",
        description:
          "Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 percent of Indias total geographical area. It is the largest Indian state by area and the seventh largest by population.",
      },
    },
  };
}

export default MeetupDetails;
