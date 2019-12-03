import { City } from './city';

export class Problem {
  id: number;
  title: string;
  longitude: number;
  latitude: number;
  description: string;
  city: City;
  createdAt: number;
  status: string;
  assignetAt: number;
  solvedAt: number;

  constructor(
    id: number,
    title: string,
    longitude: number,
    latitude: number,
    description: string,
    city: City,
    createdAt: number,
    status: string,
    assignetAt: number,
    solvedAt: number
  ) {
    this.id = id;
    this.title = title;
    this.longitude = longitude;
    this.latitude = latitude;
    this.description = description;
    this.city = city;
    this.createdAt = createdAt;
    this.status = status;
    this.assignetAt = assignetAt;
    this.solvedAt = solvedAt;
  }
}
