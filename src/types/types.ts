export interface IServerResponse<T> {
  total: number;
  totalHits: number;
  hits: T[];
}

export interface IImages {
  id?: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

// export interface IImages {
//   id: number;
//   pageURL: string;
//   type: string;
//   tags: string;
//   previewURL: string;
//   previewWidth: number;
//   previewHeight: number;
//   webformatURL: string;
//   webformatWidth: number;
//   webformatHeight: number;
//   largeImageURL: string;
//   imageWidth: number;
//   imageHeight: number;
//   imageSize: number;
//   views: number;
//   downloads: number;
//   collections: number;
//   likes: number;
//   comments: number;
//   user_id: number;
//   user: string;
//   userImageURL: string;
// }
