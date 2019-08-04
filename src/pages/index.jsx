import React from 'react';
import { graphql } from 'gatsby';

import ArchitectOfTheDay from '../components/Home/ArchitectOfTheDay/ArchitectOfTheDay';
import Layout from '../components/Layout/Layout';
import '../locales/i18n';

const IndexPage = (props) => {
  const { data: { allContentfulArchitect: { edges } } } = props;

  const { node: architect } = edges.find(e => e.node.authorOfTheDay);

  return (
    <Layout>
      <h1>HOME PAGE</h1>
      <p>
        Длительный период отсутствия собственной государственности и сохранение консервативных,
        феодальных по форме политических установок существенно замедлили развитие
        культуры Белоруссии и формирование белорусской нации.
        Земли Белоруссии веками были включены в другие государственно-национальные образования,
        что значительно повлияло на стиль архитектуры в стране.
        Уже в начале XIV века белорусские земли входят в состав
        Великого княжества Литовского, затем в состав Речи Посполитой.
      </p>
      <p>
        С конца XVIII века часть земель Белоруссии подчинено Российской империи.
      </p>
      <p>
        Отмечено два мощных воздействия на художественно-стилистическую ситуацию в стране:
      </p>
      <ul>
        <li>древнерусское влияние (XI—XIII века);</li>
        <li>западноевропейское влияние (с XIV до XIX века).</li>
      </ul>
      <p>
        Решение Сталина отдать часть земель Белоруссии с городом Вильно в состав Литвы лишило страну
        значительной доли архитектурного достояния, относящегося к готике и ренессансу,
        которые были общим культурным достоянием литовского и белорусского народов.
        К тому же это лишило Белоруссию древней исторической столицы.
      </p>
      <ArchitectOfTheDay architect={architect} />
    </Layout>
  );
};

export default IndexPage;

export const arcQuery = graphql`
{
  allContentfulArchitect {
    edges {
      node {
        name
        vita
        authorOfTheDay
        path
        id
        img {
          file {
            url
          }
        }
      }
    }
  }
}
`;
