import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
    let wrapper;
    const mockIdea = jest.fn();
    const mockHeadline = 'Spider-man'

    beforeEach(() => {
        wrapper = shallow(<SearchForm changeNews={mockIdea} findNews={mockHeadline} />);
    })

    it('should match snapshot',() => {
      expect(wrapper).toMatchSnapshot();
    })

    it('should check if state has changed when invoking handleChange',() => {
        let mockState = {
            target: {
                name: 'title',
                value: 'Spidey senses'
            }
        };

        let expected = 'Spidey senses';

        wrapper.instance().handleChange(mockState);

        expect(wrapper.state('title')).toEqual(expected);
    })
})