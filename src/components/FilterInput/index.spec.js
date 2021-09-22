import React from 'react'
import FilterInput from '.'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { fireEvent } from '@testing-library/react'

let container = null

describe('FilterInput', () => {
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
    const onChange = jest.fn()
    act(() => {
      render((<FilterInput value='sample' onChange={onChange}/>), container)
    })

    expect(container.querySelector('input')).toHaveValue('sample')

    fireEvent.change(container.querySelector('input'), { target: { value: 'changed' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
