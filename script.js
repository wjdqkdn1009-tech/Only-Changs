/* =========================
   선수별 상세 프로필 데이터
========================= */
const profiles = {
  son: {
    name: "손창현",
    rank: "등수: 1등",
    position: "포지션: No.1 에이스,신의 손",
    style: "플레이 스타일: 압도적인 존재감과 치명적인 승부 감각",
    intro: "소개: 드넓은 초원을 뛰어다니는 야수왕과 같은 강렬한 모습과 인상으로 눈빛 하나만을 이용해 분위기를 장악하는 업계의 No.1. 신의 손을 이용한 화려함과 강렬한 임팩트을 이용한 확실한 결과로 언제나 중심에 서는 선수."
  },
  no: {
    name: "노재민",
    rank: "등수: 2등",
    position: "포지션: 분위기 메이커,공방일체",
    style: "플레이 스타일: 세련된 운영과 강력한 존재감",
    intro: "소개: 무리를 벗어나 고고하게 살아온 한 마리의 늑대 같은 모습으로 부드러운 미소 뒤에 숨겨진 냉정한 판단력으로 편안하게 다가오지만 끝내 가장 깊게 기억되는 업게의 No.2.흑인 특유의 강력함으로 모두의 선망을 한 몸에 받는 선수"
  },
  go: {
    name: "고유",
    rank: "등수: 3등",
    position: "포지션: 반전의 히든카드",
    style: "플레이 스타일: 조용한 카리스마와 묵직한 한 방",
    intro: "소개: 푸른 하늘을 비상하는 매와같은 날카로움과 에리한 모습으로 마치 먹이를 사냥하는 매가 보여주듯 말보다 결과로 증명하는 스타일. 조용히 흐름을 읽고 결정적인 순간 반드시 행동해 존재감을 남기는 선수."
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
