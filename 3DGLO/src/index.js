import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import validation from './modules/validation'
import tabs from './modules/tabs'
import slider from './modules/slider'
import dots from './modules/dots'
import calc from './modules/calc'

timer("10 november 2023")
menu()
modal()
validation()
tabs()
dots()
slider(".portfolio-content", ".portfolio-item", ".dot")
calc(100)