import React from 'react'
import FacebookButton from '.'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'


let container = null

describe('FacebookButton', () => {
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
      render(<FacebookButton profile="sample" />, container)
    })

    const element = container.querySelector('a')

    expect(element).toHaveAttribute('href', 'https://facebook.com/sample')
    expect(element).toHaveClass('facebookColor')
    expect(element).not.toHaveClass('disabled')
    expect(element.querySelector('i')).toHaveClass('fa-facebook-square')
  })

  it('renders the button with a blank profile text', () => {
    act(() => {
      render(<FacebookButton profile="" />, container)
    })

    const element = container.querySelector('a')

    expect(element).not.toHaveAttribute('href')
    expect(element).toHaveClass('disabled')
    expect(element.querySelector('i')).toHaveClass('fa-facebook-square')
  })
})
