const Education = () => {
  return (
   <>
   <div id="education" className="main content">
        <h2>學歷</h2>
        <div className="education-content">
          <div className="education-list">
            <div className="education-image">
              <img src="/images/nkust.png" alt="高科大校徽" />
            </div>
            <div className="education-info">
              <h3>國立高雄科技大學</h3>
              <p>電子工程系</p>
              <p>碩士</p>
              <p>2020 - 2023</p>
            </div>
          </div>
          <div className="education-list">
            <div className="education-image">
              <img src="/images/isu.jpeg" alt="高科大校徽" />
            </div>
            <div className="education-info">
              <h3>私立義守大學</h3>
              <p>資訊工程學系</p>
              <p>學士</p>
              <p>2015 - 2019</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education