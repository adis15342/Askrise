(function(){
    let bodyWrapper;
    let progressEl;


    function addProgressIndicator(){
        let title = document.querySelector('.scroll-indicator-end');
        if(title){
            const progressElementWrapper = document.createElement('DIV');
            const progressElement = document.createElement('DIV')
            bodyWrapper = document.querySelector('body #wrapper');
            

            progressElementWrapper.appendChild(progressElement);
            progressElementWrapper.classList.add('scroll-indicator-wrapper');
            progressElement.classList.add('scroll-indicator');

            // Add support for non primary colours
            if(document.querySelector('.scroll-indicator--col-yellow')){
                progressElement.classList.add('scroll-indicator--col-yellow')
            }

            if(document.querySelector('.scroll-indicator--col-dark-grey')){
                progressElement.classList.add('scroll-indicator--col-dark-grey')
            }

            progressEl = progressElement;
            bodyWrapper.appendChild(progressElementWrapper);
            runProgressIndicator();
        }
    } 

    function runProgressIndicator(){
        let title = document.querySelector('.scroll-indicator-end');
        if(title){
            const pageHeight =  title.getBoundingClientRect().top + document.documentElement.scrollTop
            const browserHeight = window.innerHeight;
            const scrollableHeight = pageHeight - browserHeight;
            const pixelScrolled = window.pageYOffset;

            const percentScrolled = (pixelScrolled / scrollableHeight) * 100;

            progressEl.style.width =  `${percentScrolled}%`;
        }
    }

    // Run the progressIndicator on page scroll
    document.addEventListener('scroll', () => {
        runProgressIndicator();
    })

    // Run the progressIndicator on window resize
    window.addEventListener('resize', () => {
        runProgressIndicator()
    })

    if (document.readyState === "complete" || document.readyState === "loaded") {
        addProgressIndicator();
    } else {
        // Add the progressIndicator element to the body
        document.addEventListener('DOMContentLoaded', () => {
            addProgressIndicator();
        })
    }


})()