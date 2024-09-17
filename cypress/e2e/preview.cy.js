/// <reference types="cypress" />

import smoothieRecipes from "../../src/constants/recipes/smoothiesRecipes.ts"
import fromScratchRecipes from "../../src/constants/recipes/fromScratchRecipes.ts";
import dinnerRecipes from "../../src/constants/recipes/dinnersRecipes.ts";
import breakfastRecipes from "../../src/constants//recipes/breakfastRecipes.ts";
import deepFriedRecipes from "../../src/constants/recipes/deepFriedRecipes.ts";
import dessertsRecipes from "../../src/constants/recipes/dessertsRecipes.ts";
import mugsRecipes from "../../src/constants/recipes/mugsRecipes.ts";


describe('sort options', () => {
  it('check sort options', () => {
    cy.visit('http://localhost:3000/#/smoothies')

    cy.get('#sort_button p:first').should('have.text', "Recipe Name (A-Z)");

    cy.get('#sort_option_0').should('not.be.visible');
    cy.get('#sort_option_1').should('not.be.visible');
    cy.get('#sort_option_2').should('not.be.visible');

    cy.get('#sort_button').click();

    cy.get('#sort_option_0').should('be.visible');
    cy.get('#sort_option_1').should('be.visible');
    cy.get('#sort_option_2').should('be.visible');

    cy.get('#sort_option_0').should('have.text', "Recipe Name (A-Z)")
    cy.get('#sort_option_1').should('have.text', "Recipe Name (Z-A)")
    cy.get('#sort_option_2').should('have.text', "Rating")
  })

  it('check sort menu closes on button click', () => {
    cy.visit('http://localhost:3000/#/desserts')

    cy.get('#sort_button').click();
    cy.get('#sort_options').should('be.visible');

    cy.get('#sort_button').click();
    cy.get('#sort_options').should('not.be.visible');
  })

  it('check sort menu closes on option click', () => {
    cy.visit('http://localhost:3000/#/desserts')

    cy.get('#sort_button').click();
    cy.get('#sort_options').should('be.visible');

    cy.get('#sort_option_0').click();
    cy.get('#sort_options').should('not.be.visible');
  })

  it('check sort menu closes on outside sort menu click', () => {
    cy.visit('http://localhost:3000/#/desserts')

    cy.get('#sort_button').click();
    cy.get('#sort_options').should('be.visible');

    cy.get('h1').click();
    cy.get('#sort_options').should('not.be.visible');
  })

  it('a-z sort 1', () => {
    cy.visit('http://localhost:3000/#/smoothies')

    const smoothieSortedRecipes = [...smoothieRecipes].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    cy.get('article h2').each((el, index) => {
      cy.wrap(el).should('have.text', smoothieSortedRecipes[index].name);
    });
  })

  it('a-z sort 2', () => {
    cy.visit('http://localhost:3000/#/desserts')

    const dessertSortedRecipes = [...dessertsRecipes].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    cy.get('article h2').each((el, index) => {
      cy.wrap(el).should('have.text', dessertSortedRecipes[index].name);
    });
  })
})


describe('smoothies previews page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/smoothies')
  })

  it('page heading', () => {
    cy.get('h1').should('have.text', "Smoothies")
  })

  it('check recipe cards length', () => {
    cy.get('article')
      .should('have.length', smoothieRecipes.length)
  })

  it('check recipe card content', () => {
    const sortedRecipes = [...smoothieRecipes].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    cy.get('article h2').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].name);
    });

    cy.get('article p:first').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].description);
    });

    const altTextRegex = new RegExp(smoothieRecipes.map(recipe => `${recipe.alt_text}$`).join('|'));
    const srcRegex = new RegExp(smoothieRecipes.map(recipe => `${recipe.picture}$`).join('|'));
    cy.get('article img').each((el) => {
      // check alt text
      cy.wrap(el)
        .should('have.attr', 'alt')
        .then(alttext => {
          expect(alttext).to.match(altTextRegex)
        })

      // src text
      cy.wrap(el)
        .should('have.attr', 'src')
        .then(src => {
          expect(src).to.match(srcRegex)
        })
    });
  })
})


describe('dinners previews page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/dinners')
  })

  it('page heading', () => {
    cy.get('h1').should('have.text', "Dinners")
  })

  it('check recipe cards length', () => {
    cy.get('article')
      .should('have.length', dinnerRecipes.length)
  })

  it('check recipe card content', () => {
    const sortedRecipes = [...dinnerRecipes].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    cy.get('article h2').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].name);
    });

    cy.get('article p:first').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].description);
    });

    const altTextRegex = new RegExp(dinnerRecipes.map(recipe => `${recipe.alt_text}$`).join('|'));
    const srcRegex = new RegExp(dinnerRecipes.map(recipe => `${recipe.picture}$`).join('|'));
    cy.get('article img').each((el) => {
      // check alt text
      cy.wrap(el)
        .should('have.attr', 'alt')
        .then(alttext => {
          expect(alttext).to.match(altTextRegex)
        })

      // check src
      cy.wrap(el)
        .should('have.attr', 'src')
        .then(src => {
          expect(src).to.match(srcRegex)
        })
    });
  })
})


