import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(5, -3)).toBe(2);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-4, -6)).toBe(-10);
  });

  it('should return the sum of a number and zero', () => {
    expect(sum(7, 0)).toBe(7);
    expect(sum(0, 7)).toBe(7);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should handle the sum of large positive numbers', () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
  });

  it('should handle the sum of large negative numbers', () => {
    expect(sum(-1000000, -2000000)).toBe(-3000000);
  });

  it('should handle the sum of a large positive and a large negative number', () => {
    expect(sum(1000000, -1000000)).toBe(0);
  });

  it('should return the sum of floating-point numbers', () => {
    expect(sum(1.5, 2.5)).toBeCloseTo(4.0);
  });

  it('should handle the sum of very small numbers', () => {
    expect(sum(0.0001, 0.0002)).toBeCloseTo(0.0003);
  });
});
