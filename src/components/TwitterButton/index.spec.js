import React from 'react'
import TwitterButton from '.'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'


let container = null

describe('TwitterButton', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  it('renders the button with a valid profile text', () => {
    act(() => {
      render(<TwitterButton profile="sample" />, container)
    })

    const element = container.querySelector('a')

    expect(element).toHaveAttribute('href', 'https://twitter.com/sample')
    expect(element).toHaveClass('twitterButton')
    expect(element).not.toHaveClass('disabled')
    expect(element.querySelector('i')).toHaveClass('fa-twitter-square')
  })

  it('renders the button with a blank profile text', () => {
    act(() => {
      render(<TwitterButton profile="" />, container)
    })

    const element = container.querySelector('a')

    expect(element).not.toHaveAttribute('href')
    expect(element).toHaveClass('disabled')
    expect(element.querySelector('i')).toHaveClass('fa-twitter-square')
  })
})
