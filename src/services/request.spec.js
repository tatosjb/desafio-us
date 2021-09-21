import request from './request'

describe('request', () => {
  beforeEach(() => {
    window.fetch = jest.fn()
  })

  it('fetches without options', () => {
    request('http://example.com')
    expect(window.fetch).toHaveBeenCalledTimes(1)
    expect(window.fetch).toHaveBeenCalledWith('http://example.com', {
      headers: {
        'X-API-Key': 'd0ywBucVrXRlMQhENZxRtL3O7NPgtou2mwnLARTr'
      }
    })
  })

  it('fetches with options', () => {
    request('http://example.com', {
      method: 'POST',
    })

    expect(window.fetch).toHaveBeenCalledTimes(1)
    expect(window.fetch).toHaveBeenCalledWith('http://example.com', {
      method: 'POST',
      headers: {
        'X-API-Key': 'd0ywBucVrXRlMQhENZxRtL3O7NPgtou2mwnLARTr'
      }
    })
  })

  it('fetches with headers', () => {
    request('http://example.com', {
      headers: {
        'content-type': 'application/json'
      },
    })

    expect(window.fetch).toHaveBeenCalledTimes(1)
    expect(window.fetch).toHaveBeenCalledWith('http://example.com', {
      headers: {
        'X-API-Key': 'd0ywBucVrXRlMQhENZxRtL3O7NPgtou2mwnLARTr',
        'content-type': 'application/json'
      }
    })
  })
})
