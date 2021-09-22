import { fullName } from './congress-person'

describe('.fullName', () => {
  it('renders the full name with first and last names', () => {
    expect(fullName({ first_name: 'John', last_name: 'Doo'})).toEqual('John Doo')
  })

  it('renders the full name with first, middle and last names', () => {
    expect(fullName({ first_name: 'John', middle_name: 'Scooby', last_name: 'Doo'})).toEqual('John Scooby Doo')
  })
})
