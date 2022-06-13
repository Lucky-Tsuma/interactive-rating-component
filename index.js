const divContent = document.getElementsByClassName('content')[0]
let rating;
divContent.innerHTML += `<div class="rating-state">
                            <div class="star"><img src="./images/icon-star.svg" alt="star icon"/> </div>
                            <div class="title">
                                How did we do?
                            </div>
                            <div class="text" id="text-rating">
                                Please let us know how we did with your support request. All feedback is appreciated 
                                to help us improve our offering!
                            </div>
                            <div class="numbers">
                                <div class="number" id="1">1</div>
                                <div class="number" id="2">2</div>
                                <div class="number" id="3">3</div>
                                <div class="number" id="4">4</div>
                                <div class="number" id="5">5</div>
                            </div>
                            <div class="submit-button">
                                <button class="btn-primary btn-lg" id="btn-submit">Submit</button>
                            </div>
                        </div>`

const numberButtons = document.getElementsByClassName('number')
for(let button of numberButtons) {
    button.addEventListener('click', () => {

        // incase another number had already been selected
        for(let btn of numberButtons) {
            btn.style.color = 'hsl(217, 12%, 63%)' 
            btn.style.background = 'hsl(213, 19%, 14%)'
        }

        rating = button.id
        button.style.color = 'hsl(0, 0%, 100%)'
        button.style.background = 'hsl(25, 97%, 53%)'
    })
}

const submitButton = document.getElementById('btn-submit')
submitButton.addEventListener('click', () => {
    if (rating) {
        divContent.innerHTML = `<div class="thank-you-state">
                                <div class="img-thanks">
                                    <img src="./images/illustration-thank-you.svg" alt="thank you illustration" />
                                </div>
                                <div class="selected-rating">
                                    <button class="btn-primary btn-lg" id="btn-selected-rating">You selected ${rating} out of 5</button>
                                </div>
                                <div class="title">
                                    Thank you!
                                </div>
                                <div class="text" id="text-thank-you">
                                    We appreciate you taking the time to give a rating. If you ever need more support, 
                                    don’t hesitate to get in touch!
                                </div>
                            </div>`
    } else {
        alert('You haven\'t selected any number')
    }
    
})

