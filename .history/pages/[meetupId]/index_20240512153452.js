// import MeetupDetail from '../../components/meetups/MeetupDetail';

// function MeetupDetails() {
//   return (
//     <MeetupDetail
//       image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
//       title='First Meetup'
//       address='Some Street 5, Some City'
//       description='This is a first meetup'
//     />
//   );
// }
// // this function is necessary if you used getStaticProps if should now where it should update data and in this case that 
// //would be all the items in dummy data

//  export async function getStaticPaths() {
//      return {
//     // this line tells that the fetch update would be only for some paths
//        fallback: false,
//        paths: [
//          {
//            params: {
//              meetupId: 'm1',
//            },
//          },
//          {
//            params: {
//              meetupId: 'm2',
//            },
//          },
//        ],
//      };
//    }
//   //because the data in details wont change that much getstatic props would be a goof way to fetch data
//   export async function getStaticProps(context) {
//     // fetch data for a single meetup
  
//     const meetupId = context.params.meetupId;
  
//     console.log(meetupId);
  
//     return {
//       props: {
//         meetupData: {
//           image:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//           id: meetupId,
//           title: 'First Meetup',
//           address: 'Some Street 5, Some City',
//           description: 'This is a first meetup',
//         },
//       },
//     };
//   }



// export default MeetupDetails;

import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://snzslt:WkagFGfF8W9QqMXa@cluster0.xeearmo.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}



export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://snzslt:WkagFGfF8W9QqMXa@cluster0.xeearmo.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;