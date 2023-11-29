export const ContactForm = () => (
    <form action="https://formspree.io/f/xknlzqvd" method="POST">
        <div className="row">
            <div className="col-6">
                <input className="form-control" type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="col-6">
                <input className="form-control" type="email" id="email" name="_replyto" placeholder="Your E-mail"
                    required />
            </div>
        </div>
        <div className="form-group my-2">
            <textarea className="form-control" style={{ resize: "none" }} id="message" name="message" rows={4}
                placeholder="Your Message" required></textarea>
        </div>
        <button className="btn btn-primary mt-2" type="submit">Send</button>
    </form>
)