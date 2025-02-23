const Contact = () => {
  return (
    <>
      <section id="contact" className="main content">
        <h2>聯絡我</h2>
        <div className="contact-content">
          <form id="contact-form">
            <div className="form-group">
              <label htmlFor="name">姓名</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">電子郵件</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">訊息</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn">
              發送訊息
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
