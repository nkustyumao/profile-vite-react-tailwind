const Master = () => {
  return (
    <>
      <section id="paper" className="main content">
        <h2>碩士論文</h2>
        <div className="paper-content">
          <div className="w-64 h-64 border-4 rounded-full overflow-hidden">
            <img
              src="../images/master-img.jpg"
              alt="個人照片"
              className=" w-full h-full object-cover"
            />
          </div>

          <div className="paper-text">
            <h3>基於YOLO行人偵測之監視系統中可疑人員偵測之研究</h3>
            <p>
              <ul>
                <li>
                  研究目的是希望能夠檢測出可疑行為的人員，以達到預防犯罪的效果。
                </li>
                <li>使用 YOLO 物件偵測技術對監視攝影機畫面進行人員分析。</li>
                <li>
                  計算人員移動距離和停留時間，根據不同場景和攝影機的安裝位置，計算出最適合的門檻值。
                </li>
                <li>
                  移動距離和停留時間超過設定的門檻值時，系統會做出不同的回應。
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Master;
