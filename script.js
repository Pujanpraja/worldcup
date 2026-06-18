// Tab Menu Navigation Switcher
document.querySelectorAll('.menu-item').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.menu-item').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.view-panel').forEach(p => p.classList.add('hidden'));
        btn.classList.add('active');
        document.getElementById(`${btn.getAttribute('data-target')}-tab`).classList.remove('hidden');
    });
});

// Authoritative FIFA World Cup 2026 Database
const db = [
    { id: 1, grp: "Group A", venue: "Estadio Azteca", home: "Mexico", flag1: "mx", score1: 2, away: "South Africa", flag2: "za", score2: 1, date: "2026-06-11", hr: 16, min: 0 },
    { id: 2, grp: "Group A", venue: "Guadalajara Stadium", home: "South Korea", flag1: "kr", score1: 0, away: "Czechia", flag2: "cz", score2: 2, date: "2026-06-12", hr: 1, min: 0 },
    { id: 3, grp: "Group B", venue: "Toronto Stadium", home: "Canada", flag1: "ca", score1: 1, away: "Bosnia", flag2: "ba", score2: 1, date: "2026-06-12", hr: 15, min: 0 },
    { id: 4, grp: "Group D", venue: "SoFi Stadium LA", home: "United States", flag1: "us", score1: 3, away: "Paraguay", flag2: "py", score2: 0, date: "2026-06-13", hr: 0, min: 0 },
    { id: 5, grp: "Group B", venue: "San Francisco Stadium", home: "Qatar", flag1: "qa", score1: 1, away: "Switzerland", flag2: "ch", score2: 1, date: "2026-06-13", hr: 18, min: 0 },
    { id: 6, grp: "Group C", venue: "MetLife Stadium NY", home: "Brazil", flag1: "br", score1: 1, away: "Morocco", flag2: "ma", score2: 1, date: "2026-06-13", hr: 21, min: 0 },
    { id: 7, grp: "Group C", venue: "Boston Stadium", home: "Haiti", homeScore: 0, homeFlag: "ht", score1: 0, away: "Scotland", flag2: "gb-sct", score2: 1, date: "2026-06-14", hr: 0, min: 0 },
    { id: 8, grp: "Group D", venue: "BC Place Vancouver", home: "Australia", flag1: "au", score1: 2, away: "Türkiye", flag2: "tr", score2: 0, date: "2026-06-14", hr: 3, min: 0 },
    { id: 9, grp: "Group E", venue: "Houston Stadium", home: "Germany", flag1: "de", score1: 7, away: "Curaçao", flag2: "cw", score2: 1, date: "2026-06-14", hr: 16, min: 0 },
    { id: 10, grp: "Group F", venue: "Dallas Stadium", home: "Netherlands", flag1: "nl", score1: 2, away: "Japan", flag2: "jp", score2: 2, date: "2026-06-14", hr: 19, min: 0 },
    { id: 11, grp: "Group E", venue: "Philadelphia Stadium", home: "Ivory Coast", flag1: "ci", score1: 1, away: "Ecuador", flag2: "ec", score2: 0, date: "2026-06-14", hr: 22, min: 0 },
    { id: 12, grp: "Group F", venue: "Monterrey Stadium", home: "Sweden", flag1: "se", score1: 5, away: "Tunisia", flag2: "tn", score2: 1, date: "2026-06-15", hr: 1, min: 0 },
    { id: 13, grp: "Group H", venue: "Atlanta Stadium", home: "Spain", flag1: "es", score1: 0, away: "Cabo Verde", flag2: "cv", score2: 0, date: "2026-06-15", hr: 15, min: 0 },
    { id: 14, grp: "Group G", venue: "Seattle Stadium", home: "Belgium", flag1: "be", score1: 1, away: "Egypt", flag2: "eg", score2: 1, date: "2026-06-15", hr: 18, min: 0 },
    { id: 15, grp: "Group H", venue: "Miami Stadium", home: "Saudi Arabia", flag1: "sa", score1: 1, away: "Uruguay", flag2: "uy", score2: 1, date: "2026-06-15", hr: 21, min: 0 },
    { id: 16, grp: "Group G", venue: "Los Angeles Stadium", home: "Iran", flag1: "ir", score1: 2, away: "New Zealand", flag2: "nz", score2: 2, date: "2026-06-16", hr: 0, min: 0 },
    { id: 17, grp: "Group I", venue: "MetLife Stadium NY", home: "France", flag1: "fr", score1: 3, away: "Senegal", flag2: "sn", score2: 1, date: "2026-06-16", hr: 18, min: 0 },
    { id: 18, grp: "Group I", venue: "Boston Stadium", home: "Iraq", flag1: "iq", score1: 1, away: "Norway", flag2: "no", score2: 4, date: "2026-06-16", hr: 21, min: 0 },
    { id: 19, grp: "Group J", venue: "Kansas City Stadium", home: "Argentina", flag1: "ar", score1: 3, away: "Algeria", flag2: "dz", score2: 0, date: "2026-06-17", hr: 0, min: 0 },
    { id: 20, grp: "Group J", venue: "San Francisco Stadium", home: "Austria", flag1: "at", score1: 3, away: "Jordan", flag2: "jo", score2: 1, date: "2026-06-17", hr: 3, min: 0 },
    { id: 21, grp: "Group K", venue: "Houston Stadium", home: "Portugal", flag1: "pt", score1: 1, away: "DR Congo", flag2: "cd", score2: 1, date: "2026-06-17", hr: 16, min: 0 },
    { id: 22, grp: "Group L", venue: "Dallas Stadium", home: "England", flag1: "gb-eng", score1: 4, away: "Croatia", flag2: "hr", score2: 2, date: "2026-06-17", hr: 19, min: 0 },
    { id: 23, grp: "Group L", venue: "Toronto Stadium", home: "Ghana", flag1: "gh", score1: 1, away: "Panama", flag2: "pa", score2: 0, date: "2026-06-17", hr: 22, min: 0 },
    { id: 24, grp: "Group K", venue: "Mexico City Stadium", home: "Uzbekistan", flag1: "uz", score1: 1, away: "Colombia", flag2: "co", score2: 3, date: "2026-06-18", hr: 1, min: 0 },
    { id: 25, grp: "Group A", venue: "Atlanta Stadium", home: "Czechia", flag1: "cz", score1: null, away: "South Africa", flag2: "za", score2: null, date: "2026-06-18", hr: 16, min: 0 },
    { id: 26, grp: "Group B", venue: "Los Angeles Stadium", home: "Switzerland", flag1: "ch", score1: null, away: "Bosnia", flag2: "ba", score2: null, date: "2026-06-18", hr: 19, min: 0 },
    { id: 27, grp: "Group B", venue: "BC Place Vancouver", home: "Canada", flag1: "ca", score1: null, away: "Qatar", flag2: "qa", score2: null, date: "2026-06-18", hr: 22, min: 0 },
    { id: 28, grp: "Group A", venue: "Guadalajara Stadium", home: "Mexico", flag1: "mx", score1: null, away: "South Korea", flag2: "kr", score2: null, date: "2026-06-19", hr: 18, min: 0 },
    { id: 29, grp: "Group D", venue: "Seattle Stadium", home: "United States", flag1: "us", score1: null, away: "Australia", flag2: "au", score2: null, date: "2026-06-19", hr: 21, min: 0 }
];

