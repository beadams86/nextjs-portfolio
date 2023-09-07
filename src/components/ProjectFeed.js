import Link from 'next/link'
import Image from 'next/image'

const ProjectFeed = ({ projects = [] }) => {
  console.log('projects', projects);
  return (
    <section className="project-feed">
    {projects && projects.length
      ? projects.map((project = {}) => {
          const { title, description, image, slug } = project;
          return (
            <section className={`project-card project-${slug}`}>
              <div className="project-card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <Link href={`/projects/${title}`} className="button">Read Case Study</Link>
              </div>
              <div className="project-card-image">
                <Image src={image}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </section>
            );
        })
      : <h3>No Projects Found.</h3>
    }
    </section>
  )
  
};

export default ProjectFeed;
