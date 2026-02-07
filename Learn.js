// cookieを取得
function getCookie(name) {
  const value = document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='));
  return value ? JSON.parse(decodeURIComponent(value.split('=')[1])) : [];
}

// cookieを保存
function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(JSON.stringify(value)) + '; max-age=31536000';
}

// 初期データ取得
let studyLog = getCookie('studyLog');

// 表示処理
function render() {
  const list = document.getElementById('logList');
  list.innerHTML = '';

  studyLog.forEach((log, index) => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${log.date}</td>
      <td>${log.subject}</td>
      <td>${log.time}</td>
      <td><button onclick="removeLog(${index})">削除</button></td>
    `;

    list.appendChild(tr);
  });
}

// 追加
function addLog() {
  const date = document.getElementById('date').value;
  const subject = document.getElementById('subject').value;
  const time = document.getElementById('time').value;

  if (!date || !subject || !time) {
    alert('すべて入力してください');
    return;
  }

  studyLog.push({
    id: Date.now(),
    date: date,
    subject: subject,
    time: time
  });

  setCookie('studyLog', studyLog);
  render();

  // 入力欄クリア
  document.getElementById('subject').value = '';
  document.getElementById('time').value = '';
}

// 削除
function removeLog(index) {
  studyLog.splice(index, 1);
  setCookie('studyLog', studyLog);
  render();
}

// 初回表示
render();
