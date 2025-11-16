import ServiceCard from '../ServiceCard';
import { Beaker } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ServiceCard
        icon={Beaker}
        title="Research"
        benefits={[
          'Public and private research projects',
          'Comprehensive literature reviews',
          'Data analysis and insights'
        ]}
      />
    </div>
  );
}
