// Offline Learning Hub – Vanilla JS app (no build step)
const seedCourses = [
  { id: "c1", title: "Basic Reading – Level 1", lang: "en", subject: "Literacy", level: "Beginner", rating: 4.7, downloads: 128, format: "video", minutes: 12 },
  { id: "c2", title: "Everyday Math – Numbers & Money", lang: "en", subject: "Math", level: "Beginner", rating: 4.5, downloads: 102, format: "pdf", minutes: 0 },
  { id: "c3", title: "Intro to Farming Techniques", lang: "en", subject: "Life Skills", level: "Beginner", rating: 4.6, downloads: 86, format: "audio", minutes: 8 },
  { id: "c4", title: "Health: Clean Water Basics", lang: "en", subject: "Health", level: "All", rating: 4.8, downloads: 141, format: "video", minutes: 9 },
];

const els = {
  net: document.getElementById('net-badge'),
  settingsBtn: document.getElementById('settingsBtn'),
  settings: document.getElementById('settingsModal'),
  savePrefs: document.getElementById('savePrefs'),
  closePrefs: document.getElementById('closePrefs'),
  hubUrl: document.getElementById('hubUrl'),
  lang: document.getElementById('lang'),
  q: document.getElementById('q'),
  subject: document.getElementById('subject'),
  level: document.getElementById('level'),
  cards: document.getElementById('cards'),
  resultCount: document.getElementById('resultCount'),
  loading: document.getElementById('loading'),
  offlineBtn: document.getElementById('offlineBtn'),
  uploadBtn: document.getElementById('uploadBtn'),
  howBtn: document.getElementById('howBtn'),
  fileInput: document.getElementById('fileInput'),
  fbModal: document.getElementById('feedbackModal'),
  fbTitle: document.getElementById('fbTitle'),
  rating: document.getElementById('rating'),
  review: document.getElementById('review'),
  recent: document.getElementById('recent'),
  submitReview: document.getElementById('submitReview'),
  cancelReview: document.getElementById('cancelReview'),
};

let state = {
  hubUrl: localStorage.getItem('hub_base_url') || 'http://hub.local',
  lang: localStorage.getItem('hub_lang') || 'en',
  courses: [],
  selected: null,
};

function setOnlineUI(online){
  els.net.textContent = online ? 'Connected' : 'Offline mode';
  els.net.className = online 
    ? 'ml-auto text-xs px-2 py-1 rounded border bg-green-50 text-green-700' 
    : 'ml-auto text-xs px-2 py-1 rounded border bg-yellow-50 text-yellow-700';
}
window.addEventListener('online', ()=>setOnlineUI(true));
window.addEventListener('offline', ()=>setOnlineUI(false));
setOnlineUI(navigator.onLine);

els.hubUrl.value = state.hubUrl;
els.lang.value = state.lang;

// Settings modal
els.settingsBtn.onclick = () => els.settings.classList.add('open');
els.closePrefs.onclick = () => els.settings.classList.remove('open');
els.savePrefs.onclick = () => {
  state.hubUrl = els.hubUrl.value.trim() || state.hubUrl;
  state.lang = els.lang.value;
  localStorage.setItem('hub_base_url', state.hubUrl);
  localStorage.setItem('hub_lang', state.lang);
  els.settings.classList.remove('open');
  loadCourses();
};

// Load courses (from hub or cache/seed)
async function loadCourses(){
  els.loading.classList.remove('hidden');
  try {
    const res = await fetch(`${state.hubUrl}/api/courses`, { cache: 'no-store' });
    if(!res.ok) throw new Error('Hub not reachable');
    const data = await res.json();
    state.courses = data;
    localStorage.setItem('hub_courses_cache', JSON.stringify(data));
  } catch(e){
    const cached = localStorage.getItem('hub_courses_cache');
    state.courses = cached ? JSON.parse(cached) : seedCourses;
  } finally {
    els.loading.classList.add('hidden');
    render();
  }
}
loadCourses();

// Filters
['input','change'].forEach(ev=>{
  els.q.addEventListener(ev, render);
  els.subject.addEventListener(ev, render);
  els.level.addEventListener(ev, render);
});

