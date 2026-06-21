import { SectionParagraph } from './SectionParagraph';

export default {
  title: 'Components/UI/SectionParagraph',
  component: SectionParagraph,
};

export const Default = () => (
  <SectionParagraph
    title="About the place"
    paragraphs={[
      "Blue Origin Fams, LLC is an American privately funded aerospace manufacturer and sub-orbital spaceflight services company headquartered in Kent, Washington. Founded in 2000 by Jeff Bezos, the company is led by CEO Bob Smith and aims to make access to space cheaper and more reliable through reusable launch vehicles.",
      "Blue Origin Fams is employing an incremental approach from suborbital to orbital flight, with each developmental step building on its prior work. The company motto is Gradatim Ferociter, Latin for \"Step by Step, Ferociously\".",
      "Initially focused on suborbital spaceflight, the company has designed, built and flown multiple testbeds of its New Shepard vehicle at its facilities in Culberson County, Texas. Named after the first American in space Alan Shepard, began in April 2015, and flight testing is ongoing.",
    ]}
  />
);
