var isChucuan = require('./index')

describe('Testing isGeo', function () {
  it('should return true passing Chucuan', function () {
    expect(isChucuan('Chucuan')).toBeTruthy()
  })

  it('should return false passing Google', function () {
    expect(isChucuan('Goolge')).toBeFalsy()
  })
})
