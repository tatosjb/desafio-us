import React from 'react'
import SocialMediaButton from '.'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'


let container = null

describe('SocialMediaButton', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  it('renders the button active rendering the url', () => {
    act(() => {
      render(<SocialMediaButton url="http://sample.url" active icon="fa-twitter-square" />, container)
    })
    const element = container.querySelector('a')

    expect(element).toHaveAttribute('href', 'http://sample.url')
    expect(element).not.toHaveClass('disabled')
    expect(element.querySelector('i')).toHaveClass('fa-twitter-square')
  })

  it('renders the button inactive not rendering a url', () => {
    act(() => {
      render(<SocialMediaButton url="http://sample.url" active={false} icon="fa-twitter-square" />, container)
    })
    const element = container.querySelector('a')

    expect(element).not.toHaveAttribute('href')
    expect(element).toHaveClass('disabled')
    expect(element.querySelector('i')).toHaveClass('fa-twitter-square')
  })
})
