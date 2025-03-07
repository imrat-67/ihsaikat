import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const platformUrls: Record<string, string> = {
  'codeforces': 'https://codeforces.com/profile/imrat_67',
  'atcoder': 'https://atcoder.jp/users/imrat_67',
  'lightoj': 'https://lightoj.com/user/imrat_67',
  'leetcode': 'https://leetcode.com/imrat_67/',
  'cses': 'https://cses.fi/user/imrat_67',
  'codechef': 'https://www.codechef.com/users/imrat_67',
  'timus': 'https://acm.timus.ru/author.aspx?id=imrat_67',
  'spoj': 'https://www.spoj.com/users/imrat_67/',
  'hackerrank': 'https://www.hackerrank.com/imrat_67',
  'hackerearth': 'https://www.hackerearth.com/@imrat_67',
  'uva': 'https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_authorstats&userid=imrat_67',
  'geeksforgeeks': 'https://auth.geeksforgeeks.org/user/imrat_67'
};

export const platformLogos: Record<string, string> = {
  'codeforces': 'https://cdn.iconscout.com/icon/free/png-256/free-codeforces-3629285-3031869.png',
  'leetcode': 'https://leetcode.com/static/images/LeetCode_logo_rvs.png',
  'atcoder': 'https://img.atcoder.jp/assets/favicon.png',
  'lightoj': 'https://lightoj.com/logo192.png',
  'cses': 'https://cses.fi/logo.png?1',
  'codechef': 'https://cdn.codechef.com/images/cc-logo.svg',
  'spoj': 'https://stx1.spoj.com/gfx/2015e.png',
  'timus': 'https://acm.timus.ru/images/logo.png',
  'hackerrank': 'https://hrcdn.net/community-frontend/assets/favicon-ddc852f75a.png',
  'hackerearth': 'https://static-fastly.hackerearth.com/static/hackerearth/images/logo/HE_identity.png',
  'uva': 'https://onlinejudge.org/templates/hm_yaml_2_5/favicon.ico',
  'geeksforgeeks': 'https://media.geeksforgeeks.org/gfg-gg-logo.svg'
};

export function numberWithCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getVisibleSections(): string[] {
  const sections = document.querySelectorAll('section[id]');
  const visibleSections: string[] = [];

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const isVisible = 
      rect.top <= (window.innerHeight / 2) && 
      rect.bottom >= (window.innerHeight / 2);
    
    if (isVisible) {
      visibleSections.push(section.id);
    }
  });

  return visibleSections;
}

export function downloadCV(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  
  const cvUrl = '/cv.pdf';
  
  const link = document.createElement('a');
  link.href = cvUrl;
  link.setAttribute('download', 'imtiaj_hossain_saikat_cv.pdf');
  link.setAttribute('target', '_blank');
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
