import { makeThemesGreatAgain } from "./themes.js"
import { initBurger } from "./burger.js"
import { categoriesOnFire } from "./memesPage/categories.js"
import { fillContaner } from "./memesPage/fillContainer.js"
import { checkWindowSize } from "./memesPage/resizing.js"
import { modalPowerOn } from "./modal/modal.js"

makeThemesGreatAgain()
initBurger()
categoriesOnFire()
fillContaner('all')
checkWindowSize()
modalPowerOn()