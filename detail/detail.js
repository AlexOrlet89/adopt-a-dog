import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
window.addEventListener('load', async() => {
    // get the id from URL
    const params = new URLSearchParams(window.location.search);
    // const id = ;
    // use the id to fetch the dog
    const dog = await getDog(params.get('id'));
    const dogDetailEl = renderDogDetail(dog);
    console.log(dog);
    // render and append this dog's details to the container
    dogDetailContainer.append(dogDetailEl);
});
