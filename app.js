(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

    const counters = document.querySelectorAll('.counter')

    counters.forEach(counter => {
        counter.innerText = '0'

        const updateCounter = () => {
            const target =+counter.getAttribute('data-target')
            const c = +counter.innerText

            const increment = target / 200

            if(c < target){
                counter.innerText = `$(Math.ceil(c + increment')}`
                setTimeout(updateCounter, 1)
            }
            else{
                counter.innerText = target
            }
        }

        updateCounter()
    });
