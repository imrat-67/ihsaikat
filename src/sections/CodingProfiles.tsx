
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import PlatformStatCard from '@/components/PlatformStatCard';
import { useQueries } from '@tanstack/react-query';
import { fetchPlatformStats } from '@/lib/api';
import { platformUrls } from '@/lib/utils';
import { 
  FileCode,
  Cpu, 
  Lightbulb,
  Code2,
  Puzzle, 
  Hash,
  Terminal,
  CheckCircle, 
  GraduationCap,
  Award,
  Github,
  Database
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const CodingProfiles = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const platforms = [
    { name: 'Codeforces', icon: <Hash />, url: platformUrls['codeforces'] },
    { name: 'LeetCode', icon: <Code2 />, url: platformUrls['leetcode'] },
    { name: 'AtCoder', icon: <Cpu />, url: platformUrls['atcoder'] },
    { name: 'LightOJ', icon: <Lightbulb />, url: platformUrls['lightoj'] },
    { name: 'CSES', icon: <Puzzle />, url: platformUrls['cses'] },
    { name: 'CodeChef', icon: <FileCode />, url: platformUrls['codechef'] },
    { name: 'SPOJ', icon: <Terminal />, url: platformUrls['spoj'] },
    { name: 'Timus', icon: <GraduationCap />, url: platformUrls['timus'] },
    { name: 'HackerRank', icon: <CheckCircle />, url: platformUrls['hackerrank'] },
    { name: 'HackerEarth', icon: <Database />, url: platformUrls['hackerearth'] },
    { name: 'UVA', icon: <Terminal />, url: platformUrls['uva'] },
    { name: 'GeeksforGeeks', icon: <Database />, url: platformUrls['geeksforgeeks'] },
    { name: 'GitHub', icon: <Github />, url: 'https://github.com/imrat-67' },
  ];

  // Fetch stats for all platforms
  const results = useQueries({
    queries: platforms.filter(platform => platform.name !== 'GitHub').map(platform => ({
      queryKey: ['platform-stats', platform.name.toLowerCase()],
      queryFn: () => fetchPlatformStats(platform.name.toLowerCase(), 'imrat_67'),
      staleTime: 1000 * 60 * 60, // Cache for 1 hour
    })),
  });

  // Calculate total solved problems
  const totalSolved = results.reduce((total, result) => {
    if (result.data && result.data.solvedCount) {
      return total + result.data.solvedCount;
    }
    return total;
  }, 0);

  const isLoading = results.some(result => result.isLoading);
  
  return (
    <SectionContainer id="coding">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-12">
          <span className="text-portfolio-red font-mono text-lg">05.</span>
          <h2 className="section-title inline-block ml-2">Coding Profiles</h2>
        </div>
        
        <div className="mb-8 text-center">
          <div className={`inline-block bg-portfolio-blue/20 backdrop-blur-sm px-6 py-3 rounded-full transition-all duration-700 delay-300 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-portfolio-lightGray">
              Username: <span className="text-portfolio-red font-mono">imrat_67</span> (GitHub: <span className="text-portfolio-red font-mono">imrat-67</span>)
            </p>
          </div>
        </div>

        <div className={`mb-10 text-center transition-all duration-700 delay-400 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="glass-card inline-block px-8 py-6">
            <div className="flex items-center justify-center gap-4">
              <Award size={28} className="text-portfolio-red" />
              <div>
                <h3 className="text-2xl font-bold text-portfolio-white">
                  {isLoading ? (
                    <span className="inline-block w-16 h-8 bg-portfolio-gray/20 animate-pulse rounded"></span>
                  ) : (
                    <span className="font-mono">{totalSolved.toLocaleString()}</span>
                  )}
                </h3>
                <p className="text-portfolio-lightGray">Total Problems Solved</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div 
              key={platform.name} 
              className={`transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <PlatformStatCard
                platform={platform.name}
                icon={platform.icon}
                url={platform.url}
                username={platform.name === 'GitHub' ? 'imrat-67' : 'imrat_67'}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default CodingProfiles;
