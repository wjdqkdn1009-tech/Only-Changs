/* =========================
   선수별 상세 프로필 데이터
========================= */
const profiles = {
  son: {
    name: "손창현",
    rank: "등수: 1등선수",
    position: "포지션: No.1 에이스",
    style: "플레이 스타일: 압도적인 존재감과 치명적인 승부 감각",
    intro: "소개: 눈빛 하나로 분위기를 장악하는 팀의 No.1. 강렬한 임팩트와 확실한 결과로 언제나 중심에 서는 선수."
  },
  no: {
    name: "노재민",
    rank: "등수: 2등선수",
    position: "포지션: 분위기 메이커",
    style: "플레이 스타일: 세련된 운영과 안정적인 리듬 조율",
    intro: "소개: 부드러운 미소 뒤에 숨겨진 냉정한 판단력. 편안하게 다가오지만 끝내 가장 깊게 기억되는 선수."
  },
  go: {
    name: "고유",
    rank: "등수: 3등선수",
    position: "포지션: 반전의 히든카드",
    style: "플레이 스타일: 조용한 카리스마와 묵직한 한 방",
    intro: "소개: 말보다 결과로 증명하는 스타일. 조용히 흐름을 읽고 결정적인 순간 반드시 존재감을 남기는 선수."
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

  /* 팝업 전체 영역 가져오기 */
  const modal = document.getElementById("profileModal");

  /* 팝업 보이기 */
  modal.style.display = "block";
}

/* =========================
   팝업 닫기
========================= */
function closeProfile(){
  /* 팝업 전체 영역 가져오기 */
  const modal = document.getElementById("profileModal");

  /* 팝업 숨기기 */
  modal.style.display = "none";
}

/* =========================
   팝업 바깥(배경) 클릭 시 닫기
========================= */
window.addEventListener("click", function(event){
  /* 팝업 전체 영역 가져오기 */
  const modal = document.getElementById("profileModal");

  /* 배경(검정 영역) 클릭 시 닫기 */
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
