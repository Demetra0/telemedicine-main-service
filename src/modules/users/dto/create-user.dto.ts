import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly snils: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  readonly patronymic: string;

  @IsNotEmpty()
  @IsEnum(Gender, {
    message: 'gender must be either male or female',
  })
  readonly gender: string;

  @IsString()
  @IsNotEmpty()
  readonly dateOfBirth: string;

  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @IsString()
  @IsNotEmpty()
  readonly street: string;

  @IsNumber()
  @IsNotEmpty()
  readonly houseNumber: number;

  @IsNumber()
  @IsNotEmpty()
  readonly apartmentNumber: number;

  @IsNumber()
  @IsNotEmpty()
  readonly postalCode: number;

  @IsNumber()
  @IsNotEmpty()
  readonly passportSeries: number;

  @IsNumber()
  @IsNotEmpty()
  readonly passportNumber: number;

  @IsString()
  @IsNotEmpty()
  readonly whoIssuedPassport: string;

  @IsString()
  @IsNotEmpty()
  readonly dateIssueOfThePassport: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  readonly password: string;
}
