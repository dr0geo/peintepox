import styled from 'styled-components';
import Link from 'next/link';

const GridCont = styled.section`
  display: grid;
  gap: 40px;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  justify-items: center;
  margin-bottom: 50px;
  & > div {
    width: 80%;
  }
`;

const Paragraph = styled.p`
  margin: auto;
  text-align: justify;
  & > a {
    border-bottom: 1px solid black;
  }
`;

const List = styled.ul`
  margin: 10px auto;
  max-width: 800px;
`;

const Description = () => {
  return (
    <GridCont>
      <div>
        <h2>Confidentialité</h2>
        <Paragraph>SARL PEINTEPOX n'enregistre pas d'informations personnelles permettant l'identification, à l'exception des formulaires que l'utilisateur est libre de remplir. Ces informations ne seront pas utilisées sans votre accord, nous les utiliserons seulement pour vous adresser des courriers, des brochures, des devis ou vous contacter.</Paragraph>
        <Paragraph>Les informations recueillies sur les sites bénéficient de la protection de la loi "Informatique et Libertés" n° 78-17 du 06 janvier 1978. Elles bénéficient d'un droit d'accès, de rectification, d'opposition à communication et de suppression sur simple demande à SARL PEINTEPOX, 63 Rue Alphonse Pluchet, 92220 BAGNEUX.</Paragraph>
        <Paragraph>SARL PEINTEPOX pourra procéder à des analyses statistiques sans que celles-ci soient nominatives et pourra en informer des tiers (organismes d'évaluation de fréquentation) sous une forme résumée et non nominative.</Paragraph>
      </div>
      <div>
        <h2>Utilisation de cookies</h2>
        <Paragraph>La gestion des commandes nécessite l'utilisation de cookies. Des informations non personnelles sont enregistrées par ce système de cookies (fichiers texte utilisés pour reconnaître un utilisateur et ainsi faciliter son utilisation du site). Ceux-ci n'ont aucune signification en dehors de leur utilisation sur le site <Link href="/"><a>peintepox-decapage-thermolaquage.fr</a></Link>.</Paragraph>
      </div>
      <div>
        <h2>Liens hypertexte</h2>
        <Paragraph>SARL PEINTEPOX ne contrôle pas les sites en connexion avec le sien, et ne saurait donc être responsable de leur contenu. Les risques liés à l'utilisation de ces sites incombent pleinement à l'utilisateur. Il se conformera à leurs conditions d'utilisation.</Paragraph>
      </div>
      <div>
        <h2>Règlement général sur la protection des données</h2>
        <Paragraph>SARL PEINTEPOX s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site <Link href="/"><a>peintepox-decapage-thermolaquage.fr</a></Link>, soient conformes au règlement général sur la protection des données (RGPD). Chaque formulaire ou téléservice limite la collecte des données personnelles au strict nécessaire (minimisation des données) et indique notamment :</Paragraph>
        <List>
        <li>quels sont les objectifs du recueil de ces données</li>
        <li>si ces données sont obligatoires ou facultatives pour la gestion de votre demande</li>
        <li>qui pourra en prendre connaissance (uniquement SARL PEINTEPOX en principe, sauf précision dans le formulaire lorsqu'une transmission à un tiers est nécessaire à la gestion de votre demande)</li>
        </List>
        <Paragraph>Les données personnelles recueillies dans le cadre des services proposés sur <Link href="/"><a>peintepox-decapage-thermolaquage.fr</a></Link> sont traitées selon des protocoles sécurisés et permettent à SARL PEINTEPOX de gérer les demandes reçues dans ses applications informatiques.</Paragraph>
      </div>
      <div>
        <h2>Éditeur</h2>
        <Paragraph>SARL PEINTEPOX<br />RCS BAGNEUX : 39970736300012<br />Siège social : 63 Rue Alphonse Pluchet, 92220 BAGNEUX<br />N° de téléphone : 09 70 35 10 37</Paragraph>
      </div>
      <div>
        <h2>Directeur de la publication</h2>
        <Paragraph>M. Cyriaque VIE, gérant de la SARL PEINTEPOX.</Paragraph>
      </div>
    </GridCont>
  );
}

export default Description;