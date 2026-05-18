var SERIES = [
  { id:'sax',      icon:'🎷', name:'Sax Series',     color:'#1a2e26', accent:'#3aaa7a', labelColor:'#3aaa7a' },
  { id:'hiphop',   icon:'🎤', name:'Hip-Hop Series', color:'#1a1a0e', accent:'#f58a13', labelColor:'#f58a13' },
  { id:'function', icon:'🔥', name:'The Function',   color:'#2d1a12', accent:'#e8723a', labelColor:'#e8723a' },
  { id:'open',     icon:'🎚️', name:'Open Format',    color:'#12121a', accent:'#a07be8', labelColor:'#a07be8' },
  { id:'warmup',   icon:'⚡', name:'Warm-Up Series', color:'#1a1a2e', accent:'#7b9ce8', labelColor:'#7b9ce8' }
];

var MIXES = [
  { id:1,  series:'sax',      title:'Max the Sax',         tags:['Pure Sax','High Energy','95–110 BPM','60 Min'],       price:'24.99', tracks:['DMX – Party Up','Usher – Yeah!','Jay-Z – Empire State of Mind','Kanye West – Gold Digger','Beyoncé – Crazy in Love','Mary J. Blige – Real Love','Biggie – Juicy','Ne-Yo – So Sick','Chris Brown – Forever','R. Kelly – Ignition','Alicia Keys – No One','Drake – One Dance'] },
  { id:2,  series:'sax',      title:'Sax on the Beach',    tags:['Beachy','Feel-Good','90–105 BPM','60 Min'],           price:'24.99', tracks:['Kool & The Gang – Get Down on It','Earth Wind & Fire – September','Michael Jackson – Don\'t Stop \'Til You Get Enough','Stevie Wonder – Sir Duke','Lionel Richie – All Night Long','Average White Band – Pick Up the Pieces','Grover Washington Jr. – Just the Two of Us','George Benson – Give Me the Night'] },
  { id:3,  series:'sax',      title:'Sax Mex',             tags:['Latin','Reggaeton','Sax','95–115 BPM','60 Min'],      price:'24.99', tracks:['Marc Anthony – Vivir Mi Vida','Bad Bunny – Tití Me Preguntó','J Balvin – Mi Gente','Daddy Yankee – Gasolina','Ozuna – Taki Taki','Maluma – Hawái','Shakira – Hips Don\'t Lie','Celia Cruz – La Vida Es Un Carnaval'] },
  { id:4,  series:'sax',      title:'Sax After Dark',      tags:['Late Night','Slow Jams','80–95 BPM','60 Min'],        price:'24.99', tracks:['Jaheim – Could It Be','Joe – All That I Am','R. Kelly – Step in the Name of Love','Ginuwine – Pony','Brandy – Have You Ever','112 – Cupid','Dru Hill – Never Make a Promise','Silk – Freak Me','Jodeci – Cry for You','K-Ci & JoJo – All My Life'] },
  { id:5,  series:'hiphop',   title:'Hip-Hop Anthems',     tags:['Crowd Anthems','110–125 BPM','60 Min'],               price:'24.99', tracks:['Kendrick Lamar – HUMBLE.','Drake – God\'s Plan','Jay-Z & Kanye – Ni**as in Paris','Cardi B – Bodak Yellow','Migos – Bad and Boujee','Future – Mask Off','21 Savage – Bank Account','Travis Scott – SICKO MODE','Post Malone – Congratulations','Lil Baby – Drip Too Hard'] },
  { id:6,  series:'hiphop',   title:'Rewind',              tags:['90s','Early 2000s','Nostalgia','100–115 BPM','60 Min'], price:'24.99', tracks:['Biggie – Hypnotize','Tupac – California Love','Jay-Z – Big Pimpin\'','Nas – If I Ruled the World','DMX – Ruff Ryders Anthem','Missy Elliott – Work It','Lil Kim – Not Tonight','Busta Rhymes – Put Your Hands Where My Eyes Could See','Wu-Tang Clan – C.R.E.A.M.'] },
  { id:7,  series:'hiphop',   title:'2K Bombs',            tags:['2000–2010','Club Radio','110–120 BPM','60 Min'],      price:'24.99', tracks:['Nelly – Hot in Herre','Ludacris – Stand Up','Lil Jon – Get Low','T.I. – Whatever You Like','Young Jeezy – Soul Survivor','Gucci Mane – Lemonade','Rick Ross – Hustlin\'','Soulja Boy – Crank That','Fabolous – Throw It in the Bag'] },
  { id:8,  series:'hiphop',   title:'Check Out My Melody', tags:['Melodic','Crossover','Hooks','95–108 BPM','60 Min'],  price:'24.99', tracks:['Lauryn Hill – Doo Wop','Fugees – Ready or Not','Common – The Light','Mos Def – Ms. Fat Booty','Erykah Badu – On & On','D\'Angelo – Brown Sugar','Outkast – Rosa Parks','A Tribe Called Quest – Can I Kick It?','Maxwell – Ascension'] },
  { id:9,  series:'function', title:'Backyard Bounce',     tags:['Cookout','Day Party','100–115 BPM','60 Min'],         price:'24.99', tracks:['OutKast – The Way You Move','Juvenile – Back That Azz Up','Lil Jon – Yeah!','David Banner – Play','UGK – International Players Anthem','Three 6 Mafia – Stay Fly','T-Pain – Buy U a Drank','Flo Rida – Low','Dem Franchize Boyz – Lean wit It'] },
  { id:10, series:'function', title:'Poolside Drift',      tags:['Pool Party','Summer Chill','85–100 BPM','60 Min'],    price:'24.99', tracks:['Drake – Hotline Bling','Calvin Harris – Summer','Pharrell – Happy','Justin Timberlake – Can\'t Stop the Feeling','Bruno Mars – Treasure','Dua Lipa – Levitating','Lizzo – Juice','Mark Ronson – Uptown Funk','Daft Punk – Get Lucky'] },
  { id:11, series:'function', title:'Parking Lot Energy',  tags:['Tailgate','Pre-Game','115–130 BPM','60 Min'],        price:'24.99', tracks:['2 Chainz – No Lie','Meek Mill – Started from the Bottom','Big Sean – IDFWU','YG – My Ni**a','Rick Ross – Pop That','Wale – The Need to Know','Yo Gotti – Down in the DM','Young Jeezy – Put On'] },
  { id:12, series:'function', title:'Low Lights',          tags:['Lounge','Deep House','Smooth','90–105 BPM','60 Min'], price:'24.99', tracks:['Frank Ocean – Thinkin Bout You','The Weeknd – Earned It','SZA – Good Days','H.E.R. – Focus','Jhené Aiko – None of Your Concern','Lucky Daye – Roll Some Mo','Brent Faiyaz – Clouded','Giveon – Heartbreak Anniversary','Daniel Caesar – Best Part'] },
  { id:13, series:'open',     title:'Field of Dreams',     tags:['Genre-Blending','Curated Chaos','All BPM','60 Min'], price:'24.99', tracks:['Prince – Kiss','Michael Jackson – Billie Jean','Whitney Houston – I Wanna Dance','Rick James – Superfreak','Chaka Khan – Ain\'t Nobody','Donna Summer – Last Dance','Gloria Gaynor – I Will Survive','Earth Wind & Fire – Boogie Wonderland','George Clinton – Atomic Dog'] },
  { id:14, series:'open',     title:'Cruise Control',      tags:['Smooth Blend','Any Occasion','90–110 BPM','60 Min'], price:'24.99', tracks:['Sade – Smooth Operator','Anita Baker – Caught Up in the Rapture','Luther Vandross – Never Too Much','Marvin Gaye – Let\'s Get It On','Al Green – Let\'s Stay Together','Barry White – Can\'t Get Enough of Your Love','Maze ft. Frankie Beverly – Before I Let Go'] },
  { id:15, series:'open',     title:'After Hours',         tags:['Late Night','Genre-Blending','85–100 BPM','60 Min'], price:'24.99', tracks:['The Weeknd – Blinding Lights','Drake – Passionfruit','Post Malone – Stay','SZA – The Weekend','Frank Ocean – Nights','6LACK – East Atlanta Love Letter','Bryson Tiller – Exchange','H.E.R. – Best Part','Jhené Aiko – Triggered'] },
  { id:16, series:'open',     title:'No Bad Vibes',        tags:['Feel-Good','Wide Appeal','95–115 BPM','60 Min'],     price:'24.99', tracks:['Pharrell – Happy','Justin Timberlake – Can\'t Stop the Feeling','Bruno Mars – Uptown Funk','Lizzo – Good as Hell','Anderson .Paak – Come Down','Childish Gambino – Redbone','Leon Bridges – Coming Home','Surfaces – Sunday Best','Bill Withers – Lovely Day','Kirk Franklin – Stomp'] },
  { id:17, series:'warmup',   title:'Warm-Up Mix Vol. 1',  tags:['High Energy','Open Format','30 Min'],                price:'24.99', tracks:['Black Eyed Peas – Let\'s Get It Started','Kanye West – Stronger','Eminem – Lose Yourself','Migos – Fight Night','Daddy Yankee – Gasolina','Post Malone & Swae Lee – Sunflower','Bruno Mars & Cardi B – Finesse','Usher & Ludacris – Yeah','Usher & Pitbull – DJ Got Us Fallin In Love','Glass Animals – Heat Waves','Rihanna – Please Don\'t Stop the Music','Dua Lipa – Training Season','Justin Bieber & Nicki Minaj – Beauty and a Beat','Jennifer Lopez & Pitbull – On the Floor','Ke$ha & Pitbull – Timber','Cobra Starship & Sabi – You Make Me Feel','Rihanna – Shut Up and Drive','Flo-Rida & T-Pain – Low','Fergie & Will.I.Am – Fergalicious','Rihanna – We Found Love','Katy Perry & Juicy J – Dark Horse','Flo-Rida & Sage The Gemini – GDFR','Waka Flocka & Roscoe Dash – No Hands','Drake – Trophies','Andy Mineo & Lecrae – Coming In Hot','Jay-Z & Rihanna & Kanye West – Run This Town','T.I. – Bring Em Out'] },  
  { id:18, series:'warmup',   title:'Warm-Up Mix Vol. 2',  tags:['High Energy','Open Format','30 Min'],               price:'24.99', tracks:['Cardi B – Bodak Yellow','Nicki Minaj – Monster','Lil Baby – Woah','Gunna – Speed It Up','Roddy Ricch – The Box','DaBaby – Suge','Polo G – Pop Out','Juice WRLD – Lucid Dreams','NBA YoungBoy – Outside Today','Lil Durk – India'] },
  { id:19, series:'warmup',   title:'Warm-Up Mix Vol. 3',  tags:['High Energy','Open Format','30 Min'],               price:'24.99', tracks:['Post Malone – Rockstar','Megan Thee Stallion – Savage','Jack Harlow – What\'s Poppin','24kGoldn – Mood','Iann Dior – Sick and Tired','Olivia Rodrigo – good 4 u','Doja Cat – Say So','SZA – Good Days','Dua Lipa – Levitating'] },
  { id:20, series:'warmup',   title:'Warm-Up Mix Vol. 4',  tags:['High Energy','Open Format','30 Min'],               price:'24.99', tracks:['Tyler the Creator – EARFQUAKE','Frank Ocean – Nikes','Childish Gambino – This Is America','Anderson .Paak – Tints','Thundercat – Dragonball Durag','Steve Lacy – Bad Habit','Brent Faiyaz – Wasting Time','Lucky Daye – Roll Some Mo','Giveon – Heartbreak Anniversary','Silk Sonic – Leave the Door Open'] }
];