// Time Translation Helper to Precise 12-Hour NST Formatting
function toNST(item) {
    const p = item.date.split('-');
    const utc = new Date(Date.UTC(parseInt(p[0]), parseInt(p[1]) - 1, parseInt(p[2]), item.hr, item.min, 0));
    const nst = new Date(utc.getTime() + (5.75 * 60 * 60 * 1000));
    let hrs = nst.getUTCHours();
    const mins = nst.getUTCMinutes().toString().padStart(2, '0');
    const ampm = hrs >= 12 ? 'PM' : 'AM';
    hrs = hrs % 12 ? hrs % 12 : 12;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return {
        obj: utc,
        time: `${hrs}:${mins} ${ampm} NST`,
        date: `${months[nst.getUTCMonth()]} ${nst.getUTCDate()}, ${nst.getUTCFullYear()}`
    };
}
// Render Markup Component Card Factory
function renderCard(m, status, isNext = false) {
    const t = toNST(m);
    let badge = `<span class="time-stamp">${t.time}</span>`;
    let s1 = m.score1 !== null ? m.score1 : '-';
    let s2 = m.score2 !== null ? m.score2 : '-';
    let btn = '';

    if (status === 'live') {
        const diff = Math.floor((new Date() - t.obj) / 60000);
        badge = `<span class="live-badge"><span class="pulse-dot"></span> LIVE ${diff > 90 ? 90 : (diff < 1 ? 1 : diff)}'</span>`;
        btn = `<a href="https://youtube.com" target="_blank" class="watch-live-btn active-stream"><i class="fa-solid fa-circle-play"></i> WATCH LIVE</a>`;
    } else if (isNext) {
        badge = `<span class="live-badge" style="background:rgba(0,240,255,0.15);color:var(--neon-cyan)">UPCOMING NEXT</span>`;
        btn = `<a href="#" class="watch-live-btn locked-stream"><i class="fa-solid fa-lock"></i> STREAM UNAVAILABLE</a>`;
    } else if (status === 'past') {
        badge = `<span class="live-badge" style="background:rgba(255,255,255,0.05);color:var(--text-dim)">FINAL</span>`;
    }

    let c1 = (m.flag1 === "gb-eng" || m.flag1 === "gb-sct") ? "gb" : m.flag1;
    let c2 = (m.flag2 === "gb-eng" || m.flag2 === "gb-sct") ? "gb" : m.flag2;

    return `
        <div class="match-card" ${isNext ? 'style="border-color: var(--neon-cyan); max-width: 450px; margin: 1.5rem 0;"' : ''}>
            <div class="card-meta"><span>${m.grp} • ${m.venue}</span>${badge}</div>
            <div class="arena-row">
                <div class="team-column left-align">
                    
                        <img src="https://cloudflare.com{c1}.svg" class="official-flag" alt="">
                        <span class="country-name">${m.home}</span>
                    </div>
                    <span class="score-digits ${status === 'upcoming' ? 'muted' : ''}">${s1}</span>
                </div>
                <div class="vs-column"><span class="vs-text">VS</span></div>
                <div class="team-column right-align">
                    
                        <span class="country-name">${m.away}</span>
                        <img src="https://cloudflare.com{c2}.svg" class="official-flag" alt="">
                    </div>
                    <span class="score-digits ${status === 'upcoming' ? 'muted' : ''}">${s2}</span>
                </div>
            </div>
            <div class="date-footer">📅 ${t.date}</div>
            ${isNext ? `<div style="color:var(--neon-cyan); font-weight:700; font-size:0.85rem; margin-top:1rem; text-align:center; letter-spacing:0.5px;">See you at match time!</div>` : ''}
            ${btn}
        </div>
    `;
}

