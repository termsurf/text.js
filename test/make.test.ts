import makeChinese from '~/system/chinese'
import makeArabic from '~/system/arabic'
import makeTibetanWylie from '~/system/tibetan/wylie/to'
import makeWylieTibetan from '~/system/tibetan/wylie/from'
import tone from '@termsurf/tone'
import talk from '@termsurf/talk'

console.log(makeChinese('měi lì de'))
console.log(makeArabic('جَمِيل'))

console.log(makeTibetanWylie('རིག་པ་'))
console.log(makeWylieTibetan('rig pa'))

console.log(tone(makeChinese('měi lì de')))
console.log(talk('rIg ph~a'))
