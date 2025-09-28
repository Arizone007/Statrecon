declare module 'jstat' {
  export function ttest(sample1: number[], sample2: number[], tested: number): number;
  export function anovaftest(samples: number[][]): number;
  export function correlation(data1: number[], data2: number[]): number;
  export function chisquaretest(observed: number[], expected: number[]): number;
  // Tambahkan fungsi lain (e.g., normal distribution)
}