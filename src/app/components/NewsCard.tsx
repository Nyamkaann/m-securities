interface NewsCardProps {
  title: string;
  date: string;
  description: string;
  category: string;
  image: string;
}

const NewsCard = ({ title, date, description, category, image }: NewsCardProps) => {
  return (
    <div className="bg-white dark:bg-[#26282c] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-teal-500 font-semibold">{category}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{description}</p>
      </div>
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
        <button className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 font-medium">
          Read more →
        </button>
      </div>
    </div>
  );
};

export default NewsCard; 