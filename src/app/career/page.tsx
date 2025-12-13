import Badge from "@/components/badge";
import Experience from "@/components/experience";
import { languages, skills } from "@/lib/data";

export default function Career() {
  return (
    <>
      <div className="bg-card-bg rounded-3xl p-6 shadow-lg backdrop-blur-sm flex flex-col gap-4">
        <h2 className="text-3xl font-bold px-2">Ongoing Job</h2>
        <div className="bg-inner-card-bg rounded-2xl p-6">
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
        </div>
      </div>

      <div className="bg-card-bg rounded-3xl p-6 shadow-lg backdrop-blur-sm flex flex-col gap-4">
        <h2 className="text-3xl font-bold px-2">Past experiences</h2>
        <div className="bg-inner-card-bg rounded-2xl p-6 flex flex-col gap-4">
          <Experience
            company="Satispay (Milan)"
            position="Software QA Specialist"
            startDate="01/2021"
            endDate="07/2024"
            description={[
              "Achieved a 98% bug-free rate on .NET business apps and reduced backend traffic by 75% through feature optimization.",
              "Tested mobile apps (Android, iOS), desktop apps (Windows, macOS, Linux), web dashboards, POS devices, and web plugins (Magento, WordPress, Prestashop, Shopware, Shopify), focusing on stability, reliability, usability, and security.",
              "Performed manual testing (Sanity, Smoke, Regression, Integration, E-2-E, Accessibility) and conducted REST API testing using Postman.",
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
        </div>
      </div>

      <div className="bg-card-bg rounded-3xl p-6 shadow-lg backdrop-blur-sm flex flex-col gap-4">
        <h2 className="text-3xl font-bold px-2">Studies</h2>
        <div className="bg-inner-card-bg rounded-2xl p-6">
          <Experience
            company="Diploma"
            position="Computer Science and Telecommunications"
            startDate="09/2012"
            endDate="06/2017"
            description={[]}
          />
        </div>
      </div>

      <div className="bg-card-bg rounded-3xl p-6 shadow-lg backdrop-blur-sm flex flex-col gap-4">
        <h2 className="text-3xl font-bold px-2">Technical skills</h2>
        <div className="bg-inner-card-bg rounded-2xl p-6">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} text={skill} color="text-accent" />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card-bg rounded-3xl p-6 shadow-lg backdrop-blur-sm flex flex-col gap-4">
        <h2 className="text-3xl font-bold px-2">Languages</h2>
        <div className="bg-inner-card-bg rounded-2xl p-6">
          <div className="flex flex-wrap gap-2">
            {languages.map((language, index) => (
              <Badge key={index} text={language} color="text-accent" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
