import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
    let wrapper;
    const mockIdea = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<SearchForm changeNews={mockIdea} findNews={} />);
    })
})