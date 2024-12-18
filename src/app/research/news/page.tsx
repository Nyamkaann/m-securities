'use client';
import { useLanguage } from '../../context/LanguageContext';
import NewsCard from '../../components/NewsCard';

const News = () => {
  const { t } = useLanguage();

  // Mock data for latest news
  const latestNews = [
    {
      title: "Stock Market Reaches New Heights",
      date: "2024-03-20",
      description: "The MSE Top-20 index has reached a new all-time high, driven by strong performance in the mining and banking sectors. Analysts attribute this growth to increased foreign investment and positive economic indicators.",
      category: "Market Update",
      image: "https://picsum.photos/800/400?random=1"
    },
    {
      title: "New Trading Platform Launch",
      date: "2024-03-19",
      description: "M Securities announces the launch of its next-generation trading platform, featuring advanced analytics tools and improved user experience for both retail and institutional investors.",
      category: "Company News",
      image: "https://picsum.photos/800/400?random=2"
    },
    {
      title: "Regulatory Changes Impact Trading",
      date: "2024-03-18",
      description: "Recent regulatory changes by the Financial Regulatory Commission are expected to enhance market transparency and protect investor interests. These changes will take effect from next month.",
      category: "Regulatory",
      image: "https://picsum.photos/800/400?random=3"
    },
    {
      title: "Investment Opportunities in Green Energy",
      date: "2024-03-17",
      description: "Growing focus on sustainable energy projects creates new investment opportunities in the Mongolian market. Several companies announce plans for renewable energy initiatives.",
      category: "Investment",
      image: "https://picsum.photos/800/400?random=4"
    }
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-teal-500 mb-6 slide-up">
          {t('research.news.title')}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 slide-up">
        {latestNews.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            date={news.date}
            description={news.description}
            category={news.category}
            image={news.image}
          />
        ))}
      </div>
    </div>
  );
};

export default News; 