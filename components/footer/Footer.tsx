import ContactForm from "../contactForm";
import SocialLinks from "../socialLinks";
import TechStack from "../techStack";

const Footer = () => {
  return (
    <footer
      id="contact-form"
      className="flex flex-col justify-center gap-10 bg-black text-gray-100 "
    >
      <div className="container flex flex-col justify-start gap-20 xl:flex-row">
        <div className="flex basis-1/2 flex-col gap-5">
          <h4>
            If you like what you see and want to learn more, drop me a message.
          </h4>
          <p>Or find me on...</p>
          <SocialLinks colour={"fill-gray-50"} />
        </div>
        <div className="basis-1/2">
          <ContactForm />
        </div>
      </div>
      <TechStack />
      <div className="container w-[90%] text-center text-gray-400">
        Copyright © Stuart Garner {new Date().getFullYear()}. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
