import { IRelease, IInvalidRelease, IReleaseExtended } from './IRelease'

export interface IDownloadOptions {
  writePackageData?: boolean, 
  writeDetachedMetadata?: boolean, 
  targetDir?: string,
  onProgress?: (progress : number, release?: IRelease) => void
}

export interface IFetchOptions {
  filter? : string,
  sort?: boolean,
  cached?: boolean,
  filterInvalid?: boolean, 
  download?: boolean, // will download the release to cache if not specified otherwise
  downloadOptions?: IDownloadOptions,
  verify?: boolean
}

export interface IRepository {

  name : string;
  
  getReleases(options? : IFetchOptions): Promise<Array<(IRelease | IInvalidRelease)>>;

  getLatest(semverFilter? : string): Promise<IRelease | IReleaseExtended | null>;

}

export interface IRemoteRepository extends IRepository {
  repositoryUrl: string;

  download(release : IRelease, onProgress? : Function) : Promise<Buffer>

}