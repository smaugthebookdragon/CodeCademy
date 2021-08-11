text1 = ['Exciting events are in your future, ', 'Growing up is a theme for you during this time, ', 
    'Opportunities to break out of your current routine can bring money-making avenues to the front of your mind today',
    'Expressing your sensitivity and wearing your heart on your sleeve may not bring the desired results today, ',
    'You might be trying to avoid potential conflict by not speaking up for yourself, ',
    'You may feel drawn to someone you don\'t normally talk to, ',
    'You might have only accepted and believed in pessimistic ideas out of a fear of being let down, '
     ]
text2 = ['but multitasking can keep you from enjoying what’s supposed to be fun. ', 'but rest assured that it is the kind course of action. ',
    'but others might not see where you\'re coming from and could see you as dramatic. ',
    'but the more flexible you are, the easier it will be to handle. ',
    'but it\'s worth it to try. ',
    'but holding back will only keep you in the same spot. ',
    'but this is preventing you from ever feeling excitement or anticipation for any possible good outcomes. '
    ]
text3 = ['Ultimately, whatever work you have left to do can wait until tomorrow.', 
    'Be on the lookout for an event or a local listing that happens to pique your interest.',
    'The more clear and concise you are, the better drama can be avoided',
    'You can be strong and willing to try something new at the same time.',
    'Right now, give yourself the freedom to reconnect with who you are so that you remember why you do what you do.',
    'If you know you need something, don\'t be afraid to say so!',
    'Remind yourself that there’s nothing wrong with reaching out to someone else.']


function getRand(n) {
    return Math.floor(Math.random() * n);
}

function getHoroscope() {
    let string1 = text1[getRand(text1.length)];
    let string2 = text2[getRand(text2.length)];
    let string3 = text3[getRand(text3.length)];

    return string1 + string2 + string3;
}

console.log(getHoroscope());