import React from 'react';
import "@testing-library/jest-dom";
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wraper = shallow(<AddCategory setCategories={setCategories} />);
    
    beforeEach(() => {
        jest.clearAllMocks();
        wraper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe de mostrarse correctamente', () => {
        expect(wraper).toMatchSnapshot();
    });

    test('debede cambiar la caja de texto', () => {
        const input = wraper.find("input");
        const value = "Hola mundo";
        input.simulate("change", { target: { value } });
    });

    test('NO DEBE de poster la inofrmacion con submit', () => {
        wraper.find("form").simulate("submit", { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategory y limpiar el formulario', () => {
        const value = "Hola Mundo";

        wraper.find("input").simulate("change", { target: {value} });
        wraper.find("form").simulate("submit", { preventDefault() { } });
 
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
        expect( wraper.find("input").props().value).toBe('');
    });

});