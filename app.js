const keywords = {
    figures: {
        humans: [
            "A lone, cloaked figure", "A wandering warrior", "A ghostly apparition", "A weary traveler",
            "A spectral knight", "A hooded wanderer", "A shadowy sentinel", "A forsaken soul"
        ],
        monsters: [
            "A towering eldritch horror", "A grotesque, many-eyed beast", "A twisted nightmare creature",
            "A wraith-like entity", "A shadowy demon with glowing eyes", "A malformed horror with shifting limbs",
            "A skeletal reaper draped in shadows", "A monstrous aberration lurking in the void"
        ],
        elves: [
            "A graceful elven archer", "A mysterious elven mage", "A serene elven druid", "A fierce elven warrior",
            "A shadowy elven assassin", "A noble elven lord", "A wise elven sage", "A melancholic elven bard"
        ],
        dwarves: [
            "A stout dwarven blacksmith", "A gruff dwarven miner", "A battle-hardened dwarven warrior",
            "A cunning dwarven rogue", "A jovial dwarven brewer", "A stoic dwarven guard", "A wise dwarven elder",
            "A fierce dwarven berserker"
        ],
        orcs: [
            "A brutal orc warlord", "A savage orc berserker", "A cunning orc shaman", "A fearsome orc raider",
            "A battle-scarred orc veteran", "A hulking orc brute", "A stealthy orc scout", "A menacing orc chieftain"
        ],
        hobbits: [
            "A cheerful hobbit gardener", "A curious hobbit adventurer", "A brave hobbit burglar",
            "A jovial hobbit innkeeper", "A wise hobbit elder", "A mischievous hobbit trickster",
            "A determined hobbit traveler", "A humble hobbit farmer"
        ],
        ents: [
            "A towering, ancient ent", "A wise, slow-speaking tree shepherd", "A vengeful, wrathful ent",
            "A gentle, moss-covered ent", "A mysterious, whispering ent", "A protective, forest guardian ent",
            "A weathered, bark-covered ent", "A sorrowful, mourning ent"
        ],
        dragons: [
            "A colossal, fire-breathing dragon", "A sleek, ice-winged dragon", "A shadowy, poison-dripping dragon",
            "A golden, treasure-hoarding dragon", "A wise, ancient dragon", "A ferocious, battle-scarred dragon",
            "A mystical, arcane dragon", "A cursed, undead dragon"
        ],
        goblins: [
            "A sneaky, green-skinned goblin", "A cunning, trap-setting goblin", "A vicious, dagger-wielding goblin",
            "A mischievous, thieving goblin", "A cowardly, cowering goblin", "A brutish, club-wielding goblin",
            "A shamanistic, spell-casting goblin", "A chittering, pack-hunting goblin"
        ],
        trolls: [
            "A hulking, cave-dwelling troll", "A dim-witted, boulder-throwing troll", "A vicious, bridge-guarding troll",
            "A regenerating, forest troll", "A cursed, stone troll", "A massive, mountain troll",
            "A swamp-dwelling, mud-covered troll", "A fire-resistant, magma troll"
        ],
        fairies: [
            "A tiny, glowing fairy", "A mischievous, prankster fairy", "A wise, ancient fairy",
            "A protective, nature-bound fairy", "A cursed, dark fairy", "A playful, sparkling fairy",
            "A vengeful, thorn-covered fairy", "A mystical, moonlit fairy"
        ],
        demons: [
            "A towering, horned demon", "A shadowy, soul-stealing demon", "A fiery, lava-covered demon",
            "A cunning, contract-making demon", "A grotesque, multi-headed demon", "A cursed, plague-bearing demon",
            "A seductive, illusion-casting demon", "A wrathful, war-bringing demon"
        ],
        darkElves: [
            "A shadowy, dark elven assassin", "A ruthless, dark elven warlord", "A cunning, dark elven sorcerer",
            "A vengeful, dark elven priestess", "A stealthy, dark elven ranger", "A noble, dark elven lord",
            "A cursed, dark elven outcast", "A mysterious, dark elven spy"
        ],
        halfElves: [
            "A charismatic, half-elven bard", "A skilled, half-elven ranger", "A wise, half-elven mage",
            "A determined, half-elven warrior", "A mysterious, half-elven traveler", "A conflicted, half-elven rogue",
            "A noble, half-elven diplomat", "A cursed, half-elven wanderer"
        ],
        werewolves: [
            "A ferocious, full-moon werewolf", "A cursed, transforming werewolf", "A pack-leading, alpha werewolf",
            "A stealthy, forest-dwelling werewolf", "A vengeful, cursed werewolf", "A noble, controlled werewolf",
            "A savage, bloodthirsty werewolf", "A mystical, spirit-bound werewolf"
        ],
        vampires: [
            "A seductive, immortal vampire", "A cursed, blood-drinking vampire", "A noble, ancient vampire lord",
            "A vengeful, vampire hunter turned vampire", "A stealthy, shadow-dwelling vampire",
            "A powerful, hypnotic vampire", "A cursed, sunlight-fearing vampire", "A mystical, bat-transforming vampire"
        ],
        elementals: [
            "A raging, fire elemental", "A serene, water elemental", "A sturdy, earth elemental",
            "A swirling, air elemental", "A mystical, arcane elemental", "A cursed, shadow elemental",
            "A protective, nature elemental", "A chaotic, storm elemental"
        ],
        giants: [
            "A towering, mountain giant", "A fierce, frost giant", "A brutal, hill giant",
            "A wise, ancient giant", "A cursed, fire giant", "A protective, forest giant",
            "A vengeful, storm giant", "A mystical, cloud giant"
        ]
    },
    environments: [
        "desolate wasteland", "abandoned battlefield", "crumbling city ruins", "haunted moor",
        "twisted forest", "barren tundra", "forgotten catacombs", "ancient, crumbling temple",
        "obsidian caverns", "cursed graveyard", "ethereal abyss", "forsaken chapel"
    ],
    landscapeDetails: [
        "jagged rocks", "withered trees", "cracked earth", "sunken ruins", "scattered bones",
        "broken statues", "ashen ground", "twisted roots", "blackened spires", "haunted torches",
        "eldritch symbols", "ritual circles", "drifting mist", "blood-soaked soil"
    ],
    skies: [
        "a blood-red sky", "a swirling vortex of darkness", "a starless void", "a sky choked with smoke",
        "a twilight haze", "a sky ablaze with crimson and violet", "a storm of obsidian clouds",
        "a celestial abyss", "a spectral aurora casting eerie glows", "a sickly green atmosphere"
    ],
    distantElements: [
        "a decaying tree stands sentinel", "a ruined tower crumbles in the distance", "an ancient monolith glows faintly",
        "a spectral figure watches from afar", "a broken gateway stands eerily silent",
        "a mist-covered mountain looms in the horizon", "a flickering lantern sways in the wind",
        "a cursed shrine hums with an unnatural glow", "a forsaken chapel whispers forgotten prayers",
        "a shadowy figure moves within the ruins", "a phantom beacon emits an eerie pulse"
    ],
    gazeDirection: [
        "staring directly at the viewer", "gazing towards the camera with hollow eyes",
        "fixing an unsettling glare at you", "its piercing gaze locked onto the observer",
        "watching with an unreadable expression", "its eyes glowing ominously, focused on you",
        "its twisted face turned towards the lens, as if aware of being watched"
    ],
    verbs: [
        "lurking", "swirling", "drifting", "whispering", "echoing", "pulsing", "flickering", "glowing",
        "shifting", "crumbling", "decaying", "haunting", "twisting", "shattering", "summoning", "invoking"
    ],
    moodStyle: [
        "dramatic", "eerie", "foreboding", "unsettling", "oppressive", "terrifying", "hellish", "haunted",
        "melancholic", "surreal", "macabre", "sinister", "bleak", "ethereal", "forgotten", "cursed"
    ],
    technicalDescriptive: [
        "4K, limited color palette (purple, yellow, blacks)", "granular textures, dramatic lighting",
        "muted, desaturated tones, ethereal glow", "high contrast shadows, fog-drenched atmosphere",
        "deep blacks, neon highlights, surreal depth", "cinematic composition, moody lighting",
        "gloomy ambiance, sharp details, subtle highlights", "twilight glow, phantom-like atmosphere",
        "misty outlines, sharp silhouettes, eerie depth", "rusted metal textures, decayed stone details",
        "writhing shapes, unseen forces in the shadows"
    ],
    beginnings: [
        "The sky is black, a dark fantasy scene with", 
        "In the darkness of night, a twisted landscape emerges, where", 
        "Beneath a pitch-black sky, a forbidding scene unfolds with", 
        "In the void of a dark sky, a haunting scene surrounds a",
        "Under a blackened sky, a forsaken world unfolds, filled with", 
        "Above, the void of blackness deepens, and from it, monstrous forms emerge."
    ],
    endings: [
        " This color scheme heightens the sense of doom and mystery, as though the very air is thick with malevolent energy.",
        " The atmosphere is charged with a suffocating energy, leaving the senses overwhelmed and tense.",
        " The darkness thickens, casting every detail in shadow as unseen eyes watch.",
        " Shadows move where they shouldn’t, and the very ground seems to shift beneath your feet.",
        " The air crackles with malevolent energy, as though the very world itself is twisted.",
        " The world trembles, as if some great evil stirs in the depths of the unknown.",
        " A chill fills the air, and the very essence of the place feels corrupted.",
        " The haunting silence is broken only by the sound of distant whispers, as if the land itself is alive.",
        " A sense of dread envelops the scene, as though time itself has stopped in this cursed place.",
        " A malevolent presence hovers over the scene, its influence palpable in every shadow."
    ]
};

