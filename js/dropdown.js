window.onload = () => {
    const toggler=document.getElementById('toggle-dropdown');
    const toggleSearch=document.getElementById('toggle-search');
    localStorage.setItem('dropdown','off');
    localStorage.setItem('searchDropdown','off');
    toggler.addEventListener('click',()=>{
        const dropdown = localStorage.getItem('dropdown');
        const navDropdown=document.querySelector('.nav-dropdown')
        if (dropdown == 'off') {
            localStorage.setItem('dropdown','on');
            navDropdown.setAttribute('class','nav-dropdown dropdown');
        } else {
            localStorage.setItem('dropdown','off');
            navDropdown.setAttribute('class','nav-dropdown');
        }
    });


    toggleSearch.addEventListener('click',()=>{
        const dropdown = localStorage.getItem('searchDropdown');
        const searchDropDown=document.querySelector('.search-dropdown')
        if (dropdown == 'off') {
            localStorage.setItem('searchDropdown','on');
            searchDropDown.setAttribute('class','search-dropdown searchDropdownHeight');
        } else {
            localStorage.setItem('searchDropdown','off');
            searchDropDown.setAttribute('class','search-dropdown');
        }
    });

}