var LICENSE_DESCS = {
  '24.99': 'Build once, sell many. You receive a clean non-exclusive copy of this mix.',
  '74.99': 'Made to your specs. Non-exclusive — others may also purchase this mix.',
  '199.99': 'Made for you only. This mix will never be sold to anyone else. Ever.'
};

var CM_LICENSE_DESCS = {
  '74.99': 'Non-exclusive — others may also purchase this mix.',
  '199.99': 'Exclusive — this mix will never be sold to anyone else. Ever.'
};

var FAQS = [
  { q:'What does "non-exclusive" mean?', a:'Non-exclusive means the same mix may be sold to other buyers. You\'re purchasing the right to use it, not sole ownership. If you want a mix that\'s entirely yours and will never be sold to anyone else, choose the Custom Exclusive license.' },
  { q:'How does delivery work after I pay?', a:'After payment is confirmed you\'ll receive a private, time-limited download link via email within your chosen delivery window — standard is 7–10 business days, rush is 48 hours. The link expires after 48 hours, so download your file promptly.' },
  { q:'Can I use the mix commercially?', a:'Pre-made and custom non-exclusive mixes are licensed for personal and private event use. If you\'re using a mix in a commercial setting — such as a fitness studio, club, or paid event — please reach out to us first so we can discuss appropriate licensing.' },
  { q:'What if I want specific songs in my mix?', a:'That\'s exactly what the Custom Mix option is for. Head to the Custom Mixes page, enter your tracklist, choose your license, and submit your order. We\'ll build it around your vision.' },
  { q:'Can I preview a mix before buying?', a:'Yes — every mix in our library has a Preview Highlights player. It streams a watermarked highlight reel of the full mix so you know exactly what you\'re getting before you spend a dollar.' },
  { q:'Do I get to choose the exact version of each track?', a:'Every track you request is guaranteed to be in your mix — we don\'t swap or substitute songs. What we do reserve creative freedom on is the version of each track. We may use a radio edit, extended mix, instrumental, or remix if it better serves the flow and energy of your mix. If a specific version is important to you, just note it in the artist or title field.' },
  { q:'What happens if I\'m not happy with my custom mix?', a:'We communicate throughout the process and will reach out if we have any questions about your tracklist. Because custom mixes are built specifically for you, all sales are final once delivered — but we\'re committed to getting it right.' },
  { q:'Do you offer refunds?', a:'Due to the digital nature of our products, all sales are final once a download link has been delivered. If you experience a technical issue that prevents you from accessing your file, contact us within 7 days and we\'ll resolve it.' }
];

