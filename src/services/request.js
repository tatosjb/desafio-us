const DEFAUL_OPTIONS = {
  headers: {}
}

export default function request(url, options = DEFAUL_OPTIONS) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'X-API-Key': 'd0ywBucVrXRlMQhENZxRtL3O7NPgtou2mwnLARTr',
    }
  })
}
