import { useState, type FormEvent } from "react";
import { useScrollAnimation } from "hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import styles from "components/contact/contact.module.css";

const Contact = () => {
  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } =
    useScrollAnimation({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitMessage("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSubmitMessage("");
    }, 3000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} ${
            headerVisible ? "animate-fadeInUp" : "animate-on-scroll"
          }`}
        >
          <h2>Get In Touch</h2>
          <p>Have a question or want to work together?</p>
        </div>

        <div ref={contentRef} className={styles.contactContent}>
          <div
            className={`${styles.contactInfo} ${
              contentVisible ? "animate-fadeInLeft" : "animate-on-scroll"
            }`}
          >
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out to me using any of the following methods:
            </p>

            <div className={styles.infoItems}>
              <div
                className={`${styles.infoItem} ${
                  contentVisible
                    ? "animate-fadeInUp animate-delay-100"
                    : "animate-on-scroll"
                }`}
              >
                <Mail className={styles.icon} />
                <div>
                  <h4>Email</h4>
                  <p>vi.luu@tuni.fi</p>
                </div>
              </div>

              <div
                className={`${styles.infoItem} ${
                  contentVisible
                    ? "animate-fadeInUp animate-delay-200"
                    : "animate-on-scroll"
                }`}
              >
                <Phone className={styles.icon} />
                <div>
                  <h4>Phone</h4>
                  <p>+358 465394470</p>
                </div>
              </div>

              <div
                className={`${styles.infoItem} ${
                  contentVisible
                    ? "animate-fadeInUp animate-delay-300"
                    : "animate-on-scroll"
                }`}
              >
                <MapPin className={styles.icon} />
                <div>
                  <h4>Location</h4>
                  <p>Tampere, Finland</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.contactForm} ${
              contentVisible ? "animate-fadeInRight" : "animate-on-scroll"
            }`}
          >
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className={styles.icon} />
                  </>
                )}
              </button>

              {submitMessage && (
                <div className={styles.successMessage}>{submitMessage}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
