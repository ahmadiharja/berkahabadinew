import { Sun, Moon } from "lucide-react";
import berkahabadilogo from "../../assets/images/logoptberkahabadidarkcircle.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/80 backdrop-blur-md shadow-md py-2">
      <img 
        src={berkahabadilogo}
        alt="PT Berkah Abadi"
        className="w-10 h-10 rounded-full mx-auto"
      />
    </header>
  );
};

export default Header;
