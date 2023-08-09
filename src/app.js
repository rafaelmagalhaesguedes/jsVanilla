
const createHeader = () => {
    const header = document.createElement('header');
    header.style.border = '1px solid #000';
    header.style.marginBottom = '10px';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';

    const title = document.createElement('h1');
    title.innerText = 'Newspaper God News';
    title.style.fontSize = '2.5rem';
    title.style.fontWeight = '800';

    const menu = document.createElement('nav');
    const list = document.createElement('ul');
    list.style.listStyleType = 'none';
    list.style.display = 'flex';
    
    const home = document.createElement('li');
    home.innerText = 'Home';
    list.appendChild(home);

    const about = document.createElement('li');
    about.innerText = 'About';
    list.appendChild(about);

    const contact = document.createElement('li');
    contact.innerText = 'Contact';
    list.appendChild(contact);

    header.appendChild(title);
    menu.appendChild(list);
    header.appendChild(menu);
    
    return header;
}

const createSection = () => {
    const section = document.createElement('section');
    section.style.width = '70%';
    section.style.height = '300px';
    section.style.border = '1px solid #000';

    const title = document.createElement('h2');
    title.innerText = 'News';
    title.style.fontSize = '2rem';

    section.appendChild(title)

    return section;
};

const createAside = () => {
    const aside = document.createElement('aside');
    aside.style.width = '28%';
    aside.style.height = '300px';
    aside.style.border = '1px solid #000';

    const title = document.createElement('h2');
    title.innerText = 'Weather';
    title.style.fontSize = '2rem';
    
    aside.appendChild(title);

    return aside;
};

const createMain = () => {
    const main = document.createElement('main');
    main.classList.add('container');
    main.style.display = 'flex';
    main.style.justifyContent = 'space-between';

    const section = createSection();
    const aside = createAside();

    main.appendChild(section);
    main.appendChild(aside);
    return main;
};

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.style.backgroundColor = '#000';
    footer.style.width = '100%';
    footer.style.height = '50px';
    footer.style.color = '#fff';
    footer.style.marginTop = '20px';

    const infos = document.createElement('p');
    infos.innerText = 'Rafael M. Guedes';
    infos.style.padding = '15px';
    infos.style.boxSizing = 'border-box';

    footer.appendChild(infos);

    return footer;
};

const createPage = () => {
    const page = document.createElement('div');
    page.id = 'content';
    page.style.textAlign = 'center';
    page.style.width = '100%';
    page.style.margin = '0';
    page.style.padding = '0';
    return page;
};

const Main = () => {

    const page = createPage();

    const header = createHeader();

    const main = createMain();

    const footer = createFooter();

    page.appendChild(header);
    page.appendChild(main);
    page.appendChild(footer);

    document.body.appendChild(page);
};

window.onload = () => {
    Main();
};