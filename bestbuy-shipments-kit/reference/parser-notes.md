# Allocation parser — reference

The admin pastes a raw Best Buy allocation post; the parser turns it into structured shipments. This is the maintainability heart of the board.

## Real input shape

Product header -> optional region header -> code block of `Store: qty [STATUS]`:

```
# Best Buy Current So Cal Allocations AS OF 07/10

**Prismatic Evolutions SPC:**
` ` `Cerritos: 2
Lakewood: 2
Costa Mesa: 3
West Covina: 2` ` `

**Los Angeles Area:**
` ` `Montebello: 74 ON HAND
Torrance: 43 IN TRANSIT` ` `
```

Sometimes stores are grouped under region headers, sometimes flat. Status may be absent (default to IN TRANSIT unless it says ON HAND).

## Parse algorithm
1. Split content into lines. Strip ``` fences and a leading `> `.
2. Product header: bold line naming a set (`^\*\*(.+?)\*\*:?\s*$`) -> sets currentProduct; resolve against product catalog by alias; unknown -> flag on confirm screen.
3. Region header: bold line matching a known region label -> optional context (store's own region from the store list is source of truth).
4. Store line: `^([A-Za-z][A-Za-z0-9 .'\/&-]{1,30}?):\s*(\d{1,3})\b(.*)$` -> group1 store (fuzzy match; unknown -> flag), group2 quantity, group3 trailing status.
5. Status: uppercase group3. `ON HAND`/`ON HAND NOW` -> on_hand; else/empty/`IN TRANSIT` -> in_transit. (Only these two states — no late/locked/sold.)
6. Title "AS OF MM/DD" -> the allocation "as of" date.

## Status vocabulary in the data
`IN TRANSIT` (~200x), `ON HAND` (~90x), plus decorations we normalize away (`ON HAND NOW! CHECK NOW!`, `ON HAND, LIKELY EMPLOYEES`, `allocated, in transit still`). The old "9 = late/locked" sentinel is NOT used (no late status).

## Fuzzy store matching (same approach that hit 95%+ on Target)
Normalize (lowercase, strip punctuation, & -> and), then exact -> substring -> token-overlap. Keep an ALIAS table for typos + Best Buy internal names, e.g.:
- bakersfied -> Bakersfield
- cotona -> Corona
- wesminster / westminster mall -> Westminster Mall
- costa msa -> Costa Mesa
- anaheim = Orangefair Mall (BB internal name; they post "Anaheim")
- orange / orange chapman -> Orange/West Chapman
Unmatched stores/sets surface on the confirm screen; mapping one adds it to the alias table permanently (how the catalog grows).

## Product catalog
Seed set names from the channel; grow over time. Each set: canonical name + aliases (AH ex Box = Ascended Heroes ex Box; SPC = Super Premium Collection) + box art (added once). Optional SKU + price used only for release-day sheets.
Sets seen: Prismatic Evolutions (SPC / Poster Collection / Tech Stickers), Ascended Heroes (ex Box / Mega EX Collection / Booster Bundles), Chaos Rising (ETB / 3-Pack Blister / Booster Bundles), Mega Greninja ex Premium Collection, Mega Moonlit Tins, 151 Mini Tins, Lumiose City Mini Tins, Pitch Black ETB, First Partner Illustration Series 2.
