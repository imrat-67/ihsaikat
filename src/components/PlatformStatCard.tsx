
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPlatformStats } from '@/lib/api';
import { ExternalLink } from 'lucide-react';

interface PlatformStatCardProps {
  platform: string;
  icon: React.ReactNode;
  url: string;
  username: string;
}

const PlatformStatCard: React.FC<PlatformStatCardProps> = ({ platform, icon, url, username }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['platform-stats', platform],
    queryFn: () => fetchPlatformStats(platform, username),
  });

  return (
    <div className="glass-card">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <div className="text-portfolio-lightBlue text-2xl">{icon}</div>
          <h3 className="text-lg font-bold text-portfolio-white">{platform}</h3>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-portfolio-red hover:text-portfolio-lightRed transition-colors"
        >
          <ExternalLink size={18} />
        </a>
      </div>

      <div className="flex flex-col">
        <div className="text-sm text-portfolio-lightGray mb-1">Username: {username}</div>
        {isLoading ? (
          <div className="flex justify-center items-center py-4">
            <div className="loader w-6 h-6 border-2"></div>
          </div>
        ) : isError ? (
          <div className="text-portfolio-lightRed text-sm">Failed to load stats</div>
        ) : (
          <div className="flex items-center mt-2">
            <div className="text-3xl font-bold text-portfolio-white">{data?.solvedCount || 0}</div>
            <div className="ml-2 text-sm text-portfolio-lightGray">problems solved</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatformStatCard;
