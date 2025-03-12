const Contact = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Submit successfully');
  };

  return (
    <>
      <section id="contact" className="main content">
        <h2>聯絡我</h2>
        <div className="contact-content">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">姓名</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">電子郵件</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">訊息</label>
              <textarea id="message" name="message"></textarea>
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
