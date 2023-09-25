import Splash from '../components/Splash';
import ProjectFeed from '../components/ProjectFeed';


import GeospatialImage from '../assets/projects/geospatial/Geospatial-Search.jpg';
import OceanographyImage from '../assets/projects/oceanography/ocean_preview.jpeg';
import EarthScienceImage from '../assets/projects/earth-science/earth-science.jpg';
import { siteMetadata } from '../metadata';

const Home = () => {
  const projects = [
    {
      title: 'Geospatial Application with serious capabilities!',
      description: "A React application, built on Node & AWS, packed with a bunch of unique & powerful features. I've operated as the lead FE Engineer & UI/UX designer since 2021, shipping numerous vital features.",
      slug: 'geospatial',
      tags: ['Frontend Engineering', 'UI/UX Design', 'CI/CD', 'React', 'JavaScript'],
      image: GeospatialImage
    },
    {
      title: 'Full UI/UX Overhaul for an Ocean Sciences Org',
      description: "Designing & building out a new design & website templates in code, for a well respected Oceanographic institute.",
      slug: 'oceanography',
      tags: ['Frontend Engineering', 'UI/UX Design'],
      image: OceanographyImage
    },
    {
      title: 'NASA + USGS Website & Data Portal Overhaul',
      description: "Designing & developing a completely new website, including a Django backed CMS & a powerful new data search portal.",
      slug: 'earth-science',
      tags: ['Frontend Engineering', 'UI/UX Design', 'JavaScript', 'Django'],
      image: EarthScienceImage
    }
  ]

  const skills = [
    {
      name: 'Frontend Developer',
      list: [
        'HTML, CSS, JavaScript',
        'React',
        'Sass',
        'Jest',
        'React Testing Library',
        'Git, Version Control',
        'Gitlab CI',
        'Jenkins',
        'Angular',
        'Typescript',
        'AWS',
        'NodeJS'
      ]
    },
    {
      name: 'UI/UX Designer',
      list: [
        'UI Design',
        'Prototyping',
        'Wireframes',
        'Component Libraries',
        'User Research',
        'User Testing',
        'Graphic Design',
        'Information Architecture',
        'Design Systems',
        'Accessibility'
      ]
    }
  ]
  const { name, jobTitle, subTitle } = siteMetadata || {};
  return (
    <>
      <Splash
        header={<><strong>{name}</strong><br/>{jobTitle}</>}
        subHeader={subTitle}
        className="home-splash"
      />
      <div className="container skills-list">
        <div className="row">
          {skills.map((skill = {}) => {
            const { name, list } = skill;
            return (
            <div className="col-half">
              <h4>{name}</h4>
              <ul>
                {list.map(skill => <li>{skill}</li>)}
              </ul>
            </div>
            )
          })}

        </div>
      </div>
      <div className="container">
        <ProjectFeed projects={projects} />
      </div>
    </>
  );
};

export default Home;
