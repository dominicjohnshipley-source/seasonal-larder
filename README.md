# Seasonal Larder

What's in season in the UK this month, and a quick way to turn it into dinner.

Seasonal Larder lists over 220 ingredients (vegetables, fruit, herbs, wild and foraged food, mushrooms, fish, shellfish, meat, game and nuts) with their typical UK seasons. Pick what you fancy, set a few preferences, and copy a ready-made prompt into ChatGPT, Claude, Gemini or any AI tool to get recipe ideas.

## Features

- **In season now:** opens on the current month, with any month available to plan ahead.
- **Season bars:** each ingredient shows its season at a glance, with its peak months darker.
- **Last chance and coming soon:** what finishes this month and what arrives next month.
- **Filters:** narrow the list by category, or search for an ingredient.
- **Basket:** tap ingredients to add them. Your basket is saved on your device.
- **Ingredient cards:** tap the *i* next to any ingredient for an introduction, how to choose, store and prep it, what it goes with, and any safety notes.
- **Pairing finder:** from any ingredient card, tap *Show what goes with…* to see only the in-season ingredients that pair with it.
- **Share this month:** makes a hand-drawn picture of what's at its best, sized for Instagram or WhatsApp, to save or share.
- **Veggie & vegan:** tofu, tempeh, seitan, mycoprotein, plant-based sausages, burgers, mince, chicken pieces and bacon, British-grown pulses, plus halloumi, paneer and eggs for vegetarians. Shown all year alongside the seasonal produce.
- **Nearby countries (optional):** turn on *nearby countries* in settings to add seasonal produce from nearby Europe that's common in UK shops, like Spanish citrus, Italian winter greens and French summer fruit. Each one shows where it comes from.
- **Settings:** set your diet (and hide what you don't eat), how many you usually cook for, allergies and dislikes, your kitchen kit (no oven, air fryer, slow cooker…) and what's always in the cupboard. All of it goes into every recipe prompt.
- **Nothing wasted:** every ingredient card has a tip for using the bits people usually throw away.
- **Light and dark:** a paper theme for the day and a "kitchen at night" dark theme, following your phone or set by hand.
- **Welcome tour:** a short three-step introduction the first time you open it.
- **Surprise me:** one tap builds a basket of things that are at their best this month and go well together. It follows the diet set on the recipe page, so a vegan or vegetarian setting builds the basket around a plant protein.
- **Recipe prompt:** set servings, meal, time, diet, cuisine (23 to choose from, or type your own), mood, skill level and number of ideas. Then copy the prompt, send it to any app with your phone's share button, or open it straight in ChatGPT, Claude, Perplexity, Copilot or Gemini.
- **Installable and offline:** add it to your home screen and it works without a signal once you've opened it. On Android, use Chrome's menu → *Add to Home screen*. On iPhone, use Safari's Share button → *Add to Home Screen*.

## Privacy

Everything runs in your browser. There are no accounts and no tracking, and nothing is sent to a server. Your basket and settings are stored in your browser's local storage. The only outside requests are for the Google Fonts typefaces.

## Season data

The seasons are typical for UK-grown, UK-landed or UK-shot produce. Real seasons shift by a few weeks with weather and region. Fish seasons avoid spawning periods where the sources say so, and game follows the legal shooting seasons in Great Britain. Produce from nearby countries is optional and uses the season from its origin (Spain, Italy, France, the Netherlands and so on), checked against growers' associations and trade press such as FreshPlaza, Foods & Wines from Spain and the Italian consortia.

The seasons were checked against these sources in November 2026:

- [British Apples & Pears](https://www.britishapplesandpears.co.uk/)
- [Royal Horticultural Society](https://www.rhs.org.uk/)
- [The Garlic Farm](https://www.thegarlicfarm.co.uk/)
- [Jersey Royals](https://jerseyroyals.co.uk/)
- [VegSoc seasonal calendar](https://vegsoc.org/blog/seasonal-uk-grown-produce/)
- [Eat the Seasons](https://eattheseasons.co.uk/)
- [Woodland Trust](https://www.woodlandtrust.org.uk/)
- [Wild Food UK](https://www.wildfooduk.com/)
- [Galloway Wild Foods](https://gallowaywildfoods.com/)
- [First Nature](https://www.first-nature.com/)
- [Cornwall Good Seafood Guide](https://cornwallgoodseafoodguide.org.uk/)
- [MCS Good Fish Guide](https://www.mcsuk.org/goodfishguide/)
- [BASC shooting seasons](https://basc.org.uk/shooting-seasons)
- [GWCT](https://gwct.org.uk/)
- [National Sheep Association](https://nationalsheep.org.uk/)

Spotted a season that's wrong? Open an issue or a pull request.

### Ingredient notes

The ingredient cards are in `info.json`, one entry per ingredient name, with `about`, `choose`, `store`, `prep`, `pairs` (other ingredient names from the list, which Surprise me uses to build baskets that go together), `extras`, `waste` (a zero-waste tip) and an optional `caution`. The notes are general kitchen guidance. Always be certain of the identification before eating anything foraged.

### Editing the data

The seasons are in `index.html`, in the block that starts `const RAW=`. There's one ingredient per line, in this format:

```
Name|category|season months|peak months|flags
Asparagus|veg|4-6|5
Butternut squash|veg|9-1|10-11
Bay|herb|1-12||y
Seville oranges|fruit|1-2|1|i
```

- **Months** are numbers, from 1 (January) to 12 (December). A range can wrap past the end of the year, so `10-3` means October to March. Separate several ranges with commas, like `3-5,9-10`.
- **Categories** are `veg`, `fruit`, `herb`, `wild`, `fungi`, `fish`, `shell`, `meat`, `plant` (veggie & vegan protein, always shown) and `nut`.
- **Flags** are `y` for available all year (hidden from "in season" unless switched on), `i` for produce from a nearby country (add the origin as a sixth field, e.g. `Clementines|fruit|10-2|11-12|i|Spain`) and `d` for vegetarian items that aren't vegan.

## Run it locally

It's a single HTML file with no build step. Open `index.html` in a browser, or serve the folder to test the offline mode:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Updating the live app

Upload the changed files to GitHub with the same names (**Add file → Upload files**), and GitHub replaces the old ones. The app always checks for the newest files when it's opened online, so installed phones pick up the changes on their next visit, with nothing else to edit. Offline, it shows the last version it saw.

## Licence

MIT. See [LICENSE](LICENSE).
