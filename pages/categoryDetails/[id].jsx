import { Header, Categories, HomeCategory, CategoryDeals, CategoryDealsTwo, Brands } from '../../components';
import CategoryFilter from './../../components/category/CategoryFilter/CategoryFilter';

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from "../../store/store";

import { useTranslation } from "next-i18next";

import cls from './categoryDetails.module.scss';

const CategoryDetails = () => {
  return (
    <Container maxWidth="xxl">

      <Grid container>

        {/* <Grid item lg={3}>

          <CategoryFilter />

        </Grid> */}

        <Grid item lg={12}>

          <Header />

          <Categories />

          <HomeCategory />

          <CategoryDeals />

          <HomeCategory />

          <CategoryDealsTwo />

          <HomeCategory />

          <Brands />

        </Grid>

      </Grid>

    </Container>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, locale, resolvedUrl }) => {
      const languageRedirection = langRedirection(req, locale);
      const routerRedirection = routeRedirection(req, resolvedUrl);

      if (languageRedirection) return languageRedirection;
      if (routerRedirection) return routerRedirection;

      return {
        props: {
          ...(await serverSideTranslations(locale, ["common", "nav"])),
        },
      };
    }
);

export default CategoryDetails