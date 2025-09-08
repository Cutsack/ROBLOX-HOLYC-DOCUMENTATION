// Simple SPA router that loads Markdown from /content using marked.js
const routes = [
  { id: 'index', title: 'Overview', file: 'index.md', section: 'Getting Started' },
  { id: 'getting-started', title: 'Getting Started', file: 'getting-started.md', section: 'Getting Started' },
  { id: 'execution-model', title: 'Execution Model', file: 'execution-model.md', section: 'Language' },
  { id: 'language', title: 'Supported HolyC Subset', file: 'language.md', section: 'Language' },
  { id: 'bridge-api', title: 'Roblox Bridge API', file: 'bridge-api.md', section: 'Bridges' },
  { id: 'input-remotes', title: 'Remotes & Input', file: 'input-remotes.md', section: 'Bridges' },
  { id: 'physics', title: 'Physics & Constraints', file: 'physics.md', section: 'Bridges' },
  { id: 'gui-camera-text', title: 'GUI, Camera & Text', file: 'gui-camera-text.md', section: 'Client' },
  { id: 'tests', title: 'Tests & Fuzzing', file: 'tests.md', section: 'Project' },
  { id: 'open-cloud', title: 'Open Cloud Pipeline', file: 'open-cloud.md', section: 'Project' },
  { id: 'examples', title: 'Examples Library', file: 'examples.md', section: 'Reference' },
  { id: 'limitations', title: 'Known Limitations', file: 'limitations.md', section: 'Reference' },
  { id: 'troubleshooting', title: 'Troubleshooting', file: 'troubleshooting.md', section: 'Reference' },
  { id: 'credits', title: 'Credits', file: 'credits.md', section: 'Reference' },
];

const nav = document.getElementById('nav');
const contentEl = document.getElementById('content');

function buildNav(){
  const sections = {};
  for(const r of routes){
    if(!sections[r.section]) sections[r.section] = [];
    sections[r.section].push(r);
  }
  const frag = document.createDocumentFragment();
  Object.keys(sections).forEach(sec => {
    const h = document.createElement('div');
    h.className = 'section';
    h.textContent = sec;
    frag.appendChild(h);
    sections[sec].forEach(r => {
      const a = document.createElement('a');
      a.href = `#/${r.id}`;
      a.textContent = r.title;
      frag.appendChild(a);
    });
  });
  nav.innerHTML = '';
  nav.appendChild(frag);
}

async function loadPage(){
  const hash = location.hash.replace(/^#\//, '') || 'index';
  const route = routes.find(r => r.id === hash) || routes[0];
  document.title = `${route.title} — HolyC for Roblox Docs`;
  try{
    const res = await fetch(`content/${route.file}`);
    const md = await res.text();
    marked.setOptions({
      highlight: function(code, lang){
        try { return hljs.highlight(code, {language: (lang||'plaintext')}).value; }
        catch(e){ return hljs.highlightAuto(code).value; }
      }
    });
    contentEl.innerHTML = marked.parse(md);
    // Scroll to top on navigation
    window.scrollTo({top: 0, behavior: 'smooth'});
  }catch(err){
    contentEl.innerHTML = `<p>Failed to load page. ${String(err)}</p>`;
  }
}

window.addEventListener('hashchange', loadPage);
window.addEventListener('DOMContentLoaded', ()=>{ buildNav(); loadPage(); });
