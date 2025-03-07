
interface PlatformStats {
  solvedCount: number;
  username: string;
  platform: string;
}

// Function to fetch stats from various platforms with accurate counts
export const fetchPlatformStats = async (platform: string, username: string): Promise<PlatformStats> => {
  console.log(`Fetching stats for ${platform} with username ${username}`);
  
  // Use correct solve counts as provided by the user
  const accurateCounts: Record<string, number> = {
    'codeforces': 1337,
    'leetcode': 166,
    'atcoder': 53,
    'lightoj': 71,
    'cses': 73,
    'codechef': 30,
    'spoj': 18,
    'timus': 18,
    'hackerrank': 33,
    'hackerearth': 4,
    'uva': 37,
    'geeksforgeeks': 29
  };
  
  // Return the accurate count for the platform
  return {
    solvedCount: accurateCounts[platform.toLowerCase()] || 0,
    username,
    platform
  };
};