function filtered(){
  const q = els.q.value.toLowerCase();
  const subj = els.subject.value;
  const lvl = els.level.value;
  return state.courses.filter(c=>{
    const mq = q ? c.title.toLowerCase().includes(q) : true;
    const ms = subj==='All' ? true : c.subject===subj;
    const ml = lvl==='All' ? true : c.level===lvl;
    const mlang = c.lang===state.lang || c.lang==='en';
    return mq && ms && ml && mlang;
  });
}

function render(){
  const list = filtered();
  els.resultCount.textContent = `${list.length} results`;
  els.cards.innerHTML = list.map(c=> cardHTML(c)).join('');
  list.forEach(c=>{
    document.getElementById(`dl-${c.id}`).onclick = ()=>download(c.id);
    document.getElementById(`fb-${c.id}`).onclick = ()=>openFeedback(c);
  });
}

function cardHTML(c){
  return `<div class="bg-white rounded-xl border shadow-soft p-4 flex flex-col">
    <div class="font-semibold">${c.title}</div>
    <div class="text-xs text-slate-600 mt-1 flex items-center gap-2">
      <span class="px-2 py-0.5 rounded border">${c.subject}</span>
      <span class="px-2 py-0.5 rounded border">${c.level}</span>
      <span class="ml-auto">⭐ ${c.rating}</span>
    </div>
    <p class="text-sm text-slate-600 mt-2">Format: ${c.format.toUpperCase()} ${c.minutes?`• ${c.minutes} min`:''}</p>
    <div class="mt-auto flex gap-2 pt-3">
      <button id="dl-${c.id}" class="px-3 py-2 rounded bg-blue-600 text-white">Play</button>
      <button id="fb-${c.id}" class="px-3 py-2 rounded border">Feedback</button>
    </div>
  </div>`;
}

function download(id){
  const url = `${state.hubUrl}/api/courses/${id}/download`;
  fetch(url).then(r=>{
    if(r.ok){ window.location.href = url; }
    else throw new Error();
  }).catch(()=>{
    // fallback bundle
    const blob = new Blob([`Offline bundle for ${id}`], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${id}.txt`;
    a.click();
  });
}

// Feedback
function openFeedback(course){
  state.selected = course;
  els.fbTitle.textContent = `Leave feedback – ${course.title}`;
  els.review.value = '';
  els.rating.value = '5';
  renderRecent();
  els.fbModal.classList.add('open');
}
els.cancelReview.onclick = () => els.fbModal.classList.remove('open');
els.submitReview.onclick = ()=>{
  if(!state.selected) return;
  const key = `reviews_${state.selected.id}`;
  const list = JSON.parse(localStorage.getItem(key) || '[]');
  list.push({ rating: Number(els.rating.value), review: els.review.value, ts: Date.now() });
  localStorage.setItem(key, JSON.stringify(list));
  renderRecent();
  els.fbModal.classList.remove('open');
};

function renderRecent(){
  if(!state.selected){ els.recent.innerHTML=''; return; }
  const key = `reviews_${state.selected.id}`;
  const list = JSON.parse(localStorage.getItem(key) || '[]');
  if(list.length===0){ els.recent.innerHTML = '<div class="text-sm text-slate-500">No reviews yet.</div>'; return; }
  els.recent.innerHTML = list.slice().reverse().map(r=>`
    <div class="text-sm p-2 rounded border">
      <div class="mb-1">⭐ ${r.rating} • ${new Date(r.ts).toLocaleDateString()}</div>
      <div>${r.review? r.review.replace(/</g,'&lt;') : ''}</div>
    </div>
  `).join('');
}

// Offline button
els.offlineBtn.onclick = ()=>{
  alert('App will use cached courses and localStorage when hub is not reachable.');
};

// Upload
els.howBtn.onclick = ()=>{
  alert('Connect to the hub Wi-Fi. Then POST a file to '+state.hubUrl+'/api/uploads (this UI is a placeholder).');
};
els.uploadBtn.onclick = async ()=>{
  const f = els.fileInput.files && els.fileInput.files[0];
  if(!f){ alert('Pick a file first.'); return; }
  try{
    const fd = new FormData(); fd.append('file', f);
    const res = await fetch(`${state.hubUrl}/api/uploads`, { method: 'POST', body: fd });
    if(!res.ok) throw new Error('upload failed');
    alert('Uploaded to hub!');
  }catch(e){
    alert('Could not reach the hub. This is a local demo.');
  }
};
