const { Post } = require('../models');

const postData = [
  {
    post_title: 'Traveller, look within and unify yourself',
    post_content: `Only a lifeform of the solar system may create this vision of inspiration. Yes, it is possible to erase the things that can eradicate us, but not without potentiality on our side. Dogma is born in the gap where presence has been excluded.

    Humankind has nothing to lose. Reality has always been electrified with travellers whose souls are engulfed in passion. Our conversations with other starseeds have led to an unfolding of ultra-sacred consciousness.
    
    You and I are adventurers of the cosmos. This life is nothing short of a summoning harmonizing of non-dual rebirth. We exist as electromagnetic resonance.`,
    user_id: 1
  },
  {
    post_title: 'The quantum matrix is beaming with morphic resonance',
    post_content: `The complexity of the present time seems to demand an ennobling of our hopes if we are going to survive. We cannot continue to coexist with stagnation. Materialism is the antithesis of grace.

    It can be difficult to know where to begin. If you have never experienced this vector at the speed of light, it can be difficult to flourish. Have you found your path?`,
    user_id: 1
  },
  {
    post_title: 'Greed is the antithesis of power',
    post_content: `Throughout history, humans have been interacting with the cosmos via bio-electricity. Reality has always been aglow with dreamers whose chakras are baptized in potential. Our conversations with other storytellers have led to a redefining of supra-pranic consciousness.

    We are at a crossroads of health and selfishness. Who are we? Where on the great mission will we be guided? Humankind has nothing to lose.
    
    It is time to take stardust to the next level. Imagine a blossoming of what could be. It is a sign of things to come.
    
    Eons from now, we travellers will vibrate like never before as we are recreated by the cosmos.
    We exist as bio-feedback. To embark on the vision quest is to become one with it. Chi requires exploration.`,
    user_id: 2
  },
  {
    post_title: 'How should you navigate this joyous stratosphere?',
    post_content: `Only a child of the solar system may inspire this quantum shift of divinity. Without energy, one cannot grow. We can no longer afford to live with turbulence.`,
    user_id: 3
  },
  
];

const seedCategories = () => Post.bulkCreate(postData);

module.exports = seedCategories;
