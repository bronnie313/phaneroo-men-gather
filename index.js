const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hamburger');
  mobileMenu.classList.toggle('hamburgerShow');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hamburger');
  mobileMenu.classList.toggle('hamburgerShow');
});

// speakers checklist

const array = [
  {
    speakersPicture: './images/grace.jpg',
    speakersName: 'Appostle Grace Lubega',
    positionHeld: 'Leading Pastor Phaneroo Ministries International',
    quoteDescription: 'He imparts the distinctive and manifold wisdoms of eternity in the spirits of men',
  },
  {
    speakersPicture: './images/creflo.jpg',
    speakersName: 'Creflo Dollar',
    positionHeld: 'American Televangelist',
    quoteDescription: ' Here you will find grace-based teachings that will help you grow in your identity as a beloved and righteous child of God',
  },
  {
    speakersPicture: './images/john.jpg',
    speakersName: 'John Lennon',
    positionHeld: 'Music and Peace Activist',
    quoteDescription: 'Peace is not something you wish for; Its something you make something you do, something you are, and something you give away.',
  },
  {
    speakersPicture: './images/emma.jpg',
    speakersName: 'Appostle Emma Mawejje',
    positionHeld: 'Pastor At Phaneroo Ministries',
    quoteDescription: 'We believe in the inherent integrity of the Word to work in the lives of men',
  },
  {
    speakersPicture: './images/ken_thompson.jpg',
    speakersName: 'Dennis Ritchie',
    positionHeld: 'Professor at the University of Michigan',
    quoteDescription: 'Have a tradition of excellence in research, learning and teaching, sports and the arts, and more',
  },
  {
    speakersPicture: './images/td jakes.jpg',
    speakersName: 'T.D. Jakes',
    positionHeld: 'American Bishop',
    quoteDescription: 'No woman wants to be in submission to a man who isnt in submission to God!',
  },
];

const speakersID = document.getElementById('speakers-checklist');

for(let i=0; i<= array.length; i+=1){
  const person = document.createElement('li');
  person.className = 'speakers-list';
  person.innerHTML = `<div class="img-container">
        <img class="speakers-img" src="${array[i].speakersPicture}" width="90%" alt="">
    </div>
    <div class="speakers-details">
        <h5>${array[i].speakersName}</h5>
        <h4><i>${array[i].positionHeld}</i></h4>
        <hr class="line">
        <h6>${array[i].quoteDescription}</h6>
    </div>`;

  speakersID.appendChild(person);

  if(i>=2){
    person.className = 'speakers-list hidden';

  }

}








// array.forEach((speaker) => {
//   const person = document.createElement('li');
//   person.className = 'speakers-list';
//   person.innerHTML = `<div class="img-container">
//         <img class="speakers-img" src="${speaker.speakersPicture}" width="90%" alt="">
//     </div>
//     <div class="speakers-details">
//         <h5>${speaker.speakersName}</h5>
//         <h4><i>${speaker.positionHeld}</i></h4>
//         <hr class="line">
//         <h6>${speaker.quoteDescription}</h6>
//     </div>`;

//   speakersID.appendChild(person);