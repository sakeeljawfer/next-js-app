import { Fragment ,useEffect , useState } from "react";
import MeetupList from "../../components/meetups/MeetupList";
import Layout from "../../components/layout/Layout";


export default function Homepage(){

  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    fetch('http://localhost:8000/blogs')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
}, []);

if (isLoading) {
  return (
    <section>
      <p>Loading...</p>
    </section>
  );
}



    return(
        <Fragment>
            <Layout>
            <MeetupList meetups={loadedMeetups}/>
            </Layout>
        </Fragment>
    );
}