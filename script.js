// Navigation Tab Panel Router
document.querySelectorAll('.menu-item').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.menu-item').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.view-panel').forEach(panel => panel.classList.add('hidden'));

        button.classList.add('active');
        const targetView = button.getAttribute('data-target');
        document.getElementById(`${targetView}-tab`).classList.remove('hidden');
    });
});

// THE OFFICIAL FIFA TOURNAMENT REAL-WORLD SCHEDULE (Strict ISO-8601 Format)
const tournamentDatabase = [
    // --- PAST MATCHES (Already Completed) ---
    { id: 101, group: "Group A", venue: "Estadio Azteca", homeTeam: "Mexico", homeFlag: "mx", homeScore: 2, awayTeam: "South Africa", awayFlag: "za", awayScore: 1, startTime: "2026-06-11T19:00:00Z" },
    { id: 102, group: "Group A", venue: "Guadalajara Stadium", homeTeam: "South Korea", homeFlag: "kr", homeScore: 0, awayTeam: "Czechia", awayFlag: "cz", awayScore: 2, startTime: "2026-06-12T02:00:00Z" },
    { id: 103, group: "Group B", venue: "Toronto Stadium", homeTeam: "Canada", homeFlag: "ca", homeScore: 1, awayTeam: "Bosnia", awayFlag: "ba", awayScore: 1, startTime: "2026-06-12T16:00:00Z" },
    { id: 104, group: "Group D", venue: "SoFi Stadium LA", homeTeam: "United States", homeFlag: "us", homeScore: 3, awayTeam: "Paraguay", awayFlag: "py", awayScore: 0, startTime: "2026-06-13T01:00:00Z" },
    { id: 105, group: "Group B", venue: "San Francisco Stadium", homeTeam: "Qatar", homeFlag: "qa", homeScore: 1, awayTeam: "Switzerland", awayFlag: "ch", awayScore: 1, startTime: "2026-06-13T19:00:00Z" },
    { id: 106, group: "Group C", venue: "MetLife Stadium", homeTeam: "Brazil", homeFlag: "br", homeScore: 1, awayTeam: "Morocco", awayFlag: "ma", awayScore: 1, startTime: "2026-06-13T22:00:00Z" },
    { id: 107, group: "Group C", venue: "Boston Stadium", homeTeam: "Haiti", homeFlag: "ht", homeScore: 0, awayTeam: "Scotland", homeFlag: "gb-sct", awayScore: 1, startTime: "2026-06-14T01:00:00Z" },
    { id: 108, group: "Group D", venue: "BC Place", homeTeam: "Australia", homeFlag: "au", homeScore: 2, awayTeam: "Türkiye", awayFlag: "tr", awayScore: 0, startTime: "2026-06-14T04:00:00Z" },
    { id: 109, group: "Group E", venue: "Houston Stadium", homeTeam: "Germany", homeFlag: "de", homeScore: 7, awayTeam: "Curaçao", awayFlag: "cw", awayScore: 1, startTime: "2026-06-14T17:00:00Z" },
    { id: 110, group: "Group F", venue: "Dallas Stadium", homeTeam: "Netherlands", homeFlag: "nl", homeScore: 2, awayTeam: "Japan", awayFlag: "jp", awayScore: 2, startTime: "2026-06-14T20:00:00Z" },

    // --- UPCOMING SCHEDULE (From Tonight onwards through Group Stage) ---
    { id: 125, group: "Group A", venue: "Atlanta Stadium", homeTeam: "Czechia", homeFlag: "cz", homeScore: null, awayTeam: "South Africa", awayFlag: "za", awayScore: null, startTime: "2026-06-18T22:00:00Z" },
    { id: 126, group: "Group B", venue: "Los Angeles Stadium", homeTeam: "Switzerland", homeFlag: "ch", homeScore: null, awayTeam: "Bosnia", awayFlag: "ba", awayScore: null, startTime: "2026-06-19T01:00:00Z" },
    { id: 127, group: "Group B", venue: "BC Place Vancouver", homeTeam: "Canada", homeFlag: "ca", homeScore: null, awayTeam: "Qatar", awayFlag: "qa", awayScore: null, startTime: "2026-06-19T04:00:00Z" },
    { id: 128, group: "Group A", venue: "Guadalajara Stadium", homeTeam: "Mexico", homeFlag: "mx", homeScore: null, awayTeam: "South Korea", awayFlag: "kr", awayScore: null, startTime: "2026-06-19T18:00:00Z" },
    { id: 129, group: "Group D", venue: "Seattle Stadium", homeTeam: "United States", homeFlag: "us", homeScore: null, awayTeam: "Australia", awayFlag: "au", awayScore: null, startTime: "2026-06-19T21:00:00Z" },
    { id: 130, group: "Group C", venue: "Boston Stadium", homeTeam: "Scotland", homeFlag: "gb-sct", homeScore: null, awayTeam: "Morocco", awayFlag: "ma", awayScore: null, startTime: "2026-06-20T00:00:00Z" },
    { id: 131, group: "Group C", venue: "Philadelphia Stadium", homeTeam: "Brazil", homeFlag: "br", homeScore: null, awayTeam: "Haiti", awayFlag: "ht", awayScore: null, startTime: "2026-06-20T03:00:00Z" },
    { id: 132, group: "Group D", venue: "San Francisco Stadium", homeTeam: "Türkiye", homeFlag: "tr", homeScore: null, awayTeam: "Paraguay", awayFlag: "py", awayScore: null, startTime: "2026-06-20T18:00:00Z" },
    { id: 133, group: "Group F", venue: "Houston Stadium", homeTeam: "Netherlands", homeFlag: "nl", homeScore: null, awayTeam: "Sweden", awayFlag: "se", awayScore: null, startTime: "2026-06-20T21:00:00Z" },
    { id: 134, group: "Group E", venue: "Toronto Stadium", homeTeam: "Germany", homeFlag: "de", homeScore: null, awayTeam: "Ivory Coast", awayFlag: "ci", awayScore: null, startTime: "2026-06-21T00:00:00Z" }
];
// HELPER: Converts ISO string into 12-Hour Nepal Standard Time (NST) strings
function formatToNepaliTime(startTimeStr) {
    const utcDate = new Date(startTimeStr);
    
    // Apply the exact +5:45 offset for Nepal Standard Time
    const nepaliDate = new Date(utcDate.getTime() + (5.75 * 60 * 60 * 1000));
    let hours = nepaliDate.getUTCHours();
    const minutes = nepaliDate.getUTCMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    const day = nepaliDate.getUTCDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[nepaliDate.getUTCMonth()];
    
    return {
        timeString: `${hours}:${minutes} ${ampm} NST`,
        dateString: `${month} ${day}, ${nepaliDate.getUTCFullYear()}`
    };
}

// UI GRID CARD LAYOUT BUILDER
function buildUiCard(match, displayStatus, isNearestFallback = false) {
    const timeProfile = formatToNepaliTime(match.startTime);
    let topBadgeElement = `<span class="time-stamp">${timeProfile.timeString}</span>`;
    
    let leftScoreValue = match.homeScore !== null ? match.homeScore : '-';
    let rightScoreValue = match.awayScore !== null ? match.awayScore : '-';
    let watchButtonMarkup = '';

    // Watch live action button markup is ONLY added when match is explicitly live or fallback next
    if (displayStatus === 'live') {
        const timeDelta = Math.floor((new Date() - new Date(match.startTime)) / 60000);
        const matchMinute = timeDelta > 90 ? 90 : (timeDelta < 1 ? 1 : timeDelta);
        topBadgeElement = `<span class="live-badge"><span class="pulse-dot"></span> LIVE ${matchMinute}'</span>`;
        
        watchButtonMarkup = `
            <a href="https://youtube.com" target="_blank" class="watch-live-btn active-stream">
                <i class="fa-solid fa-circle-play"></i> WATCH LIVE
            </a>
        `;
    } else if (isNearestFallback) {
        topBadgeElement = `<span class="live-badge" style="background:rgba(0, 240, 255, 0.15);color:var(--neon-cyan)">UPCOMING NEXT</span>`;
        watchButtonMarkup = `
            <a href="#" class="watch-live-btn locked-stream">
                <i class="fa-solid fa-lock"></i> STREAM UNAVAILABLE
            </a>
        `;
    } else if (displayStatus === 'past') {
        topBadgeElement = `<span class="live-badge" style="background:rgba(255,255,255,0.05);color:var(--text-dim)">FINAL</span>`;
    }

    let fCodeLeft = match.homeFlag;
    let fCodeRight = match.awayFlag;
    if (fCodeLeft === "gb-eng" || fCodeLeft === "gb-sct") fCodeLeft = "gb";
    if (fCodeRight === "gb-eng" || fCodeRight === "gb-sct") fCodeRight = "gb";

    return `
        <div class="match-card" ${isNearestFallback ? 'style="border-color: var(--neon-cyan); max-width: 450px; margin: 1.5rem 0;"' : ''}>
            <div class="card-meta">
                <span>${match.group} • ${match.venue}</span>
                ${topBadgeElement}
            </div>
            <div class="arena-row">
                <div class="team-column left-align">
                    
                        <img src="https://cloudflare.com{fCodeLeft}.svg" class="official-flag" alt="">
                        <span class="country-name">${match.homeTeam}</span>
                    </div>
                    <span class="score-digits ${displayStatus === 'upcoming' ? 'muted' : ''}">${leftScoreValue}</span>
                </div>
                <div class="vs-column"><span class="vs-text">VS</span></div>
                <div class="team-column right-align">
                    
                        <span class="country-name">${match.awayTeam}</span>
                        <img src="https://cloudflare.com{fCodeRight}.svg" class="official-flag" alt="">
                    </div>
                    <span class="score-digits ${displayStatus === 'upcoming' ? 'muted' : ''}">${rightScoreValue}</span>
                </div>
            </div>
            <div class="date-footer">📅 ${timeProfile.dateString}</div>
            ${isNearestFallback ? `<div style="color:var(--neon-cyan); font-weight:700; font-size:0.85rem; margin-top:1rem; text-align:center; letter-spacing:0.5px;">See you at match time!</div>` : ''}
            ${watchButtonMarkup}
        </div>
    `;
}

