import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import { motion } from "framer-motion";

function ContactForm() {
  const [state, handleSubmit] = useForm("xeqwqlpj");
  if (state.succeeded) {
    return (
      <div className="flex h-[430px] items-center justify-center gap-5 text-gray-50 xl:items-start xl:justify-start">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ repeat: 0, duration: 0.5 }}
          className="flex flex-col items-center gap-5 md:flex-row"
        >
          <Image
            src="/footer-profile-pic.webp"
            width={400}
            height={400}
            alt="Stuart Garner Footer Profile Picture"
            className="w-[200px]"
          />
          <div className="text-center md:text-left">
            <h4>Thanks for reaching out!</h4>
            <p>I will be in touch as soon as I can.</p>
          </div>
        </motion.div>
      </div>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-[430px] w-full flex-col gap-5"
    >
      <span className="flex flex-col gap-2">
        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          type="email"
          name="email"
          className=" rounded-xl bg-gray-50 p-5 text-gray-600"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </span>

      <span className="flex flex-col gap-2">
        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          className="min-h-[200px] rounded-xl p-5 text-gray-600"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </span>
      <button type="submit" disabled={state.submitting} className="button">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
