import useFetchCongresspeople from './useFetchCongresspeople'
import { renderHook, act } from '@testing-library/react-hooks'

const congressPeople = [{
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
        }]

const response = {
  results: [
    {
      members: congressPeople
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
    expect(state.current).toEqual(congressPeople)
  })
})
