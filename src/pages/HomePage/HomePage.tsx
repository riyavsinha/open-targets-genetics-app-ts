import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Theme, Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import {
  faDownload,
  faLaptopCode,
  faQuestionCircle,
  faFileAlt,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../ot-ui-components';
import Search from '../../components/Search';
import ScrollDownButton from '../../components/ScrollDownButton';
import NavBar from '../../components/NavBar/NavBar';
import Version from '../../components/Version';
import Footer from '../../components/Footer';
import { Splash } from '../../ot-ui-components';

import HomeBox from './HomeBox';
import HelpBoxPanel from './HelpBoxPanel';

import { externalLinks, mainMenuItems } from '../../constants';

const EXAMPLES = [
  { label: 'PCSK9', url: '/gene/ENSG00000169174', type: 'gene' },
  {
    label: '1_154453788_C_T',
    url: '/variant/1_154453788_C_T',
    type: 'variant-id',
  },
  { label: 'rs4129267', url: '/variant/1_154453788_C_T', type: 'variant-rsid' },
  {
    label: 'LDL cholesterol (Willer CJ et al. 2013)',
    url: '/study/GCST002222',
    type: 'study',
  },
];

const useStyles = makeStyles((theme: Theme) => {
  return {
    searchSection: {
      position: 'relative',
      height: '100vh',
      overflow: 'visible',
    },
    examples: {
      marginTop: '12px',
    },
    exampleLink: {
      marginTop: '12px',
    },
    scrollDown: {
      position: 'absolute',
      bottom: '10px',
    },
    linkHeader: {
      marginTop: '22px',
    },
    scrollDownContainer: {
      position: 'absolute',
      bottom: 0,
    },
    hpSection: {
      marginBottom: '40px',
      marginTop: '80px',
    },
    linksContainer: {
      marginTop: '15px',
      marginBottom: '15px',
    },
    homeSection: {
      marginBottom: '40px',
    },
  };
});

const HomePage = () => {
  const searchSectionRef = useRef<HTMLElement | null>(null);
  const classes = useStyles();

  const handleScrollDown = () => {
    const node = searchSectionRef.current;
    if (node) {
      const rect = node.getBoundingClientRect();
      window.scrollTo({ top: rect.height, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Open Targets Genetics</title>
      </Helmet>
      <main ref={searchSectionRef}>
        <Grid
          className={classes.searchSection}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Splash />
          <NavBar
            name="Genetics"
            items={mainMenuItems}
            search={null}
            homepage
          />
          <HomeBox>
            <Search />
            <Grid
              container
              className={classes.examples}
              justifyContent="space-around"
            >
              {EXAMPLES.map((d, i) => (
                <Typography
                  key={i}
                  style={{ textAlign: 'center' }}
                  className={classes.exampleLink}
                >
                  <Link to={d.url}>{d.label}</Link>
                </Typography>
              ))}
            </Grid>
            <Typography
              style={{
                marginTop: '25px',
              }}
              align="center"
            >
              Note: genomic coordinates are based on GRCh38
            </Typography>

            <Typography
              className={classes.linkHeader}
              variant="subtitle2"
              align="center"
            >
              Last updated:
            </Typography>
            <Version />
          </HomeBox>
          <Grid
            container
            item
            justifyContent="center"
            className={classes.scrollDownContainer}
          >
            <ScrollDownButton
              className={classes.scrollDown}
              onClick={handleScrollDown}
            />
          </Grid>
        </Grid>
      </main>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        className={classes.hpSection}
      >
        <Grid xs={10} md={8} className={classes.homeSection}>
          <Typography variant="h4" component="h1" align="center" paragraph>
            About Open Targets Genetics
          </Typography>
          <Typography paragraph>
            Open Targets Genetics is a comprehensive tool highlighting
            variant-centric statistical evidence to allow both prioritisation of
            candidate causal variants at trait-associated loci and
            identification of potential drug targets.
          </Typography>
          <Typography paragraph>
            It aggregates and integrates genetic associations curated from both
            literature and newly-derived loci from UK Biobank and FinnGen and
            also contains functional genomics data (e.g. chromatin conformation,
            chromatin interactions) and quantitative trait loci (eQTLs, pQTLs
            and sQTLs). Large-scale pipelines apply statistical fine-mapping
            across thousands of trait-associated loci to resolve association
            signals and link each variant to its proximal and distal target
            gene(s) using a Locus2Gene assessment. Integrated cross-trait
            colocalisation analyses and linking to detailed pharmaceutical
            compounds extend the capacity of Open Targets Genetics to explore
            drug repositioning opportunities and shared genetic architecture.
          </Typography>
        </Grid>
        <Grid xs={10} md={8} className={classes.homeSection}>
          <Typography variant="h4" component="h1" align="center" paragraph>
            Get started with Open Targets Genetics
          </Typography>

          <Grid
            container
            justifyContent="space-evenly"
            alignItems="flex-start"
            spacing={5}
            className={classes.linksContainer}
          >
            <Grid item xs={12} sm={'auto'}>
              <HelpBoxPanel
                fai={faDownload}
                url="https://genetics-docs.opentargets.org/data-access/data-download"
                label="Download all of our open datasets"
                external
              />
            </Grid>
            <Grid item xs={12} sm={'auto'}>
              <HelpBoxPanel
                fai={faLaptopCode}
                url="https://genetics-docs.opentargets.org/data-access/graphql-api"
                label="Access data with our GraphQL API"
                external
              />
            </Grid>

            <Grid item xs={12} sm={'auto'}>
              <HelpBoxPanel
                fai={faQuestionCircle}
                url="https://genetics-docs.opentargets.org/"
                label="Check out our Platform documentation"
                external
              />
            </Grid>

            <Grid item xs={12} sm={'auto'}>
              <HelpBoxPanel
                fai={faFileAlt}
                url="https://genetics-docs.opentargets.org/citation"
                label="Read our latest Platform publications"
                external
              />
            </Grid>

            <Grid item xs={12} sm={'auto'}>
              <HelpBoxPanel
                fai={faCommentDots}
                url="https://community.opentargets.org/"
                label="Join the Open Targets Community"
                external
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer externalLinks={externalLinks} />
    </>
  );
};

export default HomePage;
