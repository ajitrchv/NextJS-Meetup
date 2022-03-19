  
import NewMeetupForm from '../../components/meetups/NewMeetupForm.js'
import Layout from '../../components/layout/Layout.js'

  const NewMeetup = () => {
      function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
      }
    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  }
  export default NewMeetup;