// ── Audio URLs ────────────────────────────────────────────────────────────────
var MIX_URL       = 'https://pub-8a606f3e80df454aa140a9958d8abc6c.r2.dev/Warm-Up%20Mix%20Vol1.mp3';
var WATERMARK_URL = 'https://pub-8a606f3e80df454aa140a9958d8abc6c.r2.dev/MyWarmUpMix.mp3';
var WATERMARK_INTERVAL = 60;
var WATERMARK_VOLUME   = 0.45;

// ── Audio engine state ────────────────────────────────────────────────────────
var audioCtx        = null;
var mixBuffer       = null;
var watermarkBuffer = null;
var mixSource       = null;
var audioStartTime  = 0;
var pauseOffset     = 0;
var audioPlaying    = false;
var watermarkTimers = [];
var rafId           = null;

// ── Helpers ───────────────────────────────────────────────────────────────────
function getSeries(id) {
  for (var i = 0; i < SERIES.length; i++) if (SERIES[i].id === id) return SERIES[i];
}

function fmtTime(s) {
  s = Math.max(0, Math.floor(s));
  var m = Math.floor(s / 60);
  var sec = s % 60;
  return m + ':' + (sec < 10 ? '0' : '') + sec;
}

function showToast(msg) {
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 3500);
}

// ── Web Audio: load buffers ───────────────────────────────────────────────────
function loadAudioBuffer(url, cb) {
  fetch(url)
    .then(function(r) { return r.arrayBuffer(); })
    .then(function(ab) { return audioCtx.decodeAudioData(ab); })
    .then(function(buf) { cb(null, buf); })
    .catch(function(err) { cb(err); });
}

