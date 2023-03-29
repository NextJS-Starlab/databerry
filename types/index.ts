import { AppDatasource as Datasource, DatasourceType } from '@prisma/client';
import { NextApiRequest, NextPage } from 'next/types';
import { Session } from 'next-auth';
import { ReactElement, ReactNode } from 'react';

import type { Document } from '@app/utils/datastores/base';

export * from './dtos';

export enum RouteNames {
  HOME = '/datastores',
  SIGN_IN = '/signin',
  SIGN_UP = '/signup',
  DATASTORES = '/datastores',
  CHAT = '/chat',
}

export type AppNextApiRequest = NextApiRequest & {
  session: Session;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export enum AppStatus {
  OK = 'OK',
  WARNING = 'WARNING',
  KO = 'KO',
}

export enum MetadataFields {
  datasource_id = 'datasource_id',
  tags = 'tags',
  text = 'text',
  chunk_hash = 'chunk_hash',
  datasource_hash = 'datasource_hash',
  chunk_offset = 'chunk_offset',
}

export type DocumentMetadata = {
  datasource_id: string;
  source_type: string;
  author?: string;
  source?: string;
  tags: string[];
};

export interface Chunk extends Document {
  metadata: DocumentMetadata & {
    chunk_id: string;
    chunk_hash: string;
    datasource_hash: string;
    chunk_offset: number;
  };
}
