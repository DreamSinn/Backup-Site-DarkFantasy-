const generateButton = document.getElementById('generate-button');
const copyButton = document.getElementById('copy-button');
const promptArea = document.getElementById('prompt-area'); // Corrigi o ID para 'prompt-area'
const notification = document.getElementById('notification');

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
let usedFigures = { humans: [], monsters: [] };
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
    let newPrompt = "/imagine prompt: ";
    
    // Escolhe um início único
    newPrompt += `${getRandomItem(keywords.beginnings, usedBeginnings)} `;
    
    // Alterna entre humanos e monstros
    let figureType = counter % 4 < 2 ? "humans" : "monsters";
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
    
    counter++; // Incrementa o contador para alternar humano/monstro
    
    return newPrompt;
}

generateButton.addEventListener('click', function() {
    promptArea.textContent = generatePrompt();
});

copyButton.addEventListener('click', function() {
    navigator.clipboard.writeText(promptArea.textContent).then(function() {
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000);
    });
});
