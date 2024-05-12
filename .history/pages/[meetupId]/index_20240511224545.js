import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
      title='First Meetup'
      address='Some Street 5, Some City'
      description='This is a first meetup'
    />
  );
}
// this function is necessary if you used getStaticProps if should now where it should update data and in this case that 
//would be all the items in dummy data

// export async function getStaticPaths() {
//     return {
    // this line 
//       fallback: false,
//       paths: [
//         {
//           params: {
//             meetupId: 'm1',
//           },
//         },
//         {
//           params: {
//             meetupId: 'm2',
//           },
//         },
//       ],
//     };
//   }
  //because the data in details wont change that much getstatic props would be a goof way to fetch data
  export async function getStaticProps(context) {
    // fetch data for a single meetup
  
    const meetupId = context.params.meetupId;
  
    console.log(meetupId);
  
    return {
      props: {
        meetupData: {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
          id: meetupId,
          title: 'First Meetup',
          address: 'Some Street 5, Some City',
          description: 'This is a first meetup',
        },
      },
    };
  }



export default MeetupDetails;