// src/app/research/page.tsx
import Link from "next/link";

const Research = () => {
  const charts = [
    { id: 1, src: "/charts/chart1.png", title: "Market Trends Q1" },
    { id: 2, src: "/charts/chart2.png", title: "Key Performance Indicators" },
  ];

  const reports = [
    { id: 1, title: "Market Analysis 2024", link: "/reports/market-analysis-2024.pdf" },
    { id: 2, title: "Industry Insights Q2", link: "/reports/industry-insights-q2.pdf" },
  ];

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Research</h1>

      {/* Charts and Infographics */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Static Charts and Infographics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {charts.map((chart) => (
            <div key={chart.id} className="border rounded-lg p-4 shadow-md">
              <img src={chart.src} alt={chart.title} className="w-full h-48 object-cover rounded-md mb-2" />
              <h3 className="text-lg font-semibold">{chart.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Reports */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Downloadable Reports</h2>
        <ul className="list-disc pl-6">
          {reports.map((report) => (
            <li key={report.id} className="mb-2">
              <Link href={report.link} className="text-teal-500 hover:underline">
                {report.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Research;