function initAudioContext() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function ensureBuffersLoaded(cb) {
  initAudioContext();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  if (mixBuffer && watermarkBuffer) { cb(); return; }

  var btn = document.getElementById('previewBtn');
  var timeEl = document.getElementById('progTime');
  if (btn) btn.classList.add('loading');
  if (timeEl) timeEl.textContent = '…';

  var loaded = 0;
  function onLoad(err) {
    if (err) {
      console.error('MyWarmupMix: audio load error', err);
      showToast('Could not load preview. Please try again.');
      if (btn) btn.classList.remove('loading');
      if (timeEl) timeEl.textContent = '0:00';
      return;
    }
    loaded++;
    if (loaded === 2) {
      if (btn) btn.classList.remove('loading');
      cb();
    }
  }

  if (!mixBuffer)       loadAudioBuffer(MIX_URL,       function(err, buf) { if (!err) mixBuffer = buf;       onLoad(err); });
  if (!watermarkBuffer) loadAudioBuffer(WATERMARK_URL,  function(err, buf) { if (!err) watermarkBuffer = buf; onLoad(err); });
}

// ── Watermark ─────────────────────────────────────────────────────────────────
function playWatermarkHit() {
  if (!audioCtx || !watermarkBuffer) return;
  var gain = audioCtx.createGain();
  gain.gain.value = WATERMARK_VOLUME;
  gain.connect(audioCtx.destination);
  var src = audioCtx.createBufferSource();
  src.buffer = watermarkBuffer;
  src.connect(gain);
  src.start();
}

