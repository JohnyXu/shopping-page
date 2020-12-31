import mapDirectionToText, { DIRECTION } from './mapDirectionToText';

describe('mapDirectionToText', () => {
  it('ASC', () => {
    const result = mapDirectionToText(DIRECTION.ASC);
    expect(result).toBe('price low-to-high');
  });

  it('DESC', () => {
    const result = mapDirectionToText(DIRECTION.DESC);
    expect(result).toBe('price high-to-low');
  });

  it('Not Supported', () => {
    const result = mapDirectionToText('Balabala');
    expect(result).toBeFalsy();
  });
});