// Global Core Processing Layout Runtime Engine
function runEngine() {
    const now = new Date().getTime();
    const liveArr = [], upArr = [], pastArr = [];
    let nextMatch = null;

    db.forEach(m => {
        const start = toNST(m).obj.getTime();
        const end = start + (105 * 60 * 1000);

        if (now >= start && now <= end) {
            liveArr.push(renderCard(m, 'live'));
        } else if (now < start) {
            upArr.push(renderCard(m, 'upcoming'));
            if (!nextMatch || start < toNST(nextMatch).obj.getTime()) nextMatch = m;
        } else {
            pastArr.push(renderCard(m, 'past'));
        }
    });

    const liveBox = document.getElementById('live-container');
    if (liveArr.length === 0) {
        let emptyHtml = `
            <div style="grid-column:1/-1; background:rgba(255,255,255,0.02); border:1px dashed var(--border-soft); padding:2.5rem; border-radius:20px;">
                <h3 style="color:var(--neon-pink); font-size:1.3rem; margin-bottom:0.5rem; font-weight:800;"><i class="fa-solid fa-triangle-exclamation"></i> Oops! No Active Live Matches Right Now</h3>
                <p style="color:var(--text-dim); font-size:0.95rem; margin-bottom:1.5rem;">There are no live fixtures running according to the official FIFA calendar right now.</p>
        `;
        if (nextMatch) {
            emptyHtml += `<div style="border-top:1px solid var(--border-soft); padding-top:1.5rem;"><p style="color:var(--text-pure); font-size:0.9rem; font-weight:600; margin-bottom:0.8rem; text-transform:uppercase;">🎯 Nearest Upcoming Match:</p>${renderCard(nextMatch, 'upcoming', true)}</div>`;
        }
        liveBox.innerHTML = emptyHtml + `</div>`;
    } else {
        liveBox.innerHTML = liveArr.join('');
    }

    document.getElementById('upcoming-container').innerHTML = upArr.join('');
    document.getElementById('past-container').innerHTML = pastArr.reverse().join('');
}

// Clock Loop Synchronization (Ticks every 10 seconds)
setInterval(runEngine, 10000);
runEngine();
