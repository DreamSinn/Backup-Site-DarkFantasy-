const generateButton = document.getElementById('generate-button');
const copyButton = document.getElementById('copy-button');
const promptArea = document.getElementById('prompt-area');
const notification = document.getElementById('notification');

const keywords = {
    environments: [
        "forest", "wasteland", "castle", "village", "battlefield", "cathedral", "swamp", "mountain", "crypt", "canyon",
        "abandoned fortress", "forgotten catacombs", "cursed graveyard", "dark forest clearing", "ruined temple",
        "shadowy valley", "haunted manor", "obsidian caverns", "deserted watchtower", "ancient ruins", "blood-soaked plains",
        "frozen tundra", "volcanic wasteland", "enchanted grove", "demonic citadel", "shattered city", "ethereal abyss",
        "forgotten labyrinth", "cursed dungeon", "void realm", "ethereal void", "soulbound sanctuary", "twisted spire",
        "haunted asylum", "forsaken chapel", "eldritch altar", "sunless expanse", "crimson marsh", "ethereal rift"
    ],
    adjectives: [
        "ancient", "gnarled", "twisted", "desolate", "jagged", "withered", "blood-red", "ominous", "decaying", "skeletal",
        "shadowy", "pulsating", "bioluminescent", "grotesque", "murky", "faint", "sickly", "overgrown", "carnivorous", "venomous",
        "crumbling", "polluted", "spectral", "demonic", "withered", "ghostly", "ethereal", "forgotten", "cursed", "haunted",
        "frozen", "volcanic", "enchanted", "shattered", "void-touched", "soulbound", "twisted", "forsaken", "eldritch", "crimson",
        "sunless", "ethereal", "voidborn", "abyssal", "malefic", "necrotic", "phantasmal", "umbral", "infernal", "abyssal"
    ],
    nouns: [
        "trees", "rocks", "sky", "clouds", "stream", "shapes", "lake", "remains", "pool", "vines", "bushes", "flowers",
        "creatures", "mushrooms", "fungi", "figures", "coral", "fish", "sand", "horizon", "plants", "animals", "islands",
        "waterfalls", "wraiths", "symbols", "torches", "ritual", "mist", "hills", "river", "fortress", "rice", "moon",
        "artifacts", "ruins", "tombs", "altars", "spires", "citadels", "labyrinths", "dungeons", "voids", "sanctuaries",
        "asylums", "chapels", "altars", "marshlands", "rifts", "abysses", "spires", "plains", "tundras", "wastelands"
    ],
    verbs: [
        "lurking", "trickling", "swirling", "reflecting", "cascading", "blooming", "moving", "swimming", "filtering", "jutting",
        "illuminating", "drifting", "taking place", "clinging", "lining", "carved", "flowing", "swaying", "whispering", "echoing",
        "flickering", "pulsing", "glowing", "shifting", "crumbling", "decaying", "haunting", "cursing", "binding", "twisting",
        "shattering", "freezing", "melting", "burning", "consuming", "devouring", "summoning", "invoking", "enchanting", "corrupting"
    ],
    moodStyle: [
        "dramatic", "eerie", "granular", "foreboding", "unsettling", "oppressive", "terrifying", "hellish", "haunted", "melancholic",
        "surreal", "macabre", "sinister", "bleak", "ethereal", "forgotten", "cursed", "haunted", "frozen", "volcanic", "enchanted",
        "shattered", "void-touched", "soulbound", "twisted", "forsaken", "eldritch", "crimson", "sunless", "abyssal", "malefic",
        "necrotic", "phantasmal", "umbral", "infernal", "abyssal", "voidborn", "spectral", "demonic", "grotesque"
    ],
    technicalDescriptive: [
        "4K quality", "deep shadows", "faint light", "strong light", "hidden light", "limited color palette", "muted tones", "desaturated colors",
        "foggy", "smoky", "gritty", "dimly lit", "cold atmosphere", "shadow-heavy", "darkened edges", "sharp contrasts", "subtle highlights", "soft focus",
        "mysterious aura", "twilight glow", "phantom-like", "nightmarish", "frosty details", "layered textures", "surreal ambiance", "ambient noise", 
        "moody lighting", "deep contrasts", "saturated shadows", "cracked surfaces", "rusted iron", "worn textures", "hazy edges", "shattered light",
        "angular shapes", "flickering lights", "eerie glow", "dim shadows", "distant sounds", "vibrant accents", "sinking fog", "arcane light",
        "disorienting effect", "distorted vision", "ruined details", "shattered reflection", "ominous contrast", "ghostly tendrils", "flickering shadows",
        "piercing glows", "suffocating air", "writhing shapes", "ancient remnants", "unseen forces"
    ],
    colors: [
        "Crimson", "Obsidian", "Violet", "Blood-red", "Emerald", "Sapphire", "Onyx", "Cobalt", "Amethyst", "Emerald",
        "Silver", "Ashen", "Midnight", "Charcoal", "Burgundy", "Mauve", "Moonstone", "Jet", "Pewter", "Ivory", "Indigo",
        "Dusk", "Slate", "Navy", "Ruby", "Obsidian", "Celestial", "Copper", "Bronze", "Platinum", "Graphite",
        "Golden", "Alabaster", "Crimson", "Ashen", "Scarlet", "Slate", "Rose", "Coral", "Lavender"
    ]
};

