
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: "Healthcare Analysis",
      description: "Analyzed health metrics using Python, EDA, and visualizations to deliver actionable wellness insights.",
      tags: ["Python", "EDA", "Data Cleaning", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/ankitbodar001/Data-Analysis-HealthCare"
    },
    {
      title: "Stock Portfolio Optimization",
    description: "Optimized stock portfolios using Monte Carlo simulations, correlation analysis, and Python automation.",
    tags: ["Python", "yfinance", "Monte Carlo Simulation", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1745270917449-c2e2c5806586?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN0b2NrJTIwcG9ydGZvbGlvfGVufDB8fDB8fHww",
      link: "https://github.com/ankitbodar001/Data-Analysis-Stock-Portfolio-Analysis"
    },
    {
      title: "Cohort Analysis",
    description: "Built a cohort analysis framework to track user retention and behavior trends with Python and Plotly.",
    tags: ["Python", "Time Series", "Plotly", "User Analytics"],
      image: "https://images.unsplash.com/photo-1716840646010-e5622fd6683d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29ob3J0JTIwQW5hbHlzaXN8ZW58MHx8MHx8fDA%3D",
      link: "https://github.com/ankitbodar001/Data-Analysis-Cohort"
    },
    {
      title: "Supply Chain Analysis",
    description: "Conducted supply chain analysis for a startup, identifying cost drivers and improving operations.",
    tags: ["Python", "EDA", "Plotly", "Supply Chain Analytics"],
      image: "https://media.istockphoto.com/id/1454531939/photo/aerial-top-view-containers-ship-cargo-business-commercial-trade-logistic-and-transportation.webp?a=1&b=1&s=612x612&w=0&k=20&c=oiG0-pYzPTonjHhnCKyqiIEEjTKlVtarrHvWZ1TTGY0=",
      link: "https://github.com/ankitbodar001/Data-Analysis-Supply-Chain"
    },
    {
      title: "RFM Analysis Dashboard",
    description: "Developed a dynamic RFM dashboard using Dash and Plotly to segment customers for marketing insights.",
    tags: ["Python", "RFM Analysis", "Dash", "Plotly"],
      image: "https://media.istockphoto.com/id/1144275217/photo/rfm-recency-frequency-monetary-value-written-in-a-note.webp?a=1&b=1&s=612x612&w=0&k=20&c=SLV0v8ZV7nS6ulW6-RUAReDr69pMZLR5nLwqbQkPshU=",
      link: "https://github.com/ankitbodar001/RFM-Data-Analysis"
    },
    {
      title: "Ads CTR Forecasting",
    description: "Forecasted ad CTR using ARIMA/SARIMA models to improve campaign scheduling and engagement strategies.",
    tags: ["Python", "Time Series", "ARIMA", "EDA"],
      image: "https://media.istockphoto.com/id/2098359215/photo/digital-marketing-concept-businessman-using-laptop-with-ads-dashboard-digital-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=bo9P4L3HQM2cipWrh8W7_HwPYNnUdHKqucWnduQLge0=",
      link: "https://github.com/ankitbodar001/Data-Analysis--Ads-CTR-Forecasting"
    },
    {
      title: "Credit Card Financial Dashboard",
      description: "Created a Power BI dashboard for real-time insights into credit card usage and customer data trends.",
      tags: ["Power BI", "SQL", "Data Analysis", "Dashboarding"],
      image: "https://images.unsplash.com/photo-1708423538640-c079fd23c2ae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENyZWRpdCUyMENhcmQlMjBGaW5hbmNpYWwlMjBEYXNoYm9hcmR8ZW58MHx8MHx8fDA%3D",
      link: "https://github.com/ankitbodar001/Data-Analysis---Financial-Dashboard"
    },
    {
      title: "Blinkit Dashboard",
      description: "Developed a Power BI dashboard to analyze sales KPIs and product attributes for strategic decisions.",
      tags: ["Power BI", "Sales Analysis", "Data Visualization", "KPI Tracking"],
      image: "https://plus.unsplash.com/premium_photo-1720503242835-b537741c9736?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxpbmtpdCUyMERhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
      link: "https://github.com/ankitbodar001/Data-Analysis-Blinkit-Dashboard"
    },
    {
      title: "Instagram User Analytics",
      description: "Analyzed Instagram engagement data to optimize content strategies and increase user interaction.",
      tags: ["MySQL", "Query Optimization", "Engagement Metrics", "Social Media Analytics"],
      image: "https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW5zdGFncmFtJTIwVXNlciUyMEFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D",
      link: "https://github.com/ankitbodar001/Instagram-User-Analytics"
    },
    {
      title: "Bank Loan Case Study",
      description: "Performed loan default risk analysis in Excel to identify key financial indicators and reduce defaults.",
      tags: ["Excel", "EDA", "Financial Analysis", "Risk Assessment"],
      image: "https://plus.unsplash.com/premium_photo-1679814366168-f6f39e7e8ae4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFua3xlbnwwfHwwfHx8MA%3D%3D",
      link: "https://github.com/ankitbodar001/Bank-Loan-Case-Study"
    },
    {
      title: "Data Engineering with Snowpark Python",
      description: "Built an ETL pipeline using Snowpark Python to automate raw data ingestion from S3 into Snowflake.",
      tags: ["Snowflake", "Snowpark", "Python", "ETL Pipeline"],
      image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fERhdGElMjBFbmdpbmVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      link: "https://github.com/ankitbodar001/sfguide-data-engineering-with-snowpark-python"
    },
    {
      title: "Data Visualization in Hospitality & Finance",
      description: "Created dashboards in Power BI and Tableau to drive insights across hospitality and financial sectors.",
      tags: ["Power BI", "Tableau", "DAX", "Dashboard Design"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGF0YSUyMFZpc3VhbGl6YXRpb24lMjBpbiUyMEhvc3BpdGFsaXR5JTIwJTI2JTIwRmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
      link: "https://github.com/ankitbodar001/Data-Visualization"
    },
    {
      title: "Crime Data Analysis",
      description: "Built Power BI dashboards for European crime data with YOY and MOM metrics using DAX functions.",
      tags: ["Power BI", "DAX", "Time Series Analysis", "Crime Data"],
      image: "https://images.unsplash.com/photo-1690400524283-4e410dce7318?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENyaW1lJTIwRGF0YSUyMEFuYWx5c2lzfGVufDB8fDB8fHww",
      link: "https://github.com/ankitbodar001/Crime-Data-Analysis"
    },
    {
      title: "Dynamic Customer Performance Dashboard",
      description: "Designed themed Power BI dashboards with dynamic parameters for customer performance insights.",
      tags: ["Power BI", "DAX", "Parameterization", "Interactive Dashboards"],
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fER5bmFtaWMlMjBDdXN0b21lciUyMFBlcmZvcm1hbmNlJTIwRGFzaGJvYXJkfGVufDB8fDB8fHww",
      link: "https://github.com/ankitbodar001/Dynamic-Customer-Sales"
    }  
  ];
  const visibleProjects = showAll ? projects : projects.slice(0, 6);
  return (
//     <section id="visibleProjects" className="py-20 px-4 bg-data-dark relative">
//       {/* Background elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-data-darker to-transparent"></div>
//         <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-data-darker to-transparent"></div>
//         <div className="absolute left-0 w-1/4 h-full bg-gradient-to-r from-data-darker/50 to-transparent"></div>
//         <div className="absolute right-0 w-1/4 h-full bg-gradient-to-l from-data-darker/50 to-transparent"></div>
//       </div>

//       <div className="container mx-auto max-w-6xl relative z-10">
//         <div className="text-center mb-16 opacity-0 animate-fade-in">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-gradient">Projects</h2>
//           <div className="h-1 w-20 bg-gradient-to-r from-data-accent to-data-accent-light mx-auto"></div>
//           <p className="text-gray-300 mt-4 max-w-xl mx-auto">
//             A selection of my data analysis projects, showcasing my expertise in transforming raw data into actionable insights.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <div key={project.title} className={`opacity-0 animate-fade-in`} style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
//               <ProjectCard
//                 title={project.title}
//                 description={project.description}
//                 tags={project.tags}
//                 image={project.image}
//                 link={project.link}
//               />
//             </div>
//           ))}
//         </div>
        
//         <div className="mt-12 text-center">
//         {!showAll && (
//             <button
//               onClick={() => setShowAll(true)}
//               className="inline-block px-8 py-3 rounded-lg border border-data-accent text-data-accent hover:bg-data-accent hover:text-white transition-all duration-300"
//             >
//               View More Projects
//             </button>
//           )}
//           <a
//             href="https://github.com/ankitbodar001"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block px-8 py-3 rounded-lg border border-data-accent text-data-accent hover:bg-data-accent hover:text-white transition-all duration-300 ml-4"
//           >
//             GitHub Profile
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };
<section id="projects" className="py-20 px-4 bg-data-dark relative">
{/* Background elements remain the same */}
<div className="container mx-auto max-w-6xl relative z-10">
  <div className="text-center mb-16 opacity-0 animate-fade-in">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-gradient">Projects</h2>
    <div className="h-1 w-20 bg-gradient-to-r from-data-accent to-data-accent-light mx-auto"></div>
    <p className="text-gray-300 mt-4 max-w-xl mx-auto">
      A selection of my data analysis projects, showcasing my expertise in transforming raw data into actionable insights.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {visibleProjects.map((project, index) => (
      <div 
        key={project.title} 
        className="opacity-0 animate-fade-in" 
        style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
      >
        <ProjectCard
          title={project.title}
          description={project.description}
          tags={project.tags}
          image={project.image}
          link={project.link}
        />
      </div>
    ))}
  </div>
  
  <div className="mt-12 text-center">
    {!showAll && (
      <button
        onClick={() => setShowAll(true)}
        className="inline-block px-8 py-3 rounded-lg border border-data-accent text-data-accent hover:bg-data-accent hover:text-white transition-all duration-300"
      >
        View More Projects
      </button>
    )}
    <a
      href="https://github.com/ankitbodar001"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-8 py-3 rounded-lg border border-data-accent text-data-accent hover:bg-data-accent hover:text-white transition-all duration-300 ml-4"
    >
      GitHub Profile
    </a>
  </div>
</div>
</section>
);
};

export default Projects;
