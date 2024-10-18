const aliceTumbling1: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

async function renderAlice(): Promise<Animation[] | undefined> {
  if(alice10 && alice20 && alice30) {
    return new Promise(async (resolve, reject) => {
      try {
        const alice10_finished = await alice10.animate(aliceTumbling1, aliceTiming1).finished
        const alice20_finished = await alice20.animate(aliceTumbling1, aliceTiming1).finished
        const alice30_finished = await alice30.animate(aliceTumbling1, aliceTiming1).finished
        resolve([alice10_finished, alice20_finished, alice30_finished]);
      } catch (error) {
        reject(error);
      }
    })
  } else {
    console.warn("#alice not found");
  }
}

renderAlice().then(res => console.log(res)).catch(console.error);


// alice10
//     .animate(aliceTumbling1, aliceTiming1)
//     .finished
//     .then((res) => {
//         console.log(res);
//         alice20
//             .animate(aliceTumbling1, aliceTiming1)
//             .finished
//             .then((res) => {
//                 console.log(res);
//                 alice30.animate(aliceTumbling1, aliceTiming1);
//             })
//     });
  