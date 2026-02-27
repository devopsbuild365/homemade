// Simpele test om te controleren of Jest werkt
describe('Simple test', () => {
  it('should work', () => {
    expect(1 + 1).toBe(2)
  })

  it('should check if arrays are equal', () => {
    expect([1, 2, 3]).toEqual([1, 2, 3])
  })
})