// TIMELINE AUTOMATION CORE ENGINE
function filterAndRenderDashboard() {
    const currentClockTime = new Date();
    
    const currentLiveList = [];
    const absoluteUpcomingList = [];
    const historicalPastList = [];
    let nearestUpcomingMatch = null;

    tournamentDatabase.forEach(match => {
        const matchKickingTime = new Date(match.startTime);
        const matchExpirationTime = new Date(matchKickingTime.getTime() + (105 * 60 * 1000));

        if (currentClockTime >= matchKickingTime && currentClockTime <= matchExpirationTime) {
            currentLiveList.push(buildUiCard(match, 'live'));
        } else if (currentClockTime < matchKickingTime) {
            absoluteUpcomingList.push(buildUiCard(match, 'upcoming'));
            if (!nearestUpcomingMatch || matchKickingTime < new Date(nearestUpcomingMatch.startTime)) {
                nearestUpcomingMatch = match;
            }
        } else {
            historicalPastList.push(buildUiCard(match, 'past'));
        }
    });

    const liveTargetNode = document.getElementById('live-container');
    if (currentLiveList.length === 0) {
        let fallbackHtml = `
            <div style="grid-column: 1 / -1; background: rgba(255,255,255,0.02); border: 1px dashed var(--border-soft); padding: 2.5rem; border-radius: 20px; text-align: left;">
                <h3 style="color: var(--neon-pink); font-size: 1.3rem; margin-bottom: 0.5rem; font-weight:800;">
                    <i class="fa-solid fa-triangle-exclamation"></i> Oops! No Active Live Matches Right Now
                </h3>
                <p style="color: var(--text-dim); font-size: 0.95rem; margin-bottom: 1.5rem;">
                    There are no live fixtures running according to the official FIFA calendar right now.
                </p>
        `;
        
        if (nearestUpcomingMatch) {
            fallbackHtml += `
                <div style="border-top: 1px solid var(--border-soft); padding-top: 1.5rem;">
                    <p style="color: var(--text-pure); font-size: 0.9rem; font-weight: 600; margin-bottom: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">
                        🎯 Nearest Upcoming Match:
                    </p>
                    ${buildUiCard(nearestUpcomingMatch, 'upcoming', true)}
                </div>
            `;
        }
        fallbackHtml += `</div>`;
        liveTargetNode.innerHTML = fallbackHtml;
    } else {
        liveTargetNode.innerHTML = currentLiveList.join('');
    }

    document.getElementById('upcoming-container').innerHTML = absoluteUpcomingList.join('');
    document.getElementById('past-container').innerHTML = historicalPastList.reverse().join('');
}

// Poll database rules every 10 seconds
setInterval(filterAndRenderDashboard, 10000);
filterAndRenderDashboard();
