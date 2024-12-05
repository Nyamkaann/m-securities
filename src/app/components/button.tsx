// app/components/Button.tsx
interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
  }
  
  const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className="bg-teal-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-600"
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  