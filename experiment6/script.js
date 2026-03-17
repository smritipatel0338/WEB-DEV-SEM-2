const headingEl = document.getElementById('heading');
const inputEl = document.getElementById('para');

function changebackground() {
  const colors = ['#d63838', '#19f0cc', '#2116f9', '#070e22', '#ffe4e1', '#d3ffd3'];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function changefontsize() {
  if (!headingEl) return;
  const current = window.getComputedStyle(headingEl).fontSize;
  const px = parseFloat(current || '24');
  headingEl.style.fontSize = `${Math.min(px + 4, 64)}px`;
}

function changeheading() {
  if (!headingEl || !inputEl) return;
  const text = inputEl.value.trim();
  headingEl.textContent = text || 'welcome to javascript lab';
}

function showhideparagraph() {
  let para = document.getElementById('textPara');
  if (!para) {
    para = document.createElement('p');
    para.id = 'textPara';
    para.textContent = inputEl.value.trim() || 'This is a sample paragraph.';
    para.style.marginTop = '10px';
    document.querySelector('.container').appendChild(para);
    return;
  }
  para.style.display = para.style.display === 'none' ? 'block' : 'none';
}

function resetbutton() {
  document.body.style.backgroundColor = '';
  if (headingEl) {
    headingEl.style.fontSize = '';
    headingEl.textContent = 'welcome to javascript lab';
  }
  if (inputEl) inputEl.value = '';
  const para = document.getElementById('textPara');
  if (para) para.remove();
}