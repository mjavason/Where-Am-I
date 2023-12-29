import { IsNumber, Min, Max, IsNotEmpty } from 'class-validator';

export class LocationDto {
  @IsNumber()
  @Min(-90, { message: 'Latitude must be minimum -90 degrees' })
  @Max(90, { message: 'Latitude must be minimum 90 degrees' })
  @IsNotEmpty({ message: 'Latitude is required' })
  latitude!: number;

  @IsNumber()
  @Min(-180, { message: 'Longitude must be minimum -180 degrees' })
  @Max(180, { message: 'Longitude must maximum 180 degrees' })
  @IsNotEmpty({ message: 'Longitude is required' })
  longitude!: number;
}