function scheduleWatermarks(fromOffset) {
  clearWatermarkTimers();
  if (!mixBuffer) return;
  var duration = mixBuffer.duration;
  var firstTick = Math.ceil((fromOffset + 0.01) / WATERMARK_INTERVAL) * WATERMARK_INTERVAL;
  for (var t = firstTick; t < duration; t += WATERMARK_INTERVAL) {
    (function(tick) {
      var delay = (tick - fromOffset) * 1000;
      var id = setTimeout(playWatermarkHit, delay);
      watermarkTimers.push(id);
    })(t);
  }
}

function clearWatermarkTimers() {
  for (var i = 0; i < watermarkTimers.length; i++) clearTimeout(watermarkTimers[i]);
  watermarkTimers = [];
}

// ── Playback ──────────────────────────────────────────────────────────────────
function startAudioPlayback(offset) {
  mixSource = audioCtx.createBufferSource();
  mixSource.buffer = mixBuffer;
  mixSource.connect(audioCtx.destination);
  mixSource.start(0, offset);
  mixSource.onended = function() { if (audioPlaying) stopAudioPlayback(); };
  audioStartTime = audioCtx.currentTime - offset;
  audioPlaying = true;
  scheduleWatermarks(offset);
  tickProgress();
}

function stopAudioPlayback() {
  cancelAnimationFrame(rafId);
  clearWatermarkTimers();
  if (mixSource) {
    mixSource.onended = null;
    try { mixSource.stop(); } catch(e) {}
    mixSource = null;
  }
  pauseOffset = audioCtx ? Math.min(audioCtx.currentTime - audioStartTime, mixBuffer ? mixBuffer.duration : 0) : 0;
  audioPlaying = false;
}

function tickProgress() {
  if (!audioPlaying || !audioCtx || !mixBuffer) return;
  var elapsed = audioCtx.currentTime - audioStartTime;
  var duration = mixBuffer.duration;
  var pct = Math.min((elapsed / duration) * 100, 100);
  var bar = document.getElementById('progBar');
  var timeEl = document.getElementById('progTime');
  if (bar) bar.value = pct;
  if (timeEl) timeEl.textContent = fmtTime(elapsed);
  if (elapsed < duration) {
    rafId = requestAnimationFrame(tickProgress);
  } else {
    resetPlayer();
  }
}

