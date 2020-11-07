import { Moment } from "moment";

export interface ICity {
  id: string | number;
  country: string;
  name: string;
  tours: Array<ITour>;
  bannerImg: string;
  description: string;
  filters: Array<IFilter>;
  lat: number;
  lng: number;
}

export interface ITour {
  name: string;
  description: string;
  id: number | string;
  tourType: string;
  length: string;
  rating?: string;
  url: string;
  badges?: Array<IBadge>;
  sites: string;
}

export interface ITourGroup {
  name: string;
  tours: string;
}

export interface ISite {
  id: string | number;
  url: string;
  name: string;
  description: string;
  type: string;
  content: string;
  lat: number;
  lng: number;
  interests: Array<string>;
}

export interface IFilter {
  interest: IInterest;
  isActive: boolean;
}

export interface IBadge {
  icon: string;
  name: string;
  isActive: boolean;
}

export interface ITrip {
  id: string;
  tours: Array<ITour>;
  city: ICity;
  startDate: Moment;
  endDate: Moment;
}

export interface ILoginUser {
  email: string;
  name: string;
  photoUrl: string;
  platform: string;
}

export interface IInterest {
  name: string;
}

export interface ISiteModel {
  url: string;
  bannerImg: string;
  otherImgs: Array<string>;
  content: Array<any>;
}

export type IPlace = {
  coordinates: ICoordinate,
  photos: Array<string>,
  name: string,
  address: string,
  reviews: Array<IReview>,
  website: string,
  id: string,
}

type ICoordinate = {
  lat: number,
  lng: number,
}

// type IAddress = {
//   address1: string,
//   postalCode: string,
//   city: string,
//   state: string,
//   country: string,
// }

type IReview = {
  rating: number,
  description: string,
  author: string,
  authorImg: string,
}