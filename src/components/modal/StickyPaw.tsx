import { PawPrint } from 'lucide-react';
import './StickyPaw.css';

interface StickyPawProps {
  onClick: () => void;
  show: boolean;
}

export default function StickyPaw({ onClick, show }: StickyPawProps) {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="sticky-paw"
      aria-label="Open contact form"
    >
      <PawPrint className="h-6 w-6" />
    </button>
  );
}