// ── togglePreview / seekTo ────────────────────────────────────────────────────
function togglePreview() {
  if (!audioPlaying) {
    ensureBuffersLoaded(function() {
      startAudioPlayback(pauseOffset);
      document.getElementById('previewBtn').classList.add('playing');
      setNowPlaying(currentMixId, true);
    });
  } else {
    stopAudioPlayback();
    document.getElementById('previewBtn').classList.remove('playing');
    setNowPlaying(currentMixId, false);
  }
}

function seekTo(v) {
  if (!mixBuffer) return;
  var seekPos = (parseFloat(v) / 100) * mixBuffer.duration;
  pauseOffset = seekPos;
  if (audioPlaying) {
    stopAudioPlayback();
    startAudioPlayback(seekPos);
    document.getElementById('previewBtn').classList.add('playing');
    setNowPlaying(currentMixId, true);
  }
  var timeEl = document.getElementById('progTime');
  if (timeEl) timeEl.textContent = fmtTime(seekPos);
}

function resetPlayer() {
  cancelAnimationFrame(rafId);
  if (audioPlaying) stopAudioPlayback();
  audioPlaying = false;
  pauseOffset = 0;
  var btn = document.getElementById('previewBtn');
  if (btn) btn.classList.remove('playing');
  var bar = document.getElementById('progBar');
  if (bar) bar.value = 0;
  var timeEl = document.getElementById('progTime');
  if (timeEl) timeEl.textContent = '0:00';
  if (currentMixId) setNowPlaying(currentMixId, false);
}

// ── UI ────────────────────────────────────────────────────────────────────────
function mixCardHTML(m) {
  var s = getSeries(m.series);
  return '<div class="mix-card" id="card-' + m.id + '" onclick="openMix(' + m.id + ')">' +
    '<div class="mix-art" style="background:' + s.color + ';">' +
      '<div class="mix-art-inner"><div class="mix-art-icon">' + s.icon + '</div><div class="mix-art-title">' + m.title + '</div></div>' +
      '<div class="mix-series-badge" style="background:' + s.accent + '22;color:' + s.accent + ';border:1px solid ' + s.accent + '44;">' + s.name + '</div>' +
      '<div class="now-playing-indicator"><div class="np-bar"></div><div class="np-bar"></div><div class="np-bar"></div><div class="np-bar"></div></div>' +
      '<div class="mix-play-overlay"><div class="play-circle"><svg viewBox="0 0 16 16"><path d="M4 2l10 6-10 6V2z"/></svg></div></div>' +
    '</div>' +
    '<div class="mix-info">' +
      '<div class="mix-series-label" style="color:' + s.accent + '">' + s.name + '</div>' +
      '<div class="mix-title">' + m.title + '</div>' +
      '<div class="mix-tags">' + m.tags.map(function(t) { return '<span class="mix-tag">' + t + '</span>'; }).join('') + '</div>' +
      '<div class="mix-footer"><div class="mix-price">$' + m.price + '</div><div class="mix-tracks">' + m.tracks.length + ' tracks</div></div>' +
    '</div></div>';
}

function renderWarmupGrid() {
  var el = document.getElementById('warmupGrid');
  if (!el) return;
  el.innerHTML = MIXES.filter(function(m) { return m.series === 'warmup'; }).map(mixCardHTML).join('');
}

var activeFilter = 'all';
function renderTabs(active) {
  var el = document.getElementById('seriesTabs');
  if (!el) return;
  var nonWarmup = SERIES.filter(function(s) { return s.id !== 'warmup'; });
  var all = [{ id:'all', icon:'🎧', name:'All' }].concat(nonWarmup);
  el.innerHTML = all.map(function(s) {
    return '<div class="stab' + (s.id === active ? ' active' : '') + '" onclick="filterSeries(\'' + s.id + '\')"><span class="stab-icon">' + s.icon + '</span>' + s.name + '</div>';
  }).join('');
}

function filterSeries(id) {
  activeFilter = id;
  renderTabs(id);
  var list = id === 'warmup' ? MIXES.filter(function(m) { return m.series === 'warmup'; }) :
             id === 'all'    ? MIXES.filter(function(m) { return m.series !== 'warmup'; }) :
                               MIXES.filter(function(m) { return m.series === id; });
  var el = document.getElementById('mixGrid');
  if (el) el.innerHTML = list.map(mixCardHTML).join('');
}

