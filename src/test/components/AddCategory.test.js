import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe('Pruebas en un componenet <AddCategory />', () => {

    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })
    
    test('Debe renderizar el compoenente <AddCategory />', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input')
        const value = 'Hola mundo'

        input.simulate('change', { target: {value} })

        const inputAfter = wrapper.find('input')
        // console.log(inputAfter.prop('value'))
        expect(inputAfter.prop('value')).toBe(value)
    })

    test('No debe de poster la informacion en onSubmit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled()
    })
    
    test('Debe postear la informacion en onSubmit', () => {
        const input = wrapper.find('input')
        const value = 'Hola mundo'

        input.simulate('change', { target: {value} })

        wrapper.find('form').simulate('submit', {preventDefault(){}})

        //De las siguientes tres formas se puede testiar que una función setCategories fue llamada
        // 1. Se espera que la función sea llamada
        expect(setCategories).toHaveBeenCalled()
        // 2. Se espera que la función sea llamada una vez
        expect(setCategories).toHaveBeenCalledTimes(1)
        // 3. Se espera que la función sea llamada con una función como argumento
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

        expect(input.prop('value')).toBe('')
    })
    
})
