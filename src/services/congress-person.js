export function fullName(congressperson) {
  return `${congressperson.first_name} ${congressperson.middle_name ? `${congressperson.middle_name} ` : ''}${congressperson.last_name}`
}
