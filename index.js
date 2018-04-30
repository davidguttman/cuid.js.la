var h = require('hyperscript')
var cuid = require('cuid')

var link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://unpkg.com/tachyons@4.8.0/css/tachyons.min.css'
document.head.appendChild(link)

document.body.classList.add('flex', 'flex-column', 'pa4')

var sectionStyle = ['pv2']
var labelStyle = ['gray', 'fw9', 'f3', 'tl', 'helvetica']
var inputStyle = ['pa2', 'f1', 'w-100', 'tc', 'code']

document.body.appendChild(createField('CUID', cuid()))
document.body.appendChild(createField('Slug', cuid.slug()))
document.body.appendChild(createField('Fingerprint', cuid.fingerprint()))

function createField (label, value) {
  return h(createSel('div', sectionStyle), [
    h(createSel('label', labelStyle), label),
    h(createSel('input', inputStyle), {type: 'text', value: value, readOnly: true})
  ])
}

function createSel (el, classes) {
  return el + '.' + classes.join('.')
}
