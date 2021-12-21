import Layout from "../../../App/Components/Layout/Layout";
import HeadTags from "../../../App/Components/HeadTags/HeadTags";
import HomePageContainer from "../../../App/Containers/HomePageContainer/HomePageContainer";




export default function Home() {
  return (
    <Layout>
      <HeadTags title='home' />
      <div>
     <HomePageContainer/>
      </div>
     
    </Layout>
  );
}
