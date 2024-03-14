export const employees = [];

for (let i = 1; i <= 100; i++) {
  const firstName = generateRandomName();
  const lastName = generateRandomName();
  const startDate = generateRandomDate(new Date(2010, 0, 1), new Date());
  const department = generateRandomDepartment();
  const dateOfBirth = generateRandomDate(new Date(1950, 0, 1), new Date(2000, 0, 1));
  const street = generateRandomAddress();
  const city = generateRandomCity();
  const state = generateRandomState();
  const zipCode = generateRandomZipCode();
  
  employees.push({
    id: i,
    firstName,
    lastName,
    startDate: startDate.toISOString().split('T')[0],
    department,
    dateOfBirth: dateOfBirth.toISOString().split('T')[0],
    street,
    city,
    state,
    zipCode
  });
}

function generateRandomName() {
  const names = ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Emma', 'Oliver', 'Sophia', 'Liam', 'Isabella'];
  return names[Math.floor(Math.random() * names.length)];
}

function generateRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateRandomDepartment() {
  const departments = ['Sales', 'Marketing', 'Development', 'Research', 'Human Resources', 'Finance'];
  return departments[Math.floor(Math.random() * departments.length)];
}

function generateRandomAddress() {
  const streets = ['Main St', 'Oak Ave', 'Pine Rd', 'Elm St', 'Maple Ave', 'Cedar Ln'];
  return Math.floor(Math.random() * 1000) + ' ' + streets[Math.floor(Math.random() * streets.length)];
}

function generateRandomCity() {
  const cities = ['Anytown', 'Otherville', 'Somewhere', 'Elsewhere', 'Anywhere', 'Nowhere'];
  return cities[Math.floor(Math.random() * cities.length)];
}

function generateRandomState() {
  const states = ['CA', 'NY', 'TX', 'FL', 'WA', 'IL'];
  return states[Math.floor(Math.random() * states.length)];
}

function generateRandomZipCode() {
  return Math.floor(Math.random() * (99999 - 10000) + 10000).toString();
}
