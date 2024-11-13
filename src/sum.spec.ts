import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should correctly add two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should correctly add two negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it('should correctly add a positive and a negative number', () => {
    expect(sum(-1, 2)).toBe(1);
  });

  it('should correctly add zero and a number', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it('should return NaN when adding a number and a non-number', () => {
    expect(sum(5, NaN)).toBeNaN();
    expect(sum(NaN, 5)).toBeNaN();
  });

  it('should return NaN when both inputs are NaN', () => {
    expect(sum(NaN, NaN)).toBeNaN();
  });

  it('should return NaN when adding a number and undefined', () => {
    expect(sum(5, undefined as unknown as number)).toBeNaN();
    expect(sum(undefined as unknown as number, 5)).toBeNaN();
  });

  it('should treat null as 0 when adding a number and null', () => {
    expect(sum(5, null as unknown as number)).toBe(5);
    expect(sum(null as unknown as number, 5)).toBe(5);
  });
});
