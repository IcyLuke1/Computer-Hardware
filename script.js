document.addEventListener("DOMContentLoaded", () => {
    const showModal = (component, description, additionalInfo) => {
        const modal = document.getElementById("modal");
        const modalTitle = modal.querySelector(".modal-title");
        const modalBody = modal.querySelector(".modal-body");

        modalTitle.innerText = component;
        modalBody.innerHTML = `<p>${description}</p><p><strong>More Info:</strong> ${additionalInfo}</p>`;

        modal.style.display = "block";
    };

    const closeModal = () => {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    };

    document.querySelector(".modal-close").addEventListener("click", closeModal);
    window.addEventListener("click", (event) => {
        const modal = document.getElementById("modal");
        if (event.target == modal) {
            closeModal();
        }
    });
});