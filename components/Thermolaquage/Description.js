import styled from 'styled-components';

const Section = styled.section`
  margin: auto;
  margin-bottom: 50px;
  text-align: center;
  & > p {
    margin: auto;
  }
`;

const Description = () => {
  return (
    <Section>
      <h2>Application d’une peinture en poudre sans solvant et sans composant toxique</h2>
      <p>L’entreprise Peintepox possède une solide expertise dans l’application de peinture en poudre thermodurcissable.</p>
      <p>Nous appliquons de la peinture en poudre, sans solvant et sans composant toxique sur des métaux ferreux et non ferreux :</p>
      <ul>
        <li>Acier</li>
        <li>Fer</li>
        <li>Cuivre</li>
        <li>Aluminium</li>
        <li>etc...</li>
      </ul>
      <p>Perfectionnistes, nous accordons une grande importance aux finitions. Outre le thermolaquage, le traitement anti-corrosion figure aussi parmi nos prestations. Nous proposons nos services aux particuliers, aux industries, aux collectivités et aux organismes publics en région parisienne. Nous travaillons également pour l’Armée Française.</p>
      <h2>Les avantages du thermolaquage</h2>
      <p>Le thermolaquage est une technique permettant de protéger la surface d’une pièce et d’améliorer son aspect. Elle offre un large panel de couleurs, d’effets (métallisé, texturé, sablé…) et de finitions.<br />Plus économique et écologique que la peinture liquide, ce procédé ne nécessite quasiment aucun temps de séchage. C’est d’ailleurs la raison pour laquelle, le thermolaquage est utilisé pour peindre des pièces détachées automobiles comme les châssis et les jantes.<br />Maîtrisant parfaitement toutes les étapes de cette opération, nous vous garantissons un résultat alliant esthétique, résistance et durabilité.<br />Une opération permettant d’améliorer l’esthétique d’une pièce et de renforcer sa dureté et sa solidité.</p>
    </Section>
  );
}

export default Description;