const d = document,
    ls = localStorage;
export default function darkTheme(btn, classDark) {
    const $themeButton = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]")
        // $backgroundKeybord = d.querySelectorAll("[data-background-white]");
    // console.log($backgroundKeybord);
    console.log($selectors)

    let moon = '🌙',
        sun = '☀️'
    console.log(moon)
    const lightMode = function () {
        $selectors.forEach(el => el.classList.add(classDark)),
            // $backgroundKeybord.forEach(el => el.classList.add('background-white'))
            $themeButton.textContent = sun;
        ls.setItem('theme', 'light');
    }

    const darkMode = function () {
        $selectors.forEach(el => el.classList.remove(classDark)),
            // $backgroundKeybord.forEach(el => el.classList.remove('background-white')),
            $themeButton.textContent = moon;
        ls.setItem('theme', 'dark');
    }

    d.addEventListener('click', e => {
        if (e.target.matches(btn)) {
            if ($themeButton.textContent === moon) {
                // modo oscuro
                lightMode();
            } else {
                // modo light
                darkMode()
            }
        }
    });

    d.addEventListener('DOMContentLoaded', (e) => {
        // Primera vez el tema por defecto establecido es light
        if (ls.getItem('theme') === null) ls.setItem('theme', 'light');
        if (ls.getItem('theme') === 'light') lightMode();
        if (ls.getItem('theme') === 'dark') darkMode();
    });
}
