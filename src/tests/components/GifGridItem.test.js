import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import '@testing-library/jest-dom/extend-expect';

describe('Pruebas en <GifGridItem />', () => {

    const title = "Un titulo";
    const url = "https://localhost/algo.jpf";
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe de mostrar el copmponente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la imagen igual al ur;l y alt de lpos props', () => {
        const img = wrapper.find('img');
        // console.log(img.props())
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    });

    test('debe de tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.hasClass("animate__fadeIn")).toBe(true);
    });
});