function buildFAQ() {
  var el = document.getElementById('faqList');
  if (!el) return;
  el.innerHTML = FAQS.map(function(f, i) {
    return '<div class="faq-item">' +
      '<button class="faq-question" onclick="toggleFAQ(' + i + ')" id="fq-' + i + '">' + f.q + '<span class="faq-chev">+</span></button>' +
      '<div class="faq-answer" id="fa-' + i + '">' + f.a + '</div></div>';
  }).join('');
}

function toggleFAQ(i) {
  var q = document.getElementById('fq-' + i);
  var a = document.getElementById('fa-' + i);
  var open = a.classList.toggle('open');
  q.classList.toggle('open', open);
}

function buildTrackRows(max) {
  max = max || 20;
  var html = '';
  for (var i = 1; i <= max; i++) {
    html += '<div class="track-form-row"><div class="track-form-num">' + i + '</div>' +
      '<input class="track-form-input" type="text" placeholder="Artist" id="tr-artist-' + i + '">' +
      '<input class="track-form-input" type="text" placeholder="Title" id="tr-title-' + i + '"></div>';
  }
  var el = document.getElementById('trackFormRows');
  if (el) el.innerHTML = html;
  var cnt = document.getElementById('tracklist-count');
  if (cnt) cnt.textContent = max;
}

function handleOccasionChange() {
  var occ = document.getElementById('cm-occasion');
  if (occ) buildTrackRows(occ.value === 'Team Warm-Up' ? 20 : 40);
}

function updateOrderSummary() {
  var v = document.getElementById('cm-license');
  var rush = document.getElementById('cm-rush');
  if (!v || !rush) return;
  var total = (parseFloat(v.value) + (rush.checked ? 49.99 : 0)).toFixed(2);
  var ll = document.getElementById('sum-license-label');
  var lp = document.getElementById('sum-license-price');
  var rl = document.getElementById('sum-rush-line');
  var st = document.getElementById('sum-total');
  var pt = document.getElementById('pay-total');
  var ld = document.getElementById('cm-license-desc');
  if (ll) ll.textContent = v.value === '199.99' ? 'Custom Exclusive' : 'Custom (Non-Exclusive)';
  if (lp) lp.textContent = '$' + parseFloat(v.value).toFixed(2);
  if (rl) rl.style.display = rush.checked ? 'flex' : 'none';
  if (st) st.textContent = '$' + total;
  if (pt) pt.textContent = total;
  if (ld) ld.textContent = CM_LICENSE_DESCS[v.value];
}

function handleCustomPay() {
  var name = document.getElementById('cm-name').value.trim();
  var email = document.getElementById('cm-email').value.trim();
  var phone = document.getElementById('cm-phone').value.trim();
  var occasion = document.getElementById('cm-occasion').value;
  var consent = document.getElementById('cm-consent').checked;
  if (!name) { showToast('Please enter your first and last name.'); highlight('cm-name'); return; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Please enter a valid email address.'); highlight('cm-email'); return; }
  if (!phone) { showToast('Please enter your phone number.'); highlight('cm-phone'); return; }
  if (!occasion) { showToast('Please select an occasion or event type.'); highlight('cm-occasion'); return; }
  if (!consent) { showToast('Please confirm the consent checkbox before paying.'); return; }
  showToast('Stripe checkout coming soon — stay tuned!');
}

function highlight(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.style.borderColor = '#e24b4a';
  el.focus();
  setTimeout(function() { el.style.borderColor = ''; }, 3000);
}

function handleContact() {
  var name = document.getElementById('ct-name').value.trim();
  var email = document.getElementById('ct-email').value.trim();
  var phone = document.getElementById('ct-phone') ? document.getElementById('ct-phone').value.trim() : '';
  var msg = document.getElementById('ct-message').value.trim();
  if (!name) { showToast('Please enter your name.'); document.getElementById('ct-name').focus(); return; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Please enter a valid email address.'); document.getElementById('ct-email').focus(); return; }
  if (!msg) { showToast('Please enter a message.'); document.getElementById('ct-message').focus(); return; }
  fetch('https://formspree.io/f/xqejknpv', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ name: name, email: email, phone: phone, message: msg })
  })
  .then(function(res) {
    if (res.ok) {
      showToast('Message sent! We\'ll be in touch within 24–48 hours.');
      document.getElementById('ct-name').value = '';
      document.getElementById('ct-email').value = '';
      if (document.getElementById('ct-phone')) document.getElementById('ct-phone').value = '';
      document.getElementById('ct-message').value = '';
    } else {
      showToast('Something went wrong. Please try again.');
    }
  })
  .catch(function() { showToast('Something went wrong. Please try again.'); });
}

