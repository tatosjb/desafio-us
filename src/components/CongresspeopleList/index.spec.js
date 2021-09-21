import React from 'react'
import CongresspeopleList from '.'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'


let container = null

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

describe('CongresspeopleList', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  it('renders all the congresspeople', () => {
    act(() => {
      render(<CongresspeopleList congresspeople={congresspeople} />, container)
    })

    const cards = document.querySelectorAll('.card')

    expect(cards).toHaveLength(3)

    expect(cards[0].querySelector('h5')).toHaveTextContent(/Lamar Alexander$/)
    expect(cards[0].querySelector('p:first-child')).toHaveTextContent('Party: R')
    expect(cards[0].querySelector('p:nth-child(2)')).toHaveTextContent('State: TN')
    expect(cards[0].querySelector('p:nth-child(3)')).toHaveTextContent('Can apply from 2020')
    expect(cards[0].querySelectorAll('footer a')[0]).toHaveAttribute('href', 'https://twitter.com/SenAlexander')
    expect(cards[0].querySelectorAll('footer a')[1]).toHaveAttribute('href', 'https://facebook.com/senatorlamaralexander')
    expect(cards[0].querySelectorAll('footer a')[2]).toHaveAttribute('href', 'https://youtube.com/user/lamaralexander')

    expect(cards[1].querySelector('h5')).toHaveTextContent(/Tammy Middle Name Baldwin$/)
    expect(cards[1].querySelector('p:first-child')).toHaveTextContent('Party: D')
    expect(cards[1].querySelector('p:nth-child(2)')).toHaveTextContent('State: WI')
    expect(cards[1].querySelector('p:nth-child(3)')).toHaveTextContent('Can apply from 2018')
    expect(cards[1].querySelectorAll('footer a')[0]).toHaveAttribute('href', 'https://twitter.com/SenatorBaldwin')
    expect(cards[1].querySelectorAll('footer a')[1]).toHaveAttribute('href', 'https://facebook.com/senatortammybaldwin')
    expect(cards[1].querySelectorAll('footer a')[2]).toHaveAttribute('href', 'https://youtube.com/user/witammybaldwin')

    expect(cards[2].querySelector('h5')).toHaveTextContent(/John Barrasso$/)
    expect(cards[2].querySelector('p:first-child')).toHaveTextContent('Party: R')
    expect(cards[2].querySelector('p:nth-child(2)')).toHaveTextContent('State: WY')
    expect(cards[2].querySelector('p:nth-child(3)')).toHaveTextContent('Can apply from 2018')
    expect(cards[2].querySelectorAll('footer a')[0]).toHaveAttribute('href', 'https://twitter.com/SenJohnBarrasso')
    expect(cards[2].querySelectorAll('footer a')[1]).toHaveAttribute('href', 'https://facebook.com/johnbarrasso')
    expect(cards[2].querySelectorAll('footer a')[2]).toHaveAttribute('href', 'https://youtube.com/user/barrassowyo')
  })
})