describe('breakfast previews page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/breakfast')
  })

  it('page heading', () => {
    cy.get('h1').should('have.text', "Breakfast")
  })

  it('check recipe cards length', () => {
    cy.get('article')
      .should('have.length', breakfastRecipes.length)
  })

  it('check recipe card content', () => {
    const sortedRecipes = [...breakfastRecipes].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    cy.get('article h2').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].name);
    });

    cy.get('article p:first').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].description);
    });

    const altTextRegex = new RegExp(breakfastRecipes.map(recipe => `${recipe.alt_text}$`).join('|'));
    const srcRegex = new RegExp(breakfastRecipes.map(recipe => `${recipe.picture}$`).join('|'));
    cy.get('article img').each((el) => {
      // check alt text
      cy.wrap(el)
        .should('have.attr', 'alt')
        .then(alttext => {
          expect(alttext).to.match(altTextRegex)
        })

      // check src
      cy.wrap(el)
        .should('have.attr', 'src')
        .then(src => {
          expect(src).to.match(srcRegex)
        })
    });
  })
})


describe('deep fried previews page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/deepFried')
  })

  it('page heading', () => {
    cy.get('h1').should('have.text', "Deep Fried")
  })

  it('check recipe cards length', () => {
    cy.get('article')
      .should('have.length', deepFriedRecipes.length)
  })

  it('check recipe card content', () => {
    const sortedRecipes = [...deepFriedRecipes].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    cy.get('article h2').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].name);
    });

    cy.get('article p:first').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].description);
    });

    const altTextRegex = new RegExp(deepFriedRecipes.map(recipe => `${recipe.alt_text}$`).join('|'));
    const srcRegex = new RegExp(deepFriedRecipes.map(recipe => `${recipe.picture}$`).join('|'));
    cy.get('article img').each((el) => {
      // check alt text
      cy.wrap(el)
        .should('have.attr', 'alt')
        .then(alttext => {
          expect(alttext).to.match(altTextRegex)
        })

      // check src
      cy.wrap(el)
        .should('have.attr', 'src')
        .then(src => {
          expect(src).to.match(srcRegex)
        })
    });
  })
})


describe('desserts previews page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/desserts')
  })

  it('page heading', () => {
    cy.get('h1').should('have.text', "Desserts")
  })

  it('check recipe cards length', () => {
    cy.get('article')
      .should('have.length', dessertsRecipes.length)
  })

  it('check recipe card content', () => {
    const sortedRecipes = [...dessertsRecipes].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    cy.get('article h2').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].name);
    });

    cy.get('article p:first').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].description);
    });

    const altTextRegex = new RegExp(dessertsRecipes.map(recipe => `${recipe.alt_text}$`).join('|'));
    const srcRegex = new RegExp(dessertsRecipes.map(recipe => `${recipe.picture}$`).join('|'));
    cy.get('article img').each((el) => {
      // check alt text
      cy.wrap(el)
        .should('have.attr', 'alt')
        .then(alttext => {
          expect(alttext).to.match(altTextRegex)
        })

      // check src
      cy.wrap(el)
        .should('have.attr', 'src')
        .then(src => {
          expect(src).to.match(srcRegex)
        })
    });
  })
})


describe('from scratch previews page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/fromScratch')
  })

  it('page heading', () => {
    cy.get('h1').should('have.text', "Fun from Scratch")
  })

  it('check recipe cards length', () => {
    cy.get('article')
      .should('have.length', fromScratchRecipes.length)
  })

  it('check recipe card content', () => {
    const sortedRecipes = [...fromScratchRecipes].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    cy.get('article h2').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].name);
    });

    cy.get('article p:first').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].description);
    });

    const altTextRegex = new RegExp(fromScratchRecipes.map(recipe => `${recipe.alt_text}$`).join('|'));
    const srcRegex = new RegExp(fromScratchRecipes.map(recipe => `${recipe.picture}$`).join('|'));
    cy.get('article img').each((el) => {
      // check alt text
      cy.wrap(el)
        .should('have.attr', 'alt')
        .then(alttext => {
          expect(alttext).to.match(altTextRegex)
        })

      // check src
      cy.wrap(el)
        .should('have.attr', 'src')
        .then(src => {
          expect(src).to.match(srcRegex)
        })
    });
  })
})


describe('mugs previews page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/mugs')
  })

  it('page heading', () => {
    cy.get('h1').should('have.text', "In a Mug")
  })

  it('check recipe cards length', () => {
    cy.get('article')
      .should('have.length', mugsRecipes.length)
  })

  it('check recipe card content', () => {
    const sortedRecipes = [...mugsRecipes].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    cy.get('article h2').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].name);
    });

    cy.get('article p:first').each((el, index) => {
      cy.wrap(el).should('have.text', sortedRecipes[index].description);
    });

    const altTextRegex = new RegExp(mugsRecipes.map(recipe => `${recipe.alt_text}$`).join('|'));
    const srcRegex = new RegExp(mugsRecipes.map(recipe => `${recipe.picture}$`).join('|'));
    cy.get('article img').each((el) => {
      // check alt text
      cy.wrap(el)
        .should('have.attr', 'alt')
        .then(alttext => {
          expect(alttext).to.match(altTextRegex)
        })

      // check src
      cy.wrap(el)
        .should('have.attr', 'src')
        .then(src => {
          expect(src).to.match(srcRegex)
        })
    });
  })
})