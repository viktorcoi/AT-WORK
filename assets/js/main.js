document.addEventListener("DOMContentLoaded", () => {

    // Смена секций (Активные/Архив/Черновики)

    var ChekActive = document.getElementById('active');
    var ChekArchive = document.getElementById('archive');
    var CheckNote = document.getElementById('note');

    var SectionActive = document.getElementById('s-active');
    var SectionArchive = document.getElementById('s-archive');
    var SectionNote = document.getElementById('s-note');

    ChekActive.onchange = () => {
        CheckerSide(ChekActive, SectionActive);
    }
    ChekArchive.onchange = () => {
        CheckerSide(ChekArchive, SectionArchive);
    }
    CheckNote.onchange = () => {
        CheckerSide(CheckNote, SectionNote);
    }

    const CheckerSide = (box, section) => {
        var ArraySections = [SectionActive, SectionArchive, SectionNote];
        var ArraySection = [ChekActive.parentElement, ChekArchive.parentElement, CheckNote.parentElement]
        if (box.checked) {
            for (i=0; i<ArraySections.length; i++) {
                ArraySections[i].classList.add("d-none")
                ArraySection[i].classList.remove("choose")
                if (section == ArraySections[i]) {
                    ArraySection[i].classList.add("choose")
                }
            }
            section.classList.remove("d-none");
        } 
    }

    // Кастомный селектор

    var SelectorAd = document.querySelector('.count-ad').querySelector('.head-selector');
    var SelectorSort = document.querySelector('.for-sort').querySelector('.head-selector');
    var optionsAd = SelectorAd.nextElementSibling.querySelectorAll("p");
    var optionsSort = SelectorSort.nextElementSibling.querySelectorAll("p");

    const toggleSelector = (el) => {
        el.nextElementSibling.classList.toggle("open")
        el.querySelector('img').classList.toggle("rot-180")
    }

    const closeSelector = (el) => {
        el.nextElementSibling.classList.remove("open")
        el.querySelector('img').classList.remove("rot-180")
    }

    const chooseOption = (el, array) => {
        array.onclick = (e) => {
            el.querySelector('input').value = e.target.innerHTML
            el.querySelector('input').style.width = ((el.querySelector('input').value.length + 1) * 7) + 'px'
            toggleSelector(el);
            sortData(items);
            slider();
        }
    }

    SelectorAd.onclick = () => {
        toggleSelector(SelectorAd);
    }
    
    optionsAd.forEach((option) => {
        chooseOption(SelectorAd, option);
    })

    SelectorSort.onclick = () => {
        toggleSelector(SelectorSort);
    }
    
    optionsSort.forEach((option) => {
        chooseOption(SelectorSort, option);
    })
    
    // закрытие "летающих" элентов при клике вне

    window.addEventListener('click', (e) => {
        const target = e.target
        if (!target.closest(".count-ad > .head-selector") && !target.closest(".count-ad > .optionals > p")) {
            closeSelector(SelectorAd);
        }
        if (!target.closest(".for-sort > .head-selector") && !target.closest(".for-sort > .optionals > p")) {
            closeSelector(SelectorSort);
        }
        if (!target.closest("#three-dots ~ div > p") && !target.closest("#three-dots")) {
            document.querySelectorAll("#three-dots").forEach((btn) => {
                btn.nextElementSibling.classList.remove("open");
            })
        }
    });

    // Настройка подключенного слайдера

    const slider = () => {
        $(".vertical-center").slick({
            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            variableWidth: true,
            centerMode: true,
            arrows: false,
        });
    }

    sortData(items);
    slider();
});
