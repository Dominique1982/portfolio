
        function toggleCaseStudy(id) {
            const el = document.getElementById(id);
            if (!el) return;
            el.classList.toggle('open');
            if (el.classList.contains('open')) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        