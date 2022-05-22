import { Fragment ,useEffect , useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";


const DUMMY_DATA = [
    {
      id: "01",
      title: "Caps",
      image:
        "https://k.nooncdn.com/cms/pages/20220501/b799903a440285a4425c59f09dcca898/en_banner_37.jpg",
      price: "200LKR",
      description: "Caps available"
    },
    {
      id: "02",
      title: "Wallets",
      image:
        "https://k.nooncdn.com/cms/pages/20220501/b799903a440285a4425c59f09dcca898/en_banner_38.jpg",
      price: "200LKR",
      description: "wallets available"
    },
    {
      id: "03",
      title: "Watches",
      image:
        "https://k.nooncdn.com/cms/pages/20220501/b799903a440285a4425c59f09dcca898/en_banner_39.jpg",
        price: "200LKR",
        description: "watches available"
    }
  ];

export default function Homepage(){

  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{
    setLoadedMeetups(DUMMY_DATA)
  },[]);


    return(
        <Fragment>
            <Layout>
            <MeetupList meetups={loadedMeetups}/>
            </Layout>
        </Fragment>
    );
}