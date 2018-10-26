const btn = document.getElementById('cta');
const btn2 = document.getElementById('cta2');

btn.onclick = function() {

    const morphing = anime({
        targets: '.polymorph',
        points: [
            { value: '214.5,109.5 -0.5,109.5 -0.5,-0.5 56.2,-0.5 65.5,70.5' },
            { value: '214.5,109.5 -0.5,109.5 -0.5,-0.5 -0.5,-0.5 65.5,70.5'}
        ],
        easing: 'easeOutQuad',
        duration: 1200,
        loop: false
    });

    anime({
        targets: '#blip',
        opacity: 1,
        duration: 500,
        translateY: 150
    });

    const promise = morphing.finished.then(() => {

        btn2.onclick = function() {
            const morphing = anime({
                targets: '.polymorph',
                points: [
                    {value: '214.5,109.5 -0.5,109.5 -0.5,-0.5 56.2,-0.5 65.5,70.5'},
                    {value: '214.5,109.5 -0.5,109.5 -0.5,-0.5 56.2,-0.5 214.5,-0.5 '}
                ],
                easing: 'easeOutQuad',
                duration: 1200,
                loop: false
            });
            anime({
                targets: '#blip',
                opacity: 0,
                duration: 500,
                translateY: -800
            });
        };
    });
};

