const apps = [
  { name: 'Animal Sounds', bundleId: 'com.smartbabyapps.animalsounds', version: '2.0', platform: 'iOS', minOs: '3.1', ipaFile: 'Animal Sounds 2.0.ipa', size: 19.8, bundlePath: 'Payload/Animal Sounds.app', archiveType: 'App Store Package' },
  { name: 'SoundTouch', bundleId: 'com.yourcompany.SoundTouch', version: '1.4', platform: 'iOS', minOs: '3.0', ipaFile: 'SoundTouch 1.4.ipa', size: 155.5, bundlePath: 'Payload/SoundTouch.app', archiveType: 'App Store Package' },
  { name: 'Tozzle', bundleId: 'com.nodeflexion.Tozzle', version: '3.7', platform: 'iOS', minOs: '3.1.3', ipaFile: 'Tozzle 3.7.ipa', size: 112.6, bundlePath: 'Payload/Tozzle.app', archiveType: 'App Store Package' },
  { name: 'AutismXpress', bundleId: 'X7WS995LSR.com.StudioEmotion.AutismXpress', version: '1.0', platform: 'iOS', minOs: '3.1.2', ipaFile: 'AutismXpress 1.0.ipa', size: 7.4, bundlePath: 'Payload/AutismXpress.app', archiveType: 'App Store Package' },
  { name: 'Lunchbox', bundleId: 'com.thup.MonkeyPreschool', version: '1.4', platform: 'iOS', minOs: '3.0', ipaFile: 'Lunchbox 1.4.ipa', size: 13.7, bundlePath: 'Payload/Lunchbox.app', archiveType: 'App Store Package' },
  { name: 'Peek-a-Zoo', bundleId: 'com.duckduckmoosedesign.peekazoo', version: '1.1.1', platform: 'iOS', minOs: '3.0', ipaFile: 'Peek-a-Zoo 1.1.1.ipa', size: 19.1, bundlePath: 'Payload/Peek-a-Zoo.app', archiveType: 'App Store Package' },
  { name: 'Michigan Nature Sounds', bundleId: 'com.yourcompany.MichiganNatureSounds', version: '1.0', platform: 'iOS', minOs: '3.0', ipaFile: 'Michigan Nature Sounds 1.0.ipa', size: 24.6, bundlePath: 'Payload/Michigan Nature Sounds.app', archiveType: 'App Store Package' },
  { name: 'Peek-a-Zoo', bundleId: 'com.tbd.pazCLL', version: '1.0', platform: 'iOS', minOs: '3.0', ipaFile: 'Peek-a-Zoo 1.0.ipa', size: 24.6, bundlePath: 'Payload/Peek-a-Zoo.app', archiveType: 'App Store Package' },
  { name: 'Artsee', bundleId: 'com.britejar.artsee', version: '1.1', platform: 'iOS', minOs: '2.2', ipaFile: 'Artsee 1.1.ipa', size: 12.4, bundlePath: 'Payload/Artsee.app', archiveType: 'App Store Package' },
  { name: 'Angry Birds', bundleId: 'com.rovio.AngryBirdsHalloween', version: '1.5.3', platform: 'iOS', minOs: '3.0', ipaFile: 'Angry Birds 1.5.3.ipa', size: 16.8, bundlePath: 'Payload/Angry Birds.app', archiveType: 'App Store Package' },
  { name: 'Farm Flip Fun', bundleId: 'lv.yapp.farmflipfun', version: '1.0', platform: 'iOS', minOs: '3.0', ipaFile: 'Farm Flip Fun 1.0.ipa', size: 10.6, bundlePath: 'Payload/Farm Flip Fun.app', archiveType: 'App Store Package' },
  { name: 'Farm Story', bundleId: 'com.teamlava.farmstory', version: '1.2', platform: 'iOS', minOs: '3.0', ipaFile: 'Farm Story 1.2.ipa', size: 19.9, bundlePath: 'Payload/Farm Story.app', archiveType: 'App Store Package' },
  { name: 'Stickers', bundleId: 'com.nightanddaystudios.ericcarlestickers', version: '1.0', platform: 'iOS', minOs: '5.0', ipaFile: 'Stickers 1.0.ipa', size: 206.1, bundlePath: 'Payload/Stickers.app', archiveType: 'App Store Package' },
  { name: 'Forest', bundleId: 'com.nightanddaystudios.peekabooforest', version: '1.1.0', platform: 'iOS', minOs: '3.1.3', ipaFile: 'Forest 1.1.0.ipa', size: 25.6, bundlePath: 'Payload/Forest.app', archiveType: 'App Store Package' },
  { name: 'Virtuoso', bundleId: 'com.peterb.virtuosopianofree', version: '3.1.2', platform: 'iOS', minOs: '4.0', ipaFile: 'Virtuoso 3.1.2.ipa', size: 19.9, bundlePath: 'Payload/Virtuoso.app', archiveType: 'App Store Package' },
  { name: 'ABC Tracer', bundleId: 'com.appzoo.ABCTracer', version: '1.8', platform: 'iOS', minOs: '2.2.1', ipaFile: 'ABC Tracer 1.8.ipa', size: 20.9, bundlePath: 'Payload/ABC Tracer.app', archiveType: 'App Store Package' },
  { name: 'Peek Wild', bundleId: 'com.nightanddaystudios.peekaboowild', version: '2.0.1', platform: 'iOS', minOs: '3.1.3', ipaFile: 'Peek Wild 2.0.1.ipa', size: 9.8, bundlePath: 'Payload/Peek Wild.app', archiveType: 'App Store Package' },
  { name: 'Peekaboo', bundleId: 'com.nightanddaystudios.peekaboobarn', version: '2.0', platform: 'iOS', minOs: '2.2', ipaFile: 'Peekaboo 2.0.ipa', size: 3.6, bundlePath: 'Payload/Peekaboo.app', archiveType: 'App Store Package' },
  { name: 'Finding Sight', bundleId: 'my.finding3', version: '2.1', platform: 'iOS', minOs: '3.2', ipaFile: 'Finding Sight 2.1.ipa', size: 34, bundlePath: 'Payload/Finding Sight.app', archiveType: 'App Store Package' },
  { name: 'ArtikPix', bundleId: 'com.rinnapps.artikpix.iap', version: '1.2.4', platform: 'iOS', minOs: '3.1', ipaFile: 'ArtikPix 1.2.4.ipa', size: 41.4, bundlePath: 'Payload/ArtikPix.app', archiveType: 'App Store Package' }
];

