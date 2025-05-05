const allMenuLists = document.querySelectorAll('.menu-list');

allMenuLists.forEach(menuList => {
    menuList.addEventListener('mouseover', function (event) {
        const target = event.target.closest('.menu-card');
        if (target && menuList.contains(target)) {
            target.style.transform = 'scale(1.02)';
            target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        }
    });

    menuList.addEventListener('mouseout', function (event) {
        const target = event.target.closest('.menu-card');
        const related = event.relatedTarget;
        if (target && (!related || !target.contains(related))) {
            target.style.transform = 'scale(1)';
            target.style.boxShadow = 'none';
        }
    });
});

