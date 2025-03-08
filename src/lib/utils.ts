
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const platformUrls: Record<string, string> = {
  'codeforces': 'https://codeforces.com/profile/imrat_7',
  'atcoder': 'https://atcoder.jp/users/imrat_7',
  'lightoj': 'https://lightoj.com/user/imrat_6',
  'leetcode': 'https://leetcode.com/imrat_7/',
  'cses': 'https://cses.fi/user/imrat_7',
  'codechef': 'https://www.codechef.com/users/imrat_7',
  'timus': 'https://acm.timus.ru/author.aspx?id=imrat_7',
  'spoj': 'https://www.spoj.com/users/imrat_7/',
  'hackerrank': 'https://www.hackerrank.com/imrat_7',
  'hackerearth': 'https://www.hackerearth.com/@imrat_7',
  'uva': 'https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_authorstats&userid=imrat_7',
  'geeksforgeeks': 'https://auth.geeksforgeeks.org/user/imrat_7'
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
