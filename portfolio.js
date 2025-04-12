function initPortfolio() {
    console.log("Welcome to John Ariel's Portfolio!");
    createAllPages();
    setupNavigation();
    showPage('about');
}

function createAllPages() {
    const contentContainer = document.querySelector('.content');
    contentContainer.appendChild(createAboutPage());
    contentContainer.appendChild(createExperiencePage());
    contentContainer.appendChild(createSkillsPage());
    contentContainer.appendChild(createEducationPage());
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
}

function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            showPage(page);
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    const pageToShow = document.getElementById(`${pageId}-page`);
    if (pageToShow) {
        pageToShow.style.display = 'block';
    }
}

function createAboutPage() {
    const page = document.createElement('div');
    page.className = 'page';
    page.id = 'about-page';
    const heading = document.createElement('h2');
    heading.textContent = 'About Me';
    const content = document.createElement('p');
    content.textContent = 'Hello! I am John Ariel A. David, a 22-year-old resident of San Jose, San Pablo City. My goal is to complete college and secure a promising future.';
    page.appendChild(heading);
    page.appendChild(content);
    return page;
}

function createExperiencePage() {
    const page = document.createElement('div');
    page.className = 'page';
    page.id = 'experience-page';
    const heading = document.createElement('h2');
    heading.textContent = 'Work Experience';
    const experienceTitle = document.createElement('p');
    experienceTitle.innerHTML = '<strong>Electrician Helper (2023)</strong>';
    const experienceList = document.createElement('ul');
    const item1 = document.createElement('li');
    item1.textContent = '4 months experience in a hospital project in San Pablo';
    const item2 = document.createElement('li');
    item2.textContent = 'Electrical conduit installation and wiring';
    experienceList.appendChild(item1);
    experienceList.appendChild(item2);
    page.appendChild(heading);
    page.appendChild(experienceTitle);
    page.appendChild(experienceList);
    return page;
}

function createSkillsPage() {
    const page = document.createElement('div');
    page.className = 'page';
    page.id = 'skills-page';
    const heading = document.createElement('h2');
    heading.textContent = 'Personal Skills';
    const skillsList = document.createElement('ul');
    const skills = ['Creativity', 'Adaptability', 'Technical Proficiency', 'Critical Thinking'];
    skills.forEach(skill => {
        const item = document.createElement('li');
        item.textContent = skill;
        skillsList.appendChild(item);
    });
    page.appendChild(heading);
    page.appendChild(skillsList);
    return page;
}

function createEducationPage() {
    const page = document.createElement('div');
    page.className = 'page';
    page.id = 'education-page';
    const heading = document.createElement('h2');
    heading.textContent = 'Educational Background';
    const educationList = document.createElement('ul');
    const educationItems = [
        'College: Pamantasan ng Lungsod ng San Pablo, BSIT 2nd Year (2025)',
        'Senior High School: Arellano University (2021)',
        'High School: Arellano University (2019)',
        'Elementary: Muzon Elementary School (2015)'
    ];
    educationItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.split(':')[0]}:</strong> ${item.split(':')[1]}`;
        educationList.appendChild(li);
    });
    page.appendChild(heading);
    page.appendChild(educationList);
    return page;
}

document.addEventListener('DOMContentLoaded', initPortfolio);