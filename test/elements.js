var test = require('tape')
var bel = require('../')

test('create inputs', function (t) {
  t.plan(5)

  var expected = 'testing'
  var result = bel`<input type="text" value="${expected}" />`
  t.equal(result.tagName, 'INPUT', 'created an input')
  t.equal(result.value, expected, 'set the value of an input')

  result = bel`<input type="checkbox" checked="${true}" disabled="${false}" />`
  t.equal(result.getAttribute('type'), 'checkbox', 'created a checkbox')
  t.equal(result.getAttribute('checked'), 'checked', 'set the checked attribute')
  t.equal(result.getAttribute('disabled'), null, 'should not have set the disabled attribute')

  t.end()
})

test('svg', function (t) {
  t.plan(2)
  var result = bel`<svg width="150" height="100" viewBox="0 0 3 2">
    <rect width="1" height="2" x="0" fill="#008d46" />
  </svg>`
  t.equal(result.tagName, 'svg', 'create svg tag')
  t.equal(result.childNodes[1].tagName, 'rect', 'created child rect tag')
  t.end()
})
