import Badge from "@/components/badge";
import Experience from "@/components/experience";

export default function Career() {
  const skills = [
    "JIRA Confluence",
    "PHP",
    "XML",
    "HTML",
    "SQL",
    "Manual Testing",
    "Tech Support",
    "Postman",
    "SCRUM Framework",
    "AGILE Methodologies",
    "REST API",
    "Documentation Writing",
    "Mobile Testing",
    "Web Testing",
    "Detail Oriented",
    "Agile Methodologies",
    "Kibana (Backend Logs)",
    "Mobile Testing",
    "Web Testing",
    "Documentation Writing",
    "Detail Oriented",
    "REST API",
  ];

  const languages = [
    "Italian (Native Speaker)",
    "English(C1)",
    "Spanish(A1)",
    "Portuguese(A1)",
  ];
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-7xl font-semibold">Career</h1>
      <Experience
        company="Satispay (Milan)"
        position="Software QA Specialist"
        startDate="01/2021"
        endDate="07/2024"
        description={[
          "Achieved a 98% bug-free rate on .NET business apps and reduced backend traffic by 75% through feature optimization.",
          "Tested mobile apps (Android, iOS), desktop apps (Windows, macOS, Linux), web dashboards, POS devices, and web plugins (Magento, WordPress, Prestashop, Shopware, Shopify), focusing on stability,reliability, usability, and security.",
          "Performed manual testing (Sanity, Smoke, Regression, Integration, E2E, Accessibility) and conducted REST API testing using Postman.",
          "Managed end-to-end testing and deployments for internal products, collaborating with backend and external developers for seamless integration",
          "Collaborated with cross-functional teams (BE, FE, PM, DevOps, UX/UI, Customer Care) to improve processes using Agile methodologies.",
          "Provided internal support for teams via Slack, Freshdesk, and Zendesk.",
        ]}
      />
      <Experience
        company="Teleperformance Portugal (Lisbon)"
        position="Customer Care Specialist"
        startDate="02/2019"
        endDate="01/2021"
        description={[
          "Managed customer interactions, addressing both software and hardware device problems, particularly for IQOS product line.",
          "Managed Live Chat and Facebook interactions using Sprinklr, addressing both public and private inquiries to maintain high customer satisfaction.",
          "Managed customer-cases with Salesforce (Profile authentication, Device Replacement, Customer Reports) ",
          "Extracted NPS, CES, and CSAT data from the database with the Supervisor to provide valuable insights for continuous improvement.",
          "Achieved and maintained a high level of customer satisfaction and engagement through efficient problem-solving and effective communication, collaborating with the Team and the Supervisor",
        ]}
      />
      <Experience
        company="Courses"
        position="Javascript Training"
        startDate="08/2024"
        endDate="Present"
        description={[
          "Studying the basic concept of Javascript, by training day by day on the language's fundamentals.",
        ]}
      />
      <h2 className="text-left text-3xl font-bold tracking-[-0.01em] md:text-5xl md:leading-[3rem]">
        Studies
      </h2>
      <Experience
        company="Diploma"
        position="Computer Science and Telecommunications"
        startDate="09/2012"
        endDate="06/2017"
        description={[]}
      />

      <h2 className="text-left text-3xl font-bold tracking-[-0.01em] md:text-5xl md:leading-[3rem]">
        Technical skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} text={skill} color="text-orange-300" />
        ))}
      </div>
      <h2 className="text-left text-3xl font-bold tracking-[-0.01em] md:text-5xl md:leading-[3rem]">
        Languages
      </h2>
      <div className="flex flex-wrap gap-2">
        {languages.map((language, index) => (
          <Badge key={index} text={language} color="text-purple-300" />
        ))}
      </div>
    </div>
  );
}
