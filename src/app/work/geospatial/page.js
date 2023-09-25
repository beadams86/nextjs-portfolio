import Splash from '../../../components/Splash';
import Image from '@/assets/projects/geospatial/geospatial-bg.png';

/* Project Page */
const ProjectPage = () => {

  return (
    <>
      <Splash
        header={<strong>Geospatial Project</strong>}
        className="work-project-splash"
        bgImage={Image}
      />
      <section>
        <div className="container">
          <h2>Project Overview</h2>
          <p>This project is under NDA, so I can only discuss details at a high level. All screenshots have been abstracted & designed to remove the client's IP.</p>
        </div>
      </section>
    </>
  );
}

export default ProjectPage;