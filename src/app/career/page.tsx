import Badge from "@/components/badge";
import Experience from "@/components/experience";
import { languages, skills } from "@/lib/data";

export default function Career() {
  return (
    <div className="bg-card-bg rounded-3xl p-8 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-semibold">Career</h1>

        <h2 className="text-3xl font-bold">Ongoing Job</h2>

        <Experience
          company="mySugr - Roche Diagnostics Spain (Sant Cugat del Valles)"
          position="Software QA"
          startDate="17/02/2025"
          endDate="Present"
          description={[
            "Software QA @ mySugr - Roche Diagnostics Spain (Sant Cugat del Valles)",
          ]}
          isCurrent={true}
        />

        <h2 className="text-left text-3xl font-bold tracking-[-0.01em] md:text-5xl md:leading-[3rem]">
          Past experiences
        </h2>

        <Experience
          company="Satispay (Milan)"
          position="Software QA Specialist"
          startDate="01/2021"
          endDate="07/2024"
          description={[
            "Achieved a 98% bug-free rate on .NET business apps and reduced backend traffic by 75% through feature optimization.",
            "Tested mobile apps (Android, iOS), desktop apps (Windows, macOS, Linux), web dashboards, POS devices, and web plugins (Magento, WordPress, Prestashop, Shopware, Shopify), focusing on stability, reliability, usability, and security.",
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
            "Managed customer-cases with Salesforce (Profile authentication, Device Replacement, Customer Reports)",
            "Extracted NPS, CES, and CSAT data from the database with the Supervisor to provide valuable insights for continuous improvement.",
            "Achieved and maintained a high level of customer satisfaction and engagement through efficient problem-solving and effective communication.",
          ]}
        />

        <Experience
          company="Courses"
          position="Javascript Training"
          startDate="6 months"
          description={[
            "Completed a 6-month intensive training program covering Javascript's Fundamentals.",
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

        <h2 className="text-3xl font-bold">Technical skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} text={skill} color="text-accent" />
          ))}
        </div>

        <h2 className="text-3xl font-bold">Languages</h2>
        <div className="flex flex-wrap gap-2">
          {languages.map((language, index) => (
            <Badge key={index} text={language} color="text-accent" />
          ))}
        </div>
      </div>
    </div>
  );
}
