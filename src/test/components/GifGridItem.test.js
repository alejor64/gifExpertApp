import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('Purebas para el componente <GifGridItem />', () => {

    const title = 'Un titulo'
    const url = 'https://localhosto/img.png'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)
    
    test('Debe renderizar el componente <GifGridItem />', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe tener un parrafo con el Title', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })
    
    test('Debe tener la images igual al url y alt de los props', () => {
        const img = wrapper.find('img')
        // console.log(img.props())

        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })
    
    test('Debe tener animate__fadeIn como clase', () => {
        const div = wrapper.find('div')
        const claseCSS = div.prop('className')
        
        expect(claseCSS.includes('animate__fadeIn')).toBe(true)
    })
    
})
