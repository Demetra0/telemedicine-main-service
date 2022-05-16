import { User } from '../../../modules/users/interfaces/user.interface';
import faker from '@faker-js/faker/locale/ru';

export const users: User[] = [
  {
    snils: '' + Math.floor(Math.random() * 100000000000),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    patronymic: faker.name.middleName(),
    gender: faker.name.gender(),
    dateOfBirth: '' + faker.date.between('1960-01-01', '2022-01-01'),
    city: faker.address.city(),
    street: faker.address.streetAddress(),
    houseNumber: faker.datatype.number({ min: 1, max: 200 }),
    apartmentNumber: faker.datatype.number({ min: 1, max: 200 }),
    postalCode: faker.datatype.number({ min: 1, max: 800 }),
    passportSeries: faker.datatype.number({ min: 4, max: 4 }),
    passportNumber: faker.datatype.number({ min: 6, max: 6 }),
    whoIssuedPassport: "ОТДЕЛОМ ВНУТРЕННИХ ДЕЛ 'ГОЛЬЯНОВО' ГОР. МОСКВЫ",
    dateIssueOfThePassport: '' + faker.date.between('1960-01-01', '2022-01-01'),
    password: faker.datatype.string(10),
  },
];