var currentMixId = null;

function openMix(id) {
  currentMixId = id;
  var m = null;
  for (var i = 0; i < MIXES.length; i++) if (MIXES[i].id === id) { m = MIXES[i]; break; }
  var s = getSeries(m.series);
  document.getElementById('modalArt').style.background = s.color;
  document.getElementById('modalIcon').textContent = s.icon;
  document.getElementById('modalArtSub').textContent = s.name;
  document.getElementById('modalSeriesLabel').textContent = s.name;
  document.getElementById('modalSeriesLabel').style.color = s.accent;
  document.getElementById('modalTitle').textContent = m.title;
  document.getElementById('modalPrice').textContent = '$' + m.price;
  document.getElementById('modalTags').innerHTML = m.tags.map(function(t) { return '<span class="modal-tag">' + t + '</span>'; }).join('');
  var tl = document.getElementById('tracklistEl');
  tl.innerHTML = m.tracks.map(function(t, i) { return '<div class="track-row"><div class="track-num">' + (i + 1) + '</div><div class="track-name">' + t + '</div></div>'; }).join('');
  document.getElementById('tlLabel').textContent = 'View Tracklist (' + m.tracks.length + ' tracks)';
  tl.classList.remove('open');
  document.getElementById('tlToggle').classList.remove('open');
  resetPlayer();
  document.getElementById('consentCk').checked = false;
  document.getElementById('buyBtn').disabled = true;
  document.getElementById('licenseSel').value = '24.99';
  document.getElementById('buyPriceSpan').textContent = '24.99';
  document.getElementById('licenseDesc').textContent = LICENSE_DESCS['24.99'];
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function setNowPlaying(id, active) {
  var c = document.getElementById('card-' + id);
  if (c) c.classList.toggle('now-playing', active);
}

function closeModal() {
  resetPlayer();
  if (currentMixId) setNowPlaying(currentMixId, false);
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeOverlay(e) {
  if (e.target === document.getElementById('overlay')) closeModal();
}

function toggleTL() {
  document.getElementById('tracklistEl').classList.toggle('open');
  document.getElementById('tlToggle').classList.toggle('open');
}

function updateBuyPrice() {
  var v = document.getElementById('licenseSel').value;
  document.getElementById('buyPriceSpan').textContent = v;
  document.getElementById('licenseDesc').textContent = LICENSE_DESCS[v];
}

function toggleBuy() {
  document.getElementById('buyBtn').disabled = !document.getElementById('consentCk').checked;
}

function handleBuy() { showToast('Stripe checkout coming soon — stay tuned!'); }

function setActiveNav() {
  var path = window.location.pathname;
  var map = {
    '/': 'nav-home',
    '/index.html': 'nav-home',
    '/about.html': 'nav-about',
    '/faq.html': 'nav-faq',
    '/custom.html': 'nav-custom',
    '/contact.html': 'nav-contact'
  };
  var activeId = map[path];
  if (activeId) {
    var el = document.getElementById(activeId);
    if (el) el.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  setActiveNav();
  renderWarmupGrid();
  renderTabs('all');
  filterSeries('all');
  buildFAQ();
  buildTrackRows(20);
  updateOrderSummary();
});
