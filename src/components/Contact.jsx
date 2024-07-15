import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "src/styles";
import { slideIn } from "src/utils/motion";
import { SectionWrapper } from "src/hoc";
import emailjs from "@emailjs/browser";
import EarthCanvas from "./canvas/Earth";

const TextField = (formProps) => {
  return (
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">
        {formProps?.label || ""}
      </span>
      <input
        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        {...formProps}
      />
    </label>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill all the fields");
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setFormState({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert(error);
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-grow flex flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.heroSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contach.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <TextField
            type="text"
            name="name"
            label="Your Name"
            value={formState.name}
            onChange={handleChange}
            placeholder="What's your good name?"
          />
          <TextField
            type="email"
            name="email"
            label="Your Email"
            value={formState.email}
            onChange={handleChange}
            placeholder="What's your web address?"
          />
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={6}
              name="message"
              label="Your Message"
              value={formState.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <div className="text-right">
            <button
              type="submit"
              className="bg-red-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