let usedBeginnings = [];
let usedEndings = [];
let usedFigures = {
    humans: [], monsters: [], elves: [], dwarves: [], orcs: [], hobbits: [], ents: [], dragons: [],
    goblins: [], trolls: [], fairies: [], demons: [], darkElves: [], halfElves: [], werewolves: [],
    vampires: [], elementals: [], giants: []
};
let usedEnvironments = [];
let usedLandscapeDetails = [];
let usedSkies = [];
let usedDistantElements = [];
let usedGazeDirection = [];
let usedVerbs = [];
let usedMoodStyle = [];
let usedTechnicalDescriptive = [];

let counter = 0;

function getRandomItem(array, usedItems) {
    if (array.length === usedItems.length) {
        usedItems.length = 0; // Reset if all items have been used
    }
    let item;
    do {
        item = array[Math.floor(Math.random() * array.length)];
    } while (usedItems.includes(item));
    usedItems.push(item);
    return item;
}

function generatePrompt() {
    console.log("Função generatePrompt() chamada!"); // Verifique no console
    let newPrompt = "/imagine prompt: ";
    
    // Escolhe um início único
    newPrompt += `${getRandomItem(keywords.beginnings, usedBeginnings)} `;
    
    // Alterna entre as raças
    const races = Object.keys(keywords.figures);
    let figureType = races[counter % races.length];
    let figure = getRandomItem(keywords.figures[figureType], usedFigures[figureType]);
    
    newPrompt += `${figure}, positioned close to the viewer, `;

    // Evita repetir os mesmos ambientes e terminações
    let environment = getRandomItem(keywords.environments, usedEnvironments);
    let ending = getRandomItem(keywords.endings, usedEndings);

    newPrompt += `stands amidst ${environment} of ${getRandomItem(keywords.landscapeDetails, usedLandscapeDetails)}, `;
    newPrompt += `${getRandomItem(keywords.verbs, usedVerbs)} `;
    newPrompt += `${getRandomItem(keywords.moodStyle, usedMoodStyle)} `;
    newPrompt += `${getRandomItem(keywords.technicalDescriptive, usedTechnicalDescriptive)}. `;

    // Adiciona a direção do olhar para a câmera
    newPrompt += `${figure} is ${getRandomItem(keywords.gazeDirection, usedGazeDirection)}. `;

    // Escolhe um final único
    newPrompt += ending;
    
    // Adiciona as palavras obrigatórias
    newPrompt += " dvd screengrab, from 1982 dark fantasy film, 'excalibur' --ar 3:2 --v 5 --stylize 1000 --style DarkFantasy --style retro_bits";
    
    counter++; // Incrementa o contador para alternar entre as raças
    
    return newPrompt;
}

generateButton.addEventListener('click', function() {
    console.log("Botão Gerar clicado!"); // Verifique no console
    promptArea.textContent = generatePrompt();
});

copyButton.addEventListener('click', function() {
    console.log("Botão Copiar clicado!"); // Verifique no console
    navigator.clipboard.writeText(promptArea.textContent).then(function() {
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000);
    });
});
