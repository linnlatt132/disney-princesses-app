import type { JSX } from "react";
import Rapunzel from "../assets/images/princess/Rapunzel.svg?react";
import RapunzelBg from "../assets/images/bg/RapunzelBG.svg?react";
import RapunzelBg2 from "../assets/images/bg2/RapunzelBG2.svg?react";
import Belle from "../assets/images/princess/Bella.svg?react";
import BelleBg from "../assets/images/bg/BellaBG.svg?react";
import BelleBg2 from "../assets/images/bg2/BellaBG2.svg?react";
import Jasmine from "../assets/images/princess/Jasmine.svg?react";
import JasmineBg from "../assets/images/bg/JasmineBG.svg?react";
import JasmineBg2 from "../assets/images/bg2/JasmineBG2.svg?react";
import Pocahontas from "../assets/images/princess/Pocahontas.svg?react";
import PocahontasBg from "../assets/images/bg/PocahontasBG.svg?react";
import PocahontasBg2 from "../assets/images/bg2/PocahontasBG2.svg?react";
import SnowWhite from "../assets/images/princess/SnowWhite.svg?react";
import SnowWhiteBg from "../assets/images/bg/SnowWhiteBG.svg?react";
import SnowWhiteBg2 from "../assets/images/bg2/SnowWhiteBG2.svg?react";
import Ariel from "../assets/images/princess/Ariel.svg?react";
import ArielBg from "../assets/images/bg/ArielBG.svg?react";
import ArielBg2 from "../assets/images/bg2/ArielBG2.svg?react";

export interface Princess {
  id: string;
  name: string;
  slug: string;
  movieName: string;
  personImg: JSX.Element;
  bgImg: JSX.Element;
  bgImg2: JSX.Element;
  about: string;
  scenes: string[];
}

