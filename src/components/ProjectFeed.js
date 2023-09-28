import Link from 'next/link'
import Image from 'next/image'

const ProjectFeed = ({ projects = [] }) => {
  return (
    <section className="project-feed">
      <h2>Things I've Built.</h2>
      <p className="subheading">
        Much of my work is under NDA, let's connect and discuss more in depth!
      </p>

      {projects && projects.length
        ? projects.map((project = {}) => {
            const { title, description, image, slug } = project;
            return (
              <Link href={`/work/${slug}`} className={`project-card project-${slug}`}>
                <div className="project-card-content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <div className="project-card-image">
                  <Image src={image}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    alt={title + " Preview Image"}
                  />
                </div>
              </Link>
              );
          })
        : <h3>No Projects Found.</h3>
      }
    </section>
  )
  
};

export default ProjectFeed;
