import useFetchCongresspeople from './useFetchCongresspeople'
import { renderHook, act } from '@testing-library/react-hooks'

const firstSenator = {
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
}

const secondSenator = {
  id: 'A000360',
  title: 'Senator, 2nd Class',
  first_name: 'Some',
  middle_name: 'Filter',
  last_name: 'Sample',
  party: 'R',
  twitter_account: null,
  facebook_account: null,
  youtube_account: null,
  next_election: '2020',
  state: 'TN',
  senate_class: '2'
}

const congresspeople = [
  firstSenator,
  secondSenator,
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
    }, 100)
  )
}

describe('.useFetchCongressPeople', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(fetchMock)
  })

  afterEach(() => window.fetch.mockClear())

  it('returns request result', async () => {
    const { result: state, waitForNextUpdate } = renderHook(() => useFetchCongresspeople())

    expect(state.current).toEqual([])

    await waitForNextUpdate()

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(state.current).toEqual(congresspeople)
  })

  it('returns a filtered result when send a filter as a prop', async () => {
    const { result: state, waitForNextUpdate } = renderHook(() => useFetchCongresspeople('filter sample'))

    await waitForNextUpdate()

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(state.current).toEqual([secondSenator])
  })
})
