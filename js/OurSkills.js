//skills selector
let ourSkills = document.querySelector('.scills');
window.onscroll = function() { // اول ما يحصل اسكرول
    // skills offset top
    // let skillsOffsetTop = ourSkills.offsetTop;
    //skills outer height
    // let skillsOuterHeight = ourSkills.offsetHeight;
    // window height
    // let windowHeight = this.innerHeight;
    //window scrollTop
    let windowScrollTop = this.pageYOffset;
    // this.console.log(windowScrollTop);

    if (windowScrollTop > 700) {
        //   this.console.log('skills section');

        let allkills = document.querySelectorAll('.skill-box .skill-progress span');

        allkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });
    }
};