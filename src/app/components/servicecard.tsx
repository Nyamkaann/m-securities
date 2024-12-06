// app/components/ServiceCard.tsx
interface ServiceCardProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => {
    return (
      <div className="max-w-sm w-full mx-auto rounded-lg overflow-hidden shadow-lg">
        <img className="w-full h-48 sm:h-56 object-cover" src={imageUrl} alt={title} />
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-teal-500">{title}</h3>
          <p className="text-sm sm:text-base text-gray-700 mt-2">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ServiceCard;
  