/**
 * @jest-environment jsdom
 */

import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Heading from './index';

describe('Heading', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render text as child', () => {
    act(() => {
      render(<Heading tag="h1">Title</Heading>, container);
    });

    expect(container?.textContent).toEqual('Title');
  });

  it('test h1 render tag', () => {
    act(() => {
      render(<Heading tag="h1" />, container);
    });

    expect(container?.querySelector('h1')).not.toBeNull();
  });

  it('test classname', () => {
    act(() => {
      render(<Heading tag="h1" className="test-class" />, container);
    });

    expect(container?.querySelector('.test-class')).not.toBeNull();
  });

  it('set className by tag', () => {
    act(() => {
      render(<Heading tag="h1" />, container);
    });

    expect(container?.querySelector('.h1')).not.toBeNull();
  });
});
