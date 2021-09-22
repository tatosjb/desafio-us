import { fetchMembers } from './prorepublica'

const members = [{ some: 'member' }]

const response = {
  results: [
    { members }
  ]
}

function mockFetch(response) {
  window.fetch = jest.fn().mockImplementation(async () => {
    return {
      json: async () => {
        return response
      }
    }
  })
}

describe('.fetchMembers', () => {
  it('calls the api', async () => {
    mockFetch(response)

    await fetchMembers(115, 'senate')

    expect(window.fetch).toHaveBeenCalledTimes(1)
    const url = 'https://api.propublica.org/congress/v1/115/senate/members.json'

    expect(window.fetch).toHaveBeenCalledWith(url, expect.any(Object))
  })

  it('returns a list of members', async () => {
    mockFetch(response)

    expect(await fetchMembers(115, 'senate')).toEqual(members)
  })

  it('returns a clear array when does not have results', async () => {
    mockFetch({results: []})

    expect(await fetchMembers(115, 'senate')).toEqual([])
  })
})
