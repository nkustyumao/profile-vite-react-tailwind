const Project = () => {
  return (
    <>
      <section id="projects" className="main content">
        <h2>作品集</h2>
        <div className="project">
          <div className="project-list">
            <div className="project-image">
              <img src="./images/lelemom.png" alt="lelemom" />
            </div>
            <div className="project-info">
            <a href="https://www.lelemom.com/" className="" target="_blank">
              <h3>Lelelmom 好吃檸來</h3>
              </a>
              <p>甜點咖啡廳網站，提供網路訂購、預約定位以及烘焙醫生等功能。</p>
              <div className="skill-tags">
                <span>Next</span>
                <span>Context</span>
                <span>React Query</span>
                <span>React Hook Form</span>
              </div>
             
            </div>
          </div>
          <div className="project-list">
            <div className="project-image">
              <img src="./images/bookcamp.png" alt="lelemom" />
            </div>
            <div className="project-info">
              <h3>Bookcamp 書營</h3>
              <p>
                專案發想以遊戲與點陣圖風格去做設計，並且以諧音輸贏為網站名稱。
              </p>
              <div className="skill-tags">
                <span>React</span>
                <span>JWT</span>
                <span>Axios</span>
                <span>Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
