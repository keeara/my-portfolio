import Badge from "@/components/badge";
import Social from "@/components/social";
import { hobbies, socials } from "@/lib/data";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <div className="bg-bubble-main rounded-5xl p-6 shadow-lg backdrop-blur-sm flex flex-col gap-4 mx-4">
        <h1 className="text-5xl font-semibold px-2">About me</h1>
        <div className="bg-inner-bubble rounded-4xl p-6">
          <p className="text-lg">
            I'm a passionate Software QA Specialist focused on delivering a great user experience. I excel at exploratory testing, digging deep to uncover bugs and proactively improving products and processes. My skills also include technical support, where I help quickly troubleshoot and resolve tricky issues. I'm a quick learner, detail-oriented, and thrive on team collaboration.

            Here in my Blog you can find my Hobbies, some useful Links and also my personal Career page. Cheers!
          </p>
        </div>
      </div>
      <div className="bg-bubble-main rounded-5xl p-6 shadow-lg backdrop-blur-sm flex flex-col gap-4 mx-4">
        <h2 className="text-3xl font-bold px-2">
          Hobbies
        </h2>
        <div className="bg-inner-bubble rounded-4xl p-6">
          <div className="flex flex-wrap gap-2">
            {hobbies.map((hobby, index) => (
              <Badge key={index} text={hobby} color="text-accent" />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-bubble-main rounded-5xl p-6 shadow-lg backdrop-blur-sm flex flex-col gap-4 mx-4">
        <h2 className="text-3xl font-bold px-2">
          Socials and Contacts
        </h2>
        <div className="bg-inner-bubble rounded-4xl p-6">
          <div className="flex flex-wrap gap-2">
            {socials.map((social, index) => (
              <Social
                key={index}
                text={social.text}
                href={social.href}
                color={social.color}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
