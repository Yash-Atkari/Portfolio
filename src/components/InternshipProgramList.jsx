import InternshipProgramCard from "./InternshipProgramCard";

export default function InternshipProgramList() {
  const programs = [
    {
      title: "PwC LaunchPad Program",
      company: "PwC India",
      duration: "Feb 2026 - July 2026 (Ongoing)",
      image: "/pwc_launchpad_dashboard.png",
      description:
        "Selected for an exclusive 5-month professional development track. Mastering a multi-disciplinary stack including GenAI Prompt Engineering, Agentic AI, Modern Data Systems, and Salesforce cloud ecosystem.",
      status: "In Progress",
    },
    {
      title: "AIML Virtual Internship",
      company: "IBM SkillsBuild",
      duration: "Jan 2026 - Feb 2026 (6 Weeks)",
      image: "/ibm_skillsbuild_completion.png",
      description:
        "Completed a 6-week intensive internship focusing on AI/ML lifecycle management. Leveraged IBM Watsonx and Scikit-learn to build and deploy predictive models while mastering enterprise-grade data workflows.",
    },
    {
      title: "Azure Cloud & AI Internship",
      company: "Microsoft Learn (MS Elevate)",
      duration: "Jan 2026 - Feb 2026 (4 Weeks)",
      image: "/azure_internship_certificate.jpg",
      description:
        "4-week technical internship focused on Microsoft Azure ecosystem. Specialized in deploying Azure AI Services and architecting serverless solutions using Azure Functions for scalable web applications.",
    },
  ];

  return (
    <div className="row px-3">
      {programs.map((item, idx) => (
        <InternshipProgramCard
          key={idx}
          title={item.title}
          company={item.company}
          duration={item.duration}
          image={item.image}
          description={item.description}
          status={item.status}
        />
      ))}
    </div>
  );
}