const princesses: Princess[] = [
  {
    id: "rapunzel",
    name: "Rapunzel",
    slug: "rapunzel",
    movieName: "Tangled",
    personImg: <Rapunzel />,
    bgImg: <RapunzelBg />,
    bgImg2: <RapunzelBg2 />,
    about: `Rapunzel has spent her entire life hidden in a tower, believing the outside world is too dangerous. Her seventy-foot, sun-kissed hair possesses magical healing power, a secret coveted by the manipulative Mother Gothel who poses as her guardian. Rapunzel is endlessly curious, painting every surface, reading, baking and charting the mysterious lanterns that appear on her birthday. When charming thief Flynn Rider stumbles into her tower, she seizes the chance to see those lights up close. Energetic, artistic and remarkably resilient, she turns frying pans into weapons, trusts her instincts over authority and discovers that the lanterns are really the kingdom’s tribute to its lost princess—herself.`,
    scenes: [
      "https://img.youtube.com/vi/ILRs2r6lcHY/hqdefault.jpg", // “I See the Light”
      "https://img.youtube.com/vi/JXnAd8bofTo/hqdefault.jpg", // Frying-pan meet-cute
      "https://img.youtube.com/vi/H92Tn60rXpg/hqdefault.jpg", // Healing-hair glow
    ],
  },
  {
    id: "belle",
    name: "Belle",
    slug: "belle",
    movieName: "Beauty and the Beast",
    personImg: <Belle />,
    bgImg: <BelleBg />,
    bgImg2: <BelleBg2 />,
    about: `An avid reader living in a provincial French village, Belle dreams of adventure and a life beyond small-town gossip. Intelligent, compassionate and quietly headstrong, she rejects the superficial advances of local hero Gaston and stands up for her eccentric inventor father. When she volunteers to take her father’s place as prisoner in the Beast’s enchanted castle, Belle’s kindness and fearless curiosity gradually melt her captor’s rough exterior. She befriends talking household staff, explores a vast library, and shows the Beast that true beauty lies within. Her empathy breaks the spell on the castle, proving love can flourish where prejudice once ruled.`,
    scenes: [
      "https://img.youtube.com/vi/zAzxnHP4erQ/hqdefault.jpg", // “Bonjour” opening
      "https://img.youtube.com/vi/OElUWCKsPgM/hqdefault.jpg", // Ballroom dance
      "https://img.youtube.com/vi/DYQtp-eAH7I/hqdefault.jpg", // “Something There”
    ],
  },
  {
    id: "Jasmine",
    name: "Jasmine",
    slug: "jasmine",
    movieName: "Aladdin",
    personImg: <Jasmine />,
    bgImg: <JasmineBg />,
    bgImg2: <JasmineBg2 />,
    about: `Princess Jasmine of Agrabah is born into opulence yet feels caged by palace walls and suffocating tradition. Fiercely independent, sharp-tongued and adventurous, she rejects suitors chosen by law and sneaks into the marketplace disguised as a commoner. There she meets street-smart Aladdin, discovering the world—and herself—beyond gilded gates. Jasmine values honesty, justice and the freedom to choose her own future, confronting manipulative vizier Jafar and challenging her father’s outdated marriage decree. Whether soaring on a magic carpet or defending her people, she proves that a true ruler listens to her heart and her subjects, not to archaic customs.`,
    scenes: [
      "https://img.youtube.com/vi/hZ1Rb9hC4JY/hqdefault.jpg", // “A Whole New World”
      "https://img.youtube.com/vi/IQDfabokzZg/hqdefault.jpg", // “One Jump Ahead”
      "https://img.youtube.com/vi/102pGYQ09eE/hqdefault.jpg", // “Do You Trust Me?”
    ],
  },
  {
    id: "pocahontas",
    name: "Pocahontas",
    slug: "pocahontas",
    movieName: "Pocahontas",
    personImg: <Pocahontas />,
    bgImg: <PocahontasBg />,
    bgImg2: <PocahontasBg2 />,
    about: `Pocahontas, spirited daughter of Chief Powhatan, roams Virginia’s untouched wilderness with the grace of a deer and the wisdom of Grandmother Willow. She is deeply attuned to nature’s rhythms, listening to every “color of the wind” and following the swirling paths of leaves to guide her choices. When English settlers arrive, Pocahontas befriends explorer John Smith and attempts to bridge two worlds poised for conflict. Courage, empathy and her love for the land lead her to stand between her people and the musket line, averting war. Her story celebrates respect for the earth, open-mindedness toward strangers and the belief that peace begins with understanding.`,
    scenes: [
      "https://img.youtube.com/vi/9ThO76peOw0/hqdefault.jpg", // “Colors of the Wind”
      "https://img.youtube.com/vi/uZrg3hhntQY/hqdefault.jpg", // “Just Around the Riverbend”
      "https://img.youtube.com/vi/r4T31W4zDps/hqdefault.jpg", // Farewell kiss
    ],
  },
  {
    id: "snow-white",
    name: "Snow White",
    slug: "snow-white",
    movieName: "Snow White",
    personImg: <SnowWhite />,
    bgImg: <SnowWhiteBg />,
    bgImg2: <SnowWhiteBg2 />,
    about: `Snow White, Disney’s first animated princess, embodies innocence, optimism and unwavering kindness. Forced to flee her jealous stepmother, the Evil Queen, she finds refuge in a woodland cottage owned by seven dwarfs. With a song in her heart she tidies their chaotic home, cooks hearty meals and befriends forest animals who mirror her gentle spirit. Though deceived into biting a poisoned apple, Snow White’s faith in true love is rewarded when a prince awakens her with love’s first kiss. Her classic tale demonstrates that compassion can disarm malice and that inner radiance shines brighter than envy’s darkest spell.`,
    scenes: [
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Snow_white_1937_trailer_screenshot_%281%29.jpg", // dwarfs’ cottage
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/Snow_White_Poisoned_Apple.png", // poisoned apple
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Snow_white_1937_trailer_screenshot_%282%29.jpg", // dwarfs on bridge
    ],
  },
  {
    id: "ariel",
    name: "Ariel",
    slug: "ariel",
    movieName: "The Little Mermaid",
    personImg: <Ariel />,
    bgImg: <ArielBg />,
    bgImg2: <ArielBg2 />,
    about: `Ariel is a sixteen-year-old mermaid princess whose boundless curiosity draws her to the human world above the waves. Collecting gadgets and gizmos from sunken ships, she dreams of walking on land and exploring “where the people are.” Against her father King Triton’s orders, she saves Prince Eric and falls hopelessly in love. Ariel strikes a risky bargain with sea-witch Ursula, trading her mesmerising voice for temporary legs. Her fearless determination and new-found friends Flounder and Sebastian help her secure true love’s kiss, defeat Ursula’s tyranny and unite two realms, illustrating that following one’s passion may change the tides for everyone.`,
    scenes: [
      "https://img.youtube.com/vi/SXKlJuO07eM/hqdefault.jpg", // “Part of Your World”
      "https://img.youtube.com/vi/GC_mV1IpjWA/hqdefault.jpg", // “Under the Sea”
      "https://img.youtube.com/vi/JqX49UsVJWA/hqdefault.jpg", // “Kiss the Girl”
    ],
  },
];

export default princesses;
