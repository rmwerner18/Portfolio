const projectDivs = document.querySelectorAll('.project')
const frontendLink = document.getElementById('frontend-link')
const backendLink = document.getElementById('backend-link')
const projectName = document.getElementById('name')

const projects = {
    1: {
        name: 'SONGIFY',
        frontend: 'https://github.com/rmwerner18/songify-client',
        backend: 'https://github.com/rmwerner18/songify-api'
    },
    2: {
        name: 'UDEMY EMAIL PROJECT',
        frontend: 'https://github.com/rmwerner18/udemy-email-project/tree/main/client',
        backend: 'https://github.com/rmwerner18/udemy-email-project'
    },
    3: {
        name: 'SOME TRAILS',
        frontend: 'https://github.com/rmwerner18/some_trails_client',
        backend: 'https://github.com/rmwerner18/some_trails_api'
    },
    4: {
        name: 'TWITTER CLOUD',
        frontend: 'https://github.com/rmwerner18/twitter_project_frontend',
        backend: 'https://github.com/rmwerner18/twitter_project_backend'
    }
}

projectDivs.forEach(project => {
    project.addEventListener('click',() => {
        removeActiveClasses()
        project.classList.add('active')

        frontendLink.setAttribute('href', projects[project.id].frontend)
        backendLink.setAttribute('href', projects[project.id].backend)
        projectName.innerText = projects[project.id].name
    })
})

const removeActiveClasses = () => {
    projectDivs.forEach(project => {
        project.classList.remove('active')
    })
}