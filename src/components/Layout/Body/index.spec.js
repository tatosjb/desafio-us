import React from 'react'
import LayoutBody from '.'
import { render, fireEvent, screen } from '@testing-library/react'

const congresspeople = [
  {
    id: 'A000360',
    title: 'Senator, 2nd Class',
    first_name: 'Lamar',
    middle_name: null,
    last_name: 'Alexander',
    party: 'R',
    twitter_account: 'SenAlexander',
    facebook_account: 'senatorlamaralexander',
    youtube_account: 'lamaralexander',
    next_election: '2020',
    state: 'TN',
    senate_class: '2'
  },
  {
    id: 'B001230',
    title: 'Senator, 1st Class',
    first_name: 'Tammy',
    middle_name: 'Middle Name',
    last_name: 'Baldwin',
    party: 'D',
    twitter_account: 'SenatorBaldwin',
    facebook_account: 'senatortammybaldwin',
    youtube_account: 'witammybaldwin',
    next_election: '2018',
    state: 'WI'
  },
  {
    id: 'B001261',
    first_name: 'John',
    middle_name: null,
    last_name: 'Barrasso',
    party: 'R',
    twitter_account: 'SenJohnBarrasso',
    facebook_account: 'johnbarrasso',
    youtube_account: 'barrassowyo',
    next_election: '2018',
    state: 'WY'
  }
]

const response = {
  results: [
    {
      members: congresspeople
    }
  ],
}

function fetchMock() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        json: () =>
          Promise.resolve(response),
      })
    }, 0)
  )
}

function mount() {
  return render(<LayoutBody />)
}

describe('LayoutBody', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(fetchMock)
  })

  afterEach(() => {
    window.fetch.mockClear()
  })

  it('renders the body', async () => {
    const { container } = mount()

    expect(container.querySelectorAll('input')).toHaveLength(1)
    expect(container.querySelectorAll('.card')).toHaveLength(0)

    expect(await screen.findAllByRole('header')).toHaveLength(3)
  })

  it('filters by name', async () => {
    const { container } = mount()

    expect(await screen.findAllByRole('header')).toHaveLength(3)
    fireEvent.change(container.querySelector('input'), { target: { value: 'middle' } })
    expect(container.querySelector('input')).toHaveValue('middle')
    expect(await screen.findAllByRole('header')).toHaveLength(1)
    expect(container.querySelector('h5')).toHaveTextContent(/Tammy Middle Name Baldwin$/)
  })
})
