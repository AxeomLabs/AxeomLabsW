import FocusAreaCard from '../FocusAreaCard';
import { Bot } from 'lucide-react';

export default function FocusAreaCardExample() {
  return (
    <div className="p-8 max-w-xs">
      <FocusAreaCard
        icon={Bot}
        title="Robotics"
        description="Advanced robotics research and development"
      />
    </div>
  );
}
