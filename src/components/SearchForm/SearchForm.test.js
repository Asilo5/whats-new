import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
    let wrapper;
    const mockFindArticle = jest.fn();
    const mockHeadline = 'Spider-man'

    beforeEach(() => {
        wrapper = shallow(<SearchForm findNews={mockHeadline} />);
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
    });

    it('should clear out state', () => {
      //setup

      let mockState = {
          headline: 'health'
      }

      let expected = {
          headline: ''
      }
      //execution

      wrapper.instance().setState(mockState);
      wrapper.instance().emptyInputs();

      //expectation
      expect(wrapper.state()).toEqual(expected);
    });

    it('should invoke both findNews and emptyInputs when findArticle is called',() => {

        const mockEvent = { preventDefault: jest.fn()};
        wrapper.instance().emptyInputs = jest.fn();
        const mockHeadline = { headline: 'title'};

        wrapper.instance().findArticle(mockEvent);

        expect(mockFindArticle).toHaveBeenCalledWith(mockHeadline);
        expect(wrapper.instance().emptyInputs).toHaveBeenCalled();
    });

    it('should invoke findArticle on click ', () => {
        wrapper.instance.findArticle = jest.fn();
        // wrapper.instance.forceUpdate();
        const mockEvent = { preventDefault: jest.fn() };
        wrapper.find('button').simulate('click', mockEvent);

        expect(wrapper.instance().findArticle).toHaveBeenCalledWith();
    })
})