import React from 'react'
import Header from '.'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'


let container = null

describe('Header', () => {
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
      render(<Header />, container)
    })

    expect(container).toHaveTextContent(/React Programming Exercise$/)
    expect(container.querySelector('img')).toBeTruthy()
  })
})
