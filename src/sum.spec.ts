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

  it('should handle very large numbers', () => {
    expect(sum(1e10, 1e10)).toBe(2e10);
  });

  it('should handle very small numbers', () => {
    expect(sum(1e-10, 1e-10)).toBe(2e-10);
  });

  it('should handle decimal numbers', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 10);
  });
});
