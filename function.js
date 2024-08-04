// script.js
document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.gallery .card img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close');
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');
    let currentIndex = 0;

    const showModal = (index) => {
        console.log('Showing modal for index:', index);  
        modal.style.display = "block";
        modalImg.src = thumbnails[index].src;
        currentIndex = index;
    };

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            console.log('Thumbnail clicked:', index); 
            showModal(index);
        });
    });

    closeModal.addEventListener('click', () => {
        console.log('Closing modal');  // Debug log
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            console.log('Window click, closing modal');  
            modal.style.display = "none";
        }
    });

    const showPrevImage = () => {
        console.log('Showing previous image');  
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
        showModal(currentIndex);
    };

    const showNextImage = () => {
        console.log('Showing next image');  
        currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
        showModal(currentIndex);
    };

    arrowLeft.addEventListener('click', showPrevImage);
    arrowRight.addEventListener('click', showNextImage);

    document.addEventListener('keydown', (event) => {
        if (modal.style.display === "block") {
            if (event.key === 'ArrowLeft') {
                showPrevImage();
            } else if (event.key === 'ArrowRight') {
                showNextImage();
            } else if (event.key === 'Escape') {
                modal.style.display = "none";
            }
        }
    });
});
