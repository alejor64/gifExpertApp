import '@testing-library/jest-dom'
import {useFetchGif} from '../../hooks/useFetchGif'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGif', () => {
    test('Debe retornar el estado inicial', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGif('Naruto'))
        const {data, loading} = result.current
        
        // console.log(data, loading)
        
        await waitForNextUpdate()
        
        expect(data).toEqual([])
        expect(loading).toBe(true)
    })
    
    test('Debe retornar un arreglo de imgs y loading en false', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGif('Naruto'))
        await waitForNextUpdate()

        const {data, loading} = result.current
        
        expect(data.length).toBe(10)
        expect(loading).toBe(false)
    })
    
    
})
