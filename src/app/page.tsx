import Badge from "@/components/badge";
import Social from "@/components/social";
import React from "react";

const About: React.FC = () => {
  const hobbies = [
    "Photography",
    "Video Editing ",
    "Logo Design",
    "Gaming",
    "Travel",
    "Cooking",
    "Reading",
    "Computer Building",
    "JS Learning",
    "Motorbikes",
    "Android ROM Flashing",
  ];
  const socials = [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/francesco-chiaramonte-it/",
      color: "text-blue-400",
    },
    {
      text: "GitHub",
      href: "https://github.com/keeara",
      color: "text-white-300",
    },
    {
      text: "Email",
      href: "mailto:fran.chiaramonte0@gmail.com",
      color: "text-green-200",
    },
    {
      text: "(+39) 3276158831",
      href: "tel:+393276158831",
      color: "text-red-200",
    },
    {
      text: "Resume",
      href: "https://drive.google.com/file/d/1SeBYWzrQ36qbmj94q5idKQPSbeU397dQ/view?usp=drive_link",
      color: "text-white-400",
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-7xl font-semibold">About</h1>
        <p>
          I’m a curious and passionate Software QA Specialist with a focus on
          delivering high-quality results. I excel in exploratory testing,
          uncovering bugs, and ensuring smooth user experience. Alongside QA, I
          offer technical support expertise, assisting with troubleshooting and
          resolving technical issues. My attention to detail, problem-solving
          skills, and proactive mindset help me improve products and processes
          while adapting quickly to meet project goals. I am a self-motivated
          individual with a strong work ethic and a dedication to continuous
          learning. I am committed to staying up-to-date with the latest
          technologies and trends, and am always eager to learn new skills and
          techniques. I am a team player, always willing to lend a hand and
          collaborate with others to achieve common goals.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-left text-3xl font-bold tracking-[-0.01em] md:text-5xl md:leading-[3rem]">
          Hobbies
        </h2>
        <div className="flex flex-wrap gap-2">
          {hobbies.map((hobby, index) => (
            <Badge key={index} text={hobby} color="text-yellow-200" />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-left text-3xl font-bold tracking-[-0.01em] md:text-5xl md:leading-[3rem]">
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
  );
};

export default About;
