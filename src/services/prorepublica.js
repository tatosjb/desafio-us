import request from './request'

export function fetchMembers(session, chamber){
  return request(`https://api.propublica.org/congress/v1/${session}/${chamber}/members.json`)
  .then((res) => res.json())
  .then((json) => json.results[0].members)
}
