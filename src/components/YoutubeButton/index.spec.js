import React from 'react'
import YoutubeButton from '.'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'


let container = null

describe('YoutubeButton', () => {
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
      render(<YoutubeButton profile="sample" />, container)
    })

    const element = container.querySelector('a')

    expect(element).toHaveAttribute('href', 'https://youtube.com/user/sample')
    expect(element).toHaveClass('youtubeButton')
    expect(element).not.toHaveClass('disabled')
    expect(element.querySelector('i')).toHaveClass('fa-youtube-square')
  })

  it('renders the button with a blank profile text', () => {
    act(() => {
      render(<YoutubeButton profile="" />, container)
    })

    const element = container.querySelector('a')

    expect(element).not.toHaveAttribute('href')
    expect(element).toHaveClass('disabled')
    expect(element.querySelector('i')).toHaveClass('fa-youtube-square')
  })
})
