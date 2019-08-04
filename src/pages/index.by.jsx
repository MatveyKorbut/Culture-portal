import React from 'react';
import { graphql } from 'gatsby';

import ArchitectOfTheDay from '../components/Home/ArchitectOfTheDay/ArchitectOfTheDay';
import Layout from '../components/Layout/Layout';

const IndexPage = (props) => {
  const { data: { allContentfulArchitectBy: { edges } } } = props;

  const { node: architect } = edges.find(e => e.node.authorOfTheDay);

  return (
    <Layout>
      <h1>HOME PAGE</h1>
      <p>
        Працяглы перыяд адсутнасці ўласнай дзяржаўнасці і затрымка кансерватыўных,
        феадальных па форме палітычных установак істотна запаволілі рух культуры Беларусі
         і фарміраванне беларускай нацыі.
        Землі Беларусі стагоддзямі былі ўключаныя ў іншыя дзяржаўна-нацыянальныя ўтварэнні,
        што значна паўплывала на архітэктурную сітуацыю ў краіне.
        Ужо ў пачатку XIV стагоддзя землі Беларусі ўваходзяць у склад Вялікага Княства Літоўскага,
        затым у склад Рэчы Паспалітай.
      </p>
      <p>
        З канца XVIII стагоддзя частка зямель Беларусі падпарадкавана Расійскай імперыі.
      </p>
      <p>
        Адзначана два магутныя ўздзеянні на мастацкую сітуацыю ў краіне:
      </p>
      <ul>
        <li>Старажытнарускі ўплыў (11-13 стагоддзя.);</li>
        <li>Заходнееўрапейскі ўплыў (з 14 ст. да 19).</li>
      </ul>
      <p>
        Недальнабачнае рашэнне Сталіна аддаць частку зямель Беларусі з горадам Вільня ў склад Літвы
         пазбавіла краіну значнай долі архітэктурнага здабытку Беларусі готыкі і рэнесансу,
        якія былі агульным культурным здабыткам літоўскага і беларускага народаў.
        Да таго ж гэта пазбавіла Беларусь старажытнай гістарычнай сталіцы.
      </p>
      <h2 style={{
        textAlign: 'center',
        margin: 5,
      }}
      >
        Архитэктар дня
      </h2>
      <ArchitectOfTheDay architect={architect} />
    </Layout>
  );
};

export default IndexPage;

export const arcQuery = graphql`
{
  allContentfulArchitectBy {
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
