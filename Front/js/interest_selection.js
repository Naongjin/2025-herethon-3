const tags = document.querySelectorAll('.tag');

const submitBtn = document.getElementById("submit_btn");
const tagButtons = document.querySelectorAll(".tag");

tagButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("selected");

    const selectedCount = document.querySelectorAll(".tag.selected").length;

    if (selectedCount === 0) {
      submitBtn.textContent = "관심사 선택 후 추천 받기";
      submitBtn.style.backgroundColor = "#D9D9D9";
      submitBtn.style.color = "#000000";      
    } else {
      submitBtn.textContent = `${selectedCount}개 선택 완료! 추천 받기`;
      submitBtn.style.backgroundColor = "#2B66D0";
      submitBtn.style.color = "#fff";
    }
  });
});