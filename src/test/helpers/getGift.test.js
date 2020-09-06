import { getGift } from "../../helpers/getGif"
import '@testing-library/jest-dom'

describe('Prueba en getGift Fetch', () => {
    test('Debe retornar 10 elementos', async () => {
        const gift = await getGift('Naruto')

        expect(gift.length).toBe(10)
    })

    test('Debe retornar 10 elementos', async () => {
        const gift = await getGift('')
        
        expect(gift.length).toBe(0)
    })
    
})
