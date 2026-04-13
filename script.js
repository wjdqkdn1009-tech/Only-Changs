const profiles = {
  son: {
    name: "손창현",
    rank: "등수: 1등선수",
    position: "포지션: 공격수",
    style: "플레이 스타일: 빠른 판단력과 강한 돌파력",
    intro: "소개: 팀의 핵심 공격 자원으로, 결정적인 순간에 흐름을 바꾸는 선수."
  },
  no: {
    name: "노재민",
    rank: "등수: 2등선수",
    position: "포지션: 미드필더",
    style: "플레이 스타일: 안정적인 경기 운영과 넓은 시야",
    intro: "소개: 팀의 밸런스를 잡아 주는 선수로, 공격과 수비를 자연스럽게 연결한다."
  },
  go: {
    name: "고유",
    rank: "등수: 3등선수",
    position: "포지션: 수비수",
    style: "플레이 스타일: 침착한 수비와 꾸준한 집중력",
    intro: "소개: 눈에 띄지는 않지만 팀을 지탱하는 묵묵한 활약이 강점인 선수."
  }
};

function showProfile(playerKey){
  const profile = profiles[playerKey];
  if (!profile) return;

  document.getElementById("profileName").textContent = profile.name;
  document.getElementById("profileRank").textContent = profile.rank;
  document.getElementById("profilePosition").textContent = profile.position;
  document.getElementById("profileStyle").textContent = profile.style;
  document.getElementById("profileIntro").textContent = profile.intro;

  document.getElementById("profileModal").style.display = "block";
}

function closeProfile(){
  document.getElementById("profileModal").style.display = "none";
}

window.onclick = function(event){
  const modal = document.getElementById("profileModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
