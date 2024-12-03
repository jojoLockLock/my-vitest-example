import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the correct sum of two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should return the correct sum when one number is negative', () => {
    expect(sum(-2, 3)).toBe(1);
  });

  it('should return the correct sum of two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it('should return the correct sum when one number is zero', () => {
    expect(sum(0, 5)).toBe(5);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