let lastUsedKeywords = {
    beginnings: [],
    endings: []
};

function randomizeKeywords() {
    const beginnings = [
        "The sky is black, a dark fantasy scene with", 
        "In the darkness of night, a twisted landscape emerges, where", 
        "Beneath a pitch-black sky, a forbidding scene unfolds with", 
        "In the void of a dark sky, a haunting scene surrounds a",
        "Above, the sky remains black, as a shadowy land stretches below, where",
        "Under a blackened sky, a forsaken world unfolds, filled with", 
        "The black sky looms heavy, casting its eerie shade over", 
        "In the midst of a starless sky, a twisted realm appears, where", 
        "The abyss above is an endless black void, and beneath, there are",
        "The sky turns black as creatures rise from the shadows, surrounding",
        "Above, the void of blackness deepens, and from it, monstrous forms emerge.",
        "The sky is shrouded in blackness, casting a foreboding pall over",
        "An endless black sky reflects nothing but darkness, as a hidden threat lurks beneath.",
        "Beneath the inky blackness above, strange and terrifying creatures gather.",
        "The black sky presses down on the desolate land, as something malevolent stirs.",
        "A void stretches overhead, where every shape seems unnatural, and below, eerie forms loom.",
        "The land is twisted, as if the black sky itself has corrupted all life beneath it.",
        "An ancient force stirs in the black sky, and its tendrils reach down to touch the world below.",
        "The night is alive, with creatures emerging from the blackness that fills the sky above.",
        "The blackened heavens are cracked, leaking dark forces upon the landscape below.",
        "A dark force moves through the land, stirring the shadows and the unseen horrors within.",
        "The black sky churns with malice, as though the earth itself is under a curse.",
        "In the darkness, shapes move beyond understanding, as if guided by the blackened sky.",
        "The air is thick with dread, as the black sky watches over a land where nothing thrives.",
        "In the blackness, the remnants of a once-great civilization now decay beneath its shadow.",
        "A supernatural fog rolls in from the horizon, shrouding the land beneath the black sky.",
        "The black sky hangs low, suffocating all below with an eerie, unspoken presence.",
        "Every corner of this cursed realm is haunted by the black sky above, and the terror it brings."
    ];
    
    const endings = [
        " This color scheme heightens the sense of doom and mystery, as though the very air is thick with malevolent energy.",
        " The atmosphere is charged with a suffocating energy, leaving the senses overwhelmed and tense.",
        " The palette invokes unease, wrapping everything in a dark, foreboding embrace that leaves no room for hope.",
        " This ethereal color palette evokes a sense of dread and wonder, as if the very atmosphere is alive with unseen forces.",
        " The scene is drenched in eerie energy, as shadows creep along every surface.",
        " The dark hues deepen the tension, reflecting the twisted nature of the world.",
        " A pervasive gloom hangs in the air, surrounding the viewer with its sinister aura.",
        " A sense of decay fills the scene, as if the environment itself is rotting.",
        " The eerie lighting and haunting colors cast everything in a realm of horror.",
        " The colors feel unnatural, warping reality into something distorted and surreal.",
        " A creeping darkness crawls into every corner, suffocating all that it touches.",
        " The landscape feels alive with dread, as though it could move at any moment.",
        " The unsettling lighting only enhances the atmosphere of ancient evil and ruin.",
        " The scene grows more oppressive with every passing moment, as if time itself is decaying.",
        " Shadows stretch unnaturally, giving the land an eerie, almost alien quality.",
        " A faint whisper echoes through the scene, as though the land itself is alive with secrets.",
        " The shadows seem to breathe, flickering in and out of existence as though they are sentient.",
        " Every surface is alive with texture, making the scene feel overwhelmingly tangible and unsettling.",
        " The air feels heavy with an unseen presence, as though the land is watching, waiting.",
        " A deep fog begins to roll in, veiling the surroundings and adding to the oppressive feeling of dread.",
        " The colors twist and warp, as if the world itself is being consumed by darkness.",
        " As the atmosphere thickens, everything seems to slow, caught in a moment of dark anticipation.",
        " The very landscape feels twisted, contorted by some dark force beyond comprehension.",
        " Shadows ripple and undulate as though they are alive, seeking to escape their confines.",
        " The world seems to hold its breath, suspended in a moment of pure tension and terror.",
        " Faint echoes of an ancient, forgotten power pulse through the scene, just beyond comprehension.",
        " The dark hues seem to draw the viewer into an inescapable void, pulling them deeper into the unknown.",
        " A suffocating silence envelops the scene, broken only by the faintest whispers of malevolent forces.",
        " The air is thick with dread, as if something ancient and forbidden is awakening from slumber.",
        " The colors become more vivid as the darkness thickens, making every detail seem sharper and more dangerous."
    ];
    

    let newPrompt = "";

    // Randomize beginnings
    let availableBeginnings = beginnings.filter(b => !lastUsedKeywords.beginnings.includes(b));
    if (availableBeginnings.length === 0) lastUsedKeywords.beginnings = [];
    let selectedBeginning = availableBeginnings[Math.floor(Math.random() * availableBeginnings.length)];
    newPrompt += selectedBeginning + " ";
    lastUsedKeywords.beginnings.push(selectedBeginning);

    // Randomize other keywords
    newPrompt += `${keywords.adjectives[Math.floor(Math.random() * keywords.adjectives.length)]} `;
    newPrompt += `${keywords.environments[Math.floor(Math.random() * keywords.environments.length)]} `;
    newPrompt += `${keywords.nouns[Math.floor(Math.random() * keywords.nouns.length)]}, `;
    newPrompt += `${keywords.verbs[Math.floor(Math.random() * keywords.verbs.length)]} `;
    newPrompt += `${keywords.moodStyle[Math.floor(Math.random() * keywords.moodStyle.length)]} `;
    newPrompt += `${keywords.technicalDescriptive[Math.floor(Math.random() * keywords.technicalDescriptive.length)]}.`;

    // Randomize endings
    let availableEndings = endings.filter(e => !lastUsedKeywords.endings.includes(e));
    if (availableEndings.length === 0) lastUsedKeywords.endings = [];
    let selectedEnding = availableEndings[Math.floor(Math.random() * availableEndings.length)];
    newPrompt += selectedEnding;

    // Garantir que o prompt tenha no mínimo 400 caracteres
    while (newPrompt.length < 400) {
        newPrompt += " " + `${keywords.adjectives[Math.floor(Math.random() * keywords.adjectives.length)]} `;
        newPrompt += `${keywords.environments[Math.floor(Math.random() * keywords.environments.length)]} `;
        newPrompt += `${keywords.nouns[Math.floor(Math.random() * keywords.nouns.length)]}, `;
    }

    return newPrompt;
}

generateButton.addEventListener('click', function() {
    promptArea.textContent = "/imagine prompt: " + randomizeKeywords();
});

copyButton.addEventListener('click', function() {
    navigator.clipboard.writeText(promptArea.textContent).then(function() {
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000);
    });
});
