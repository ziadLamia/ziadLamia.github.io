document.addEventListener('DOMContentLoaded', function() {
    console.log("JS chargé ✅");

    document.querySelectorAll('.abstract-toggle').forEach(button => {
        button.addEventListener('click', function() {
            const abstract = this.closest('.abstract');
            abstract.classList.toggle('expanded');

            this.textContent = abstract.classList.contains('expanded')
                ? 'Hide Abstract'
                : 'Read Abstract';
        });
    });
});
