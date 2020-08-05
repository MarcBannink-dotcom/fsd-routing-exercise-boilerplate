import React from 'react';

const ArticleThree = () => {
    return(
        <>
            <h1>When debugging, your attitude matters</h1>
            <p>I was debugging some CSS last week, and I think that post is missing something important: your attitude. Now – I’m not a very good CSS developer yet. I’ve never written CSS professionally and I don’t understand a lot of basic CSS concepts (I think I finally understood for the first time recently how position: absolute works). 
                And last week I was working on the most complicated CSS project I’d ever attempted. While I was debugging my CSS, I noticed myself doing some bad things that I normally would not! I was: making random changes to my code in the hopes that it would work, googling a lot of things and trying them without understanding what they did, if something broke, reverting my changes and starting again.
                This strategy was exactly as effective as you might imagine (not very effective!), and it was because of my attitude about CSS! I had this unusual-for-me belief that CSS was Too Hard and impossible for me to understand. So let’s talk about that attitude a bit! It’s super unfortunate this specific bug (a difference in z-index behavior between Chrome and Firefox) is what was giving Julia a hard time. Those kind of cross-browser differences are fewer and farther between these days, thankfully. I’m certainly sympathetic to CSS being super tricky sometimes, and it can be that way without dealing with an actual browser bug.</p>
        </>
    );
}

export default ArticleThree;