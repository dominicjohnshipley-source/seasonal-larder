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
- **Surprise me:** one tap builds a basket of things that are at their best this month and go well together.
- **Recipe prompt:** set servings, meal, time, diet, cuisine or mood, skill level and number of ideas. Then copy the prompt, send it to any app with your phone's share button, or open it straight in ChatGPT, Claude, Perplexity, Copilot or Gemini.
- **Installable and offline:** add it to your home screen and it works without a signal once you've opened it.

## Privacy

Everything runs in your browser. There are no accounts and no tracking, and nothing is sent to a server. Your basket and settings are stored in your browser's local storage. The only outside requests are for the Google Fonts typefaces.

## Season data

The seasons are typical for UK-grown, UK-landed or UK-shot produce. Real seasons shift by a few weeks with weather and region. Fish seasons avoid spawning periods where the sources say so, and game follows the legal shooting seasons in Great Britain. A few imported citrus fruits are included because they have a short, well-known season in UK shops.

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

The ingredient cards are in `info.json`, one entry per ingredient name, with `about`, `choose`, `store`, `prep`, `pairs` (other ingredient names from the list, which Surprise me uses to build baskets that go together), `extras` and an optional `caution`. The notes are general kitchen guidance. Always be certain of the identification before eating anything foraged.

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
- **Categories** are `veg`, `fruit`, `herb`, `wild`, `fungi`, `fish`, `shell`, `meat` and `nut`.
- **Flags** are `y` for available all year (hidden from "in season" unless switched on) and `i` for imported.

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