const appGrid = document.querySelector('#app-grid');
const template = document.querySelector('#app-card-template');
const appCount = document.querySelector('#app-count');
const totalSize = document.querySelector('#total-size');
const sortButton = document.querySelector('#sort-button');

let currentSorted = [...apps];

function formatSize(sizeInMb) {
  return `${sizeInMb.toFixed(1)} MB`;
}

function renderApps() {
  appGrid.innerHTML = '';

  currentSorted.forEach((app) => {
    const card = template.content.cloneNode(true);
    card.querySelector('.app-name').textContent = app.name;
    card.querySelector('.bundle-id').textContent = app.bundleId;
    card.querySelector('.version-pill').textContent = `v${app.version}`;
    card.querySelector('.platform').textContent = app.platform;
    card.querySelector('.min-os').textContent = `iOS ${app.minOs}`;
    card.querySelector('.size').textContent = formatSize(app.size);
    card.querySelector('.archive').textContent = app.archiveType;
    card.querySelector('.bundle-path').textContent = app.bundlePath;

    const downloadLink = card.querySelector('.download-link');
    downloadLink.href = `./App%20Store.zip`;
    downloadLink.setAttribute('aria-label', `Download ${app.name} package`);

    appGrid.appendChild(card);
  });

  appCount.textContent = String(currentSorted.length);

  const total = currentSorted.reduce((sum, app) => sum + app.size, 0);
  totalSize.textContent = `${total.toFixed(1)} MB`;
}

sortButton.addEventListener('click', () => {
  const ascending = currentSorted[0]?.size > currentSorted[currentSorted.length - 1]?.size;
  currentSorted = [...apps].sort((a, b) => (ascending ? a.size - b.size : b.size - a.size));
  renderApps();
});

renderApps();
