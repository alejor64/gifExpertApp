import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import GifGrid from '../../components/GifGrid'
import { useFetchGif } from '../../hooks/useFetchGif'

jest.mock('../../hooks/useFetchGif')

describe('Prueba en el componente <GifGrid />', () => {
    const category = 'Dragon Ball'
    
    test('Debe renderizar el compoenente', () => {
        useFetchGif.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(true)
    })
    
    test('Debe de mostrar los item cuando se cargan imgs useFetchGif', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhosto/img.jpg',
            title: 'Cualquier nombre'
        }]

        useFetchGif.mockReturnValue({
            data: gifs,
            loading: false
        })
    
        const wrapper = shallow(<GifGrid category={category} />)
        
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
    
})
