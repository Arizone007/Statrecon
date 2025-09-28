declare module 'simple-statistics' {
  export function mean(data: number[]): number;
  export function median(data: number[]): number;
  export function standardDeviation(data: number[]): number;
  export function pearsonCorrelation(data1: number[], data2: number[]): number;
  export function mannWhitneyU(sample1: number[], sample2: number[]): number;
  // Tambahkan fungsi lain sesuai kebutuhan (e.g., mode, variance)
}