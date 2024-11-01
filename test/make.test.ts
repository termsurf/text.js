import makeChinese from '~/chinese'
import makeArabic from '~/arabic'
import makePersian from '~/persian'
import makeTibetanWylie from '~/tibetan/wylie/to'
import makeWylieTibetan from '~/tibetan/wylie/from'
import tone from '@termsurf/tone'
import talk from '@termsurf/talk'

console.log(makeChinese('měi lì de'))
console.log(makeArabic('جَمِيل'))

console.log(makeTibetanWylie('རིག་པ་'))
console.log(makeWylieTibetan('rig pa'))

console.log(tone(makeChinese('měi lì de')))
console.log(talk('rIg ph~a'))

console.log(makePersian('سلام وجود دارد'))
