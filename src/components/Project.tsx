const Project = () => {

  interface ProjectItem {
    image: string;
    href: string;
    title: string;
    description: string;
    skills: string[];
  }

  const ProjectCard = (props: ProjectItem) => {
    return (
      <>
        <div className="project-list">
          <div className="project-image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="project-info">
            <a href={props.href} target="_blank">
              <h3>{props.title}</h3>
            </a>
            <p>{props.description}</p>
            <div className="skill-tags">
              {props.skills.map((item: string, index: number) => {
                return (
                  <span key={index}>{item}</span>
                )
              })}
            </div>
          </div>
        </div>
      </>
    )
  }

  const projectContent: ProjectItem[] = [
    {
      image: '/images/lelemom.png',
      href: 'https://www.lelemom.com/',
      title: 'Lelelmom 好吃檸來',
      description: '甜點咖啡廳網站，提供網路訂購、預約定位以及烘焙醫生等功能。',
      skills: ['Next', 'Context', 'React Query', 'React Hook Form']
    },
    {
      image: '/images/bookcamp.png',
      href: 'https://bookcamp.site/',
      title: 'Bookcamp 書營',
      description: '專案發想以遊戲與點陣圖風格去做設計，並且以諧音輸贏為網站名稱。',
      skills: ['React', 'JWT', 'Axios', 'Bootstrap']
    }
  ]

  return (
    <>
      <section id="projects" className="main content">
        <h2>作品集</h2>
        <div className="project">
          {projectContent.map((project, index: number) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
