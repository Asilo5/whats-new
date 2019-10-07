import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
    let wrapper;
    const mockNews = jest.fn();
    const mockFindNews = jest.fn();
    const mockHeadline = 'Spider-man'

    beforeEach(() => {
        wrapper = shallow(<SearchForm findNews={mockNews} findNews={mockHeadline} />);
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
        //setup

        const mockEvent = { preventDefault: jest.fn()};
        wrapper.instance().emptyInputs = jest.fn();
        const mockHeadline = { headline: 'title'};

        //execution

        wrapper.instance().findArticle(mockEvent);
        //expectation

        expect(mockFindNews).toHaveBeenCalledWith(mockHeadline);
        expect(wrapper.instance().emptyInputs).toHaveBeenCalled();
    });

    it('should invoke findArticle on click ', () => {
        wrapper.instance.findArticle = jest.fn();
        // wrapper.instance.forceUpdate();
        const mockEvent = { preventDefault: jest.fn()};
        wrapper.find('button').simulate('click', mockEvent);

        expect(wrapper.instance().findArticle).toHaveBeenCalledWith();
    })
})