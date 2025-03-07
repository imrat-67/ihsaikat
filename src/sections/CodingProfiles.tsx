
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import PlatformStatCard from '@/components/PlatformStatCard';
import { platformUrls } from '@/lib/utils';
import { 
  Code2, 
  Hash, 
  Lightbulb, 
  Cpu, 
  Puzzle, 
  Sigma, 
  FileCode, 
  Brackets, 
  Terminal, 
  Infinity, 
  CheckCircle, 
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
    { name: 'AtCoder', icon: <Cpu />, url: platformUrls['atcoder'] },
    { name: 'LightOJ', icon: <Lightbulb />, url: platformUrls['lightoj'] },
    { name: 'LeetCode', icon: <Code2 />, url: platformUrls['leetcode'] },
    { name: 'CSES', icon: <Puzzle />, url: platformUrls['cses'] },
    { name: 'CodeChef', icon: <FileCode />, url: platformUrls['codechef'] },
    { name: 'Timus', icon: <Brackets />, url: platformUrls['timus'] },
    { name: 'SPOJ', icon: <Terminal />, url: platformUrls['spoj'] },
    { name: 'HackerRank', icon: <CheckCircle />, url: platformUrls['hackerrank'] },
    { name: 'HackerEarth', icon: <Infinity />, url: platformUrls['hackerearth'] },
    { name: 'UVA', icon: <Sigma />, url: platformUrls['uva'] },
    { name: 'GeeksforGeeks', icon: <Database />, url: platformUrls['geeksforgeeks'] },
  ];
  
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
              Username across all platforms: <span className="text-portfolio-red font-mono">imrat_67</span>
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div 
              key={platform.name} 
              className={`transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <PlatformStatCard
                platform={platform.name}
                icon={platform.icon}
                url={platform.url}
                username="imrat_67"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default CodingProfiles;
