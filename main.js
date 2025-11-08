    const viewInvite = document.getElementById("viewInvite");
    const overlay = document.querySelector(".transition-overlay");

    viewInvite.addEventListener("click", () => {
      overlay.classList.add("active");
      setTimeout(() => {
        window.location.href = "daftar.html";
      }, 700); 
    });
