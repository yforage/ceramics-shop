export interface ICategorie {
  id: string;
  name: string;
  content: string[];
}

export interface ICard {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
}

export interface IGallerySlideData {
  title: string;
  description: string;
  image: string;
}

export enum ECardsSorting {
  AVAILABILITY = 'availability',
  ASC = 'asc',
  DESC = 'desc',
  POPULARITY = 'popularity'
}
