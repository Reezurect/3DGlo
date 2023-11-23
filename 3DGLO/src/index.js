import modal from './modules/modal'
import timer from './modules/timer'
import menu from './modules/menu'
import validation from './modules/validation'
import tabs from './modules/tabs'
import dots from './modules/dots'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'

timer("10 november 2023")
menu()
modal()
validation()
tabs()
dots()
slider(".portfolio-content", ".portfolio-item", ".dot")
calc(100)
sendForm({
    formId_1: 'form1',
    formId_2: 'form2',
    formId_3: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})