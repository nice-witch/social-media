import {classNames} from './classNames'

describe('ClassNames', () => {
    test('added only cls', () => {
      expect(classNames('SOME_CLASS')).toBe('SOME_CLASS');
    });

    test('added cls and additionally', () => {
        expect(classNames('SOME_CLASS', {}, ['ANOTHER_CLASS']))
            .toBe('SOME_CLASS ANOTHER_CLASS');
    });

    test('added all mods truthful', () => {
        expect(classNames('SOME_CLASS', {'FOCUS': true, 'HOVER': true}, ['ANOTHER_CLASS']))
            .toBe('SOME_CLASS ANOTHER_CLASS FOCUS HOVER');
    });

    test('added one mods true, second mods false', () => {
        expect(classNames('SOME_CLASS', {'FOCUS': true, 'HOVER': false}, ['ANOTHER_CLASS']))
            .toBe('SOME_CLASS ANOTHER_CLASS FOCUS');
    });
  })