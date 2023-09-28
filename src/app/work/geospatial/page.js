import Splash from '../../../components/Splash';
import BGImage from '@/assets/projects/geospatial/geospatial-bg.png';
import Image from 'next/image';

import LandingPage from '@/assets/projects/geospatial/Geospatial-Landing-Page.jpg';
import SearchPage from '@/assets/projects/geospatial/Geospatial-Search.jpg';
import TasksPage from '@/assets/projects/geospatial/Tasks-Table.jpg';

/* Project Page */
const ProjectPage = () => {

  return (
    <>
      <Splash
        header={<strong>GIS React Application</strong>}
        className="work-project-splash"
        bgImage={BGImage}
      />
      <section>
        <div className="container">
          <h2>Project Overview</h2>
          <p>The client is a commercial geospatial company that now has a constellation of satellites orbiting earth that can be tasked by their clients to collect critical imagery.<br/>
          This project is under NDA, so I can only discuss details at a high level. All screenshots have been abstracted & designed to remove the client's IP.</p>

          <p>At a high level, the project consists of 3 React frontends, NodeJS BE, AWS services are heavily used (Lambda, EC2, S3 for asset storage, cloudfront, & cognito to name a few).</p>
          
          <p>The core functionality of the application is:
            <ul>
              <li><b>Search for existing imagery</b></li>
              <li><b>Purchase imagery (new or existing)</b></li>
              <li><b>Task Satellites to collect new imagery</b></li>
              <li><b>Admin controls</b></li>
              <li><b>Viewing imagery changes over time (e.g. "Temporal Change").</b></li>
            </ul>
          </p>
          <Image src={LandingPage}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt={"Geospatial Landing Page"}
          />
          <Image src={SearchPage}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt={"Geospatial Search Page"}
          />
          <Image src={TasksPage}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt={"Geospatial Tasked Table"}
          />
        </div>
      </section>
    </>
  );
}

export default ProjectPage;