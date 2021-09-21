import React from 'react'
import LayoutBase from '.'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'


let container = null

describe('LayoutBase', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  it('renders children below header', () => {
    act(() => {
      render((<LayoutBase profile="sample">
        <div id="children">CHILDREN</div>
      </LayoutBase>), container)
    })

    expect(container.querySelector('h1')).toHaveTextContent(/React Programming Exercise$/)
    expect(container.querySelector('#children')).toHaveTextContent(/CHILDREN$/)
  })
})
