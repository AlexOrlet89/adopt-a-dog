import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
window.addEventListener('load', async() => {
    const dogs = await getDogs();
    // console.log(dogs);//dog array
    // console.log(dogs);// same

    for (let dog of dogs) {
        const dogEl = renderDogCard(dog);
        // console.log(dogEl);//returns a elements for each dog
        console.log(dog);
        dogListContainer.append(dogEl);
    }
});

// fetch all dogs
// render and append all dog cards to the container
// on window load, grab dogs through getDogs, use a for of loop to feed a dog to renderdogcard, which returns a clickable element, and append to "dog-list-contsiner".