/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query SearchQuery($queryString: String!) {\n    search(queryString: $queryString) {\n      totalGenes\n      totalVariants\n      totalStudies\n      genes {\n        id\n        symbol\n        chromosome\n        start\n        end\n      }\n      variants {\n        id\n        rsId\n        chromosome\n        position\n        refAllele\n        altAllele\n      }\n      studies {\n        studyId\n        traitReported\n        pmid\n        pubAuthor\n        pubDate\n        pubJournal\n        nInitial\n        numAssocLoci\n        hasSumstats\n      }\n    }\n  }\n": types.SearchQueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchQuery($queryString: String!) {\n    search(queryString: $queryString) {\n      totalGenes\n      totalVariants\n      totalStudies\n      genes {\n        id\n        symbol\n        chromosome\n        start\n        end\n      }\n      variants {\n        id\n        rsId\n        chromosome\n        position\n        refAllele\n        altAllele\n      }\n      studies {\n        studyId\n        traitReported\n        pmid\n        pubAuthor\n        pubDate\n        pubJournal\n        nInitial\n        numAssocLoci\n        hasSumstats\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchQuery($queryString: String!) {\n    search(queryString: $queryString) {\n      totalGenes\n      totalVariants\n      totalStudies\n      genes {\n        id\n        symbol\n        chromosome\n        start\n        end\n      }\n      variants {\n        id\n        rsId\n        chromosome\n        position\n        refAllele\n        altAllele\n      }\n      studies {\n        studyId\n        traitReported\n        pmid\n        pubAuthor\n        pubDate\n        pubJournal\n        nInitial\n        numAssocLoci\n        hasSumstats\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;