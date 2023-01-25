import { gql } from "@apollo/client";

export const SEARCH_QUERY = gql`
  fragment SearchQueryGenes on Gene {
    id
    symbol
    chromosome
    start
    end
  }
  fragment SearchQueryVariants on Variant {
    id
    rsId
    chromosome
    position
    refAllele
    altAllele
  }
  fragment SearchQueryStudies on Study {
    studyId
    traitReported
    pmid
    pubAuthor
    pubDate
    pubJournal
    nInitial
    numAssocLoci
    hasSumstats
  }
  query SearchQuery($queryString: String!) {
    search(queryString: $queryString) {
      totalGenes
      totalVariants
      totalStudies
      genes {
        ...SearchQueryGenes
      }
      variants {
        ...SearchQueryVariants
      }
      studies {
        ...SearchQueryStudies
      }
    }
  }
`;