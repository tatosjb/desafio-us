import React from 'react'
import Layout from '.'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'


let container = null

describe('Layout', () => {
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
      render((<Layout profile="sample">
        <div id="children">CHILDREN</div>
      </Layout>), container)
    })

    expect(container.querySelector('h1')).toHaveTextContent('React Programming Exercise')
    expect(container.querySelector('#children')).toHaveTextContent('CHILDREN')
  })
})
