import { getGifs } from "../../helpers/getGifs";



describe('Preubas con  getGifs Fecth', () => {
    test('debe de trar 10 elementos', async () => {
        const gifs = await getGifs("Onje Punch");
        expect(gifs.length).toBe(10);
    });
    test('debe de trar 10 elementos', async () => {
        const gifs = await getGifs("");
        expect(gifs.length).toBe(0);
    });
});