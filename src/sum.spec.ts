import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(5, -3)).toBe(2);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it('should return the sum of a number and zero', () => {
    expect(sum(5, 0)).toBe(5);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should return NaN if the first argument is NaN', () => {
    expect(sum(NaN, 3)).toBeNaN();
  });

  it('should return NaN if the second argument is NaN', () => {
    expect(sum(3, NaN)).toBeNaN();
  });

  it('should return NaN if both arguments are NaN', () => {
    expect(sum(NaN, NaN)).toBeNaN();
  });
});
