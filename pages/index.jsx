import { 
  Header,
  BigDeals,
  Deals,
  BigCategories,
  SaleCategories,
  Sales,
  HomeCategory,
  FlatHomeCategory, 
  Categories, 
} from '../components';

import langRedirection from '../utils/redirections/langRedirection/langRedirection';
import routeRedirection from '../utils/redirections/routeRedirection/routeRedirection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { wrapper } from '../store/store';

import cls from './home.module.scss';

const Home = () => {
  const { t, i18n } = useTranslation('common');

  const categoriesOne = [
    'https://f.nooncdn.com/cms/pages/20220920/60c6d66b9b79b8674453b3231c75428a/en_dk_eg-CBs-01.png',
    'https://f.nooncdn.com/cms/pages/20220920/60c6d66b9b79b8674453b3231c75428a/en_dk_eg-CBs-02.png',
    'https://f.nooncdn.com/cms/pages/20220920/60c6d66b9b79b8674453b3231c75428a/en_dk_eg-CBs-03.png',
    'https://f.nooncdn.com/cms/pages/20220920/60c6d66b9b79b8674453b3231c75428a/en_dk_eg-CBs-04.png',
    'https://f.nooncdn.com/cms/pages/20220920/60c6d66b9b79b8674453b3231c75428a/en_dk_eg-CBs-05.png',
    'https://f.nooncdn.com/cms/pages/20220920/60c6d66b9b79b8674453b3231c75428a/en_dk_eg-CBs-06.png'
  ]

  const categoriesTwo = [
    'https://f.nooncdn.com/cms/pages/20220522/1667494b266b1fbfd26e16c707e86dbe/en_CBs-01.png',
    'https://f.nooncdn.com/cms/pages/20220522/1667494b266b1fbfd26e16c707e86dbe/en_CBs-02.png',
    'https://f.nooncdn.com/cms/pages/20220522/1667494b266b1fbfd26e16c707e86dbe/en_CBs-03.png',
    'https://f.nooncdn.com/cms/pages/20220522/1667494b266b1fbfd26e16c707e86dbe/en_CBs-04.png',
    'https://f.nooncdn.com/cms/pages/20220522/1667494b266b1fbfd26e16c707e86dbe/en_CBs-05.png',
    '	https://f.nooncdn.com/cms/pages/20220522/1667494b266b1fbfd26e16c707e86dbe/en_CBs-06.png'
  ]

  const categoriesThree = [
    'https://f.nooncdn.com/cms/pages/20220922/9d7e6debcff57b671dc67e805dc695cf/en_dk_eg-mw-01.png',
    'https://f.nooncdn.com/cms/pages/20220922/5693aa9e9480ac83e499d8c49637b4c6/en_dk_eg-mw-02.png',
    'https://f.nooncdn.com/cms/pages/20220922/5693aa9e9480ac83e499d8c49637b4c6/en_dk_eg-mw-04.png',
    'https://f.nooncdn.com/cms/pages/20220922/5693aa9e9480ac83e499d8c49637b4c6/en_dk_eg-mw-05.png',
    'https://f.nooncdn.com/cms/pages/20220922/5693aa9e9480ac83e499d8c49637b4c6/en_dk_eg-mw-08.png',
    'https://f.nooncdn.com/cms/pages/20220922/5693aa9e9480ac83e499d8c49637b4c6/en_dk_eg-mw-07.png'
  ]

  const categoriesfour = [
    'https://f.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-19.png',
    'https://f.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-23.png',
    'https://f.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-49.png',
    'https://f.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-21.png',
    'https://f.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-24.png',
    'https://f.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-22.png'
  ]

  const sales = [
    'https://f.nooncdn.com/cms/pages/20220908/06c927cbf71870cc1d25428d4a022215/en_dk_eg-sfb-01.png',
    'https://f.nooncdn.com/cms/pages/20220913/27b9cf0d739149e965e1e0c0766fa8bb/en_dk_eg-sfb-01.png',
    'https://f.nooncdn.com/cms/pages/20220922/05415b6b78e9f8bf4d1a9d1c0f581fa1/en_dk_eg-sfb-01.png'
  ]

  return (
    <div className={cls.home}>

      <Header />

      <Categories />

      <BigDeals />

      <Deals />

      {/* <DealsTwo /> */}

      <BigCategories categories={categoriesOne} />

      <BigCategories categories={categoriesTwo} />

      <BigCategories categories={categoriesThree} />

      <SaleCategories categories={categoriesfour} />

      <Sales sales={sales} />4

      {/* <HomeCategory /> */}

      <HomeCategory rounded={true} />

      {/* <HomeCategoryThree /> */}

      <FlatHomeCategory />

      {/* <HomeCategoryTwo /> */}

      {/* <CategoriesTwo /> */}

      {/* <TopProducts /> */}

    </div>
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
          locale
        },
      };
    }
);

export default Home;