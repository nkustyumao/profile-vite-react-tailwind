const Introduction = () => {
  return (
    <>
      <section id="about" className="main content">
        <h2>關於我</h2>
        <div className="about-content">
          <div className="border-4 rounded-full overflow-hidden w-250 h-auto">
            <img
              src="../images/yumao.jpg"
              alt="個人照片"
            />
          </div>

          <div className="about-text">
            <p>
              目前專注於前端網頁開發，熟悉使用 React 和 Next.js
              開發現代化的互動式網站，並且有使用過 Redux Toolkit、React Query
              以及 React Hook Form
              等技術。除了前端技能，我也具備後端開發經驗，使用 Node.js 和
              Express 搭配 MySQL 資料庫進行完整的 CRUD
              操作，實現網站的前後端分離架構。
              雖然目前以前端技術為主，但我樂於接受挑戰，願意學習包括 Vue.js
              前端其他技術，同時也不排斥學習後端開發技能。希望透過持續學習，在快速變化的資訊時代持續提升自己，為團隊和專案帶來更高的價值。
            </p>
            <div className="skills">
              <h3>專業技能</h3>
              <div className="skill-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>Bootstrap</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Next</span>
                <span>Node</span>
                <span>Express</span>
                <span>MySQL</span>
                <span>Nginx</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
