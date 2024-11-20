import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the provided name and default greeting', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a greeting with the provided name and custom greeting', () => {
    const result = greet('Alice', 'Good morning');
    expect(result).toBe('Good morning, Alice!');
  });

  it('should handle an empty name with default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle an empty name with custom greeting', () => {
    const result = greet('', 'Hi');
    expect(result).toBe('Hi, !');
  });

  it('should handle an empty custom greeting', () => {
    const result = greet('Alice', '');
    expect(result).toBe('Hello, Alice!');
  });

  it('should handle both name and greeting as empty strings', () => {
    const result = greet('', '');
    expect(result).toBe('Hello, !');
  });
});
