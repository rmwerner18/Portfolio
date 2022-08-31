const projects = document.querySelectorAll('.project')

projects.forEach(project => {
    project.addEventListener('click',() => {
        removeActiveClasses()
        project.classList.add('active')
    })
})

const removeActiveClasses = () => {
    projects.forEach(project => {
        project.classList.remove('active')
    })
}