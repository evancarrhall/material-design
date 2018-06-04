class RippleEffect {

    constructor() {
        
        this.ripples = [];

        this.init();
    }


    init() {

        // attach to all '.ripple-effect' elements
        var elements = document.querySelectorAll('.ripple-effect');
        for(let el of elements) {
            var ripple = this.attach(el);
        };
    }


    attach(el, options) {

        let handler = e => this.ripple(e, options);
        let ripple = {
            el: el,
            options: options,
            handler: handler
        }
        this.ripples.push(ripple);

        el.addEventListener("mousedown", ripple.handler);
        return ripple
    }

    detach(el) {

        let reducedRipples = [];
        this.ripples.map(ripple => {
            if (ripple.el === el) {
                el.removeEventListener('mousedown', ripple.handler);
            } else {
                reducedRipples.push(ripple);
            }
        })

        this.ripples = reducedRipples;
    }


    ripple(e, customOptions) {

        let options = {
            color: {
                r: 0,
                g: 0,
                b: 0,
                a: 0.2
            },
            duration: 300,
            scale: 6,
            initialSize: 20
        }

        if (customOptions) {
            for (let key in customOptions) {
                options[key] = customOptions[key];
            }
        }

        // create and style '.ripple-effect-container'
        var containerEl = document.createElement("DIV");
        containerEl.className += 'ripple-effect-container';
        containerEl.setAttribute('style', `
            position:absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
            border-radius: ${getComputedStyle(e.target).borderRadius};
        `);
        e.target.appendChild(containerEl);

        // create and style '.ripple-effect-circle'
        var rippleEl = document.createElement("DIV");
        rippleEl.className += 'ripple-effect-circle';
        rippleEl.setAttribute('style', `
            transform: translate(-50%, -50%);
            opacity: 1;
            position: absolute;
            pointer-events: none;
            top: ${e.offsetY}px;
            left: ${e.offsetX}px;
            background-color: rgba(${options.color.r}, ${options.color.g}, ${options.color.b}, ${options.color.a});
            transition: transform ${options.duration}ms linear, opacity ${options.duration}ms linear;
            height: ${options.initialSize}px;
            width: ${options.initialSize}px;
            border-radius: ${options.initialSize / 2}px;
        `);
        containerEl.appendChild(rippleEl);

        // trigger css transition/transform
        requestAnimationFrame(() => {
            rippleEl.style.transform = `translate(-50%, -50%) scale(${options.scale})`;
            rippleEl.style.opacity = '0';
        });

        // remove elements when transition is over
        setTimeout(() => {
            rippleEl.remove();
            containerEl.remove();
        }, 1000);
    }
}

var rippleEffect = new RippleEffect();