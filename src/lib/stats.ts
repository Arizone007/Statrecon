import * as jStat from 'jstat';
import * as ss from 'simple-statistics';

export const calculateMean = (data: number[]): number => ss.mean(data);
export const performTTest = (sample1: number[], sample2: number[]): number => jStat.ttest(sample1, sample2, 1);
// Test: console.log(calculateMean([1, 2, 3])); // Output: 2