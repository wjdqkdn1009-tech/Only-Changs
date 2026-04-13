/* =========================
   선수별 상세 프로필 데이터
========================= */
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

/* =========================
   선수 클릭 시 프로필 팝업 열기
========================= */
function showProfile(playerKey){
  /* 선택한 선수 데이터 가져오기 */
  const profile = profiles[playerKey];

  /* 데이터가 없으면 종료 */
  if (!profile) return;

  /* 팝업 안에 선수 정보 넣기 */
  document.getElementById("profileName").textContent = profile.name;
  document.getElementById("profileRank").textContent = profile.rank;
  document.getElementById("profilePosition").textContent = profile.position;
  document.getElementById("profileStyle").textContent = profile.style;
  document.getElementById("profileIntro").textContent = profile.intro;

  /* 팝업 보이기 */
  document.getElementById("profileModal").style.display = "block";
}

/* =========================
   팝업 닫기
========================= */
function closeProfile(){
  /* 팝업 숨기기 */
  document.getElementById("profileModal").style.display = "none";
}

/* =========================
   팝업 바깥(배경) 클릭 시 닫기
========================= */
window.onclick = function(event){
  /* 팝업 전체 영역 가져오기 */
  const modal = document.getElementById("profileModal");

  /* 배경 클릭 시 팝업 닫기 */
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
