
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPlatformStats } from '@/lib/api';
import { ExternalLink } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { platformLogos } from '@/lib/utils';

interface PlatformStatCardProps {
  platform: string;
  url: string;
  username: string;
}

const PlatformStatCard: React.FC<PlatformStatCardProps> = ({ platform, url, username }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['platform-stats', platform.toLowerCase()],
    queryFn: () => fetchPlatformStats(platform.toLowerCase(), username),
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
  });

  return (
    <div className="glass-card hover:shadow-lg hover:shadow-portfolio-blue/10 transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <div className="text-portfolio-lightBlue w-6 h-6 flex items-center justify-center">
            {platformLogos[platform.toLowerCase()] ? (
              <img 
                src={platformLogos[platform.toLowerCase()]} 
                alt={`${platform} logo`} 
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.style.display = 'none';
                }} 
              />
            ) : (
              <div className="w-6 h-6 bg-portfolio-blue/20 rounded-full"></div>
            )}
          </div>
          <h3 className="text-lg font-bold text-portfolio-white">{platform}</h3>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-red hover:text-portfolio-lightRed transition-colors"
              aria-label={`Visit ${platform} profile`}
            >
              <ExternalLink size={18} />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Visit profile</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex flex-col">
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
