import Badge from "@/components/badge";
import Social from "@/components/social";
import { hobbies, socials } from "@/lib/data";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-card-bg rounded-3xl p-8 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-semibold">About me</h1>
          <p className="text-lg">
            I’m a curious and passionate Software QA Specialist with a focus on
            delivering high-quality results. I excel in exploratory testing,
            uncovering bugs, and ensuring a smooth user experience. Alongside QA, I
            offer technical support expertise, assisting with troubleshooting and
            resolving technical issues. My attention to detail, problem-solving
            skills, and proactive mindset help me improve products and processes
            while adapting quickly to meet project goals. I am a self-motivated
            individual with a strong work ethic and a dedication to continuous
            learning. I am committed to staying up-to-date with the latest
            technologies and trends, and I am always eager to learn new skills and
            techniques. I am a team player, always willing to lend a hand and
            collaborate with others to achieve common goals.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold">
            Hobbies
          </h2>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((hobby, index) => (
              <Badge key={index} text={hobby} color="text-accent" />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold">
            Socials and Contacts
          </h2>
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
    </div>
  );
};

export default About;
