import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  console.log(props.meetups)
  return (
    <ul className={classes.list}>
      <li>
      {props.meetups.map(meetup => 
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      )}
      </li>
    </ul>

  );
}

export default MeetupList;
