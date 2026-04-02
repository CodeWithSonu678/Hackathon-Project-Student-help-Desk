const hideNavBtn = document.getElementById('hide-nav');
const outerNav = document.querySelector('.outer-dash-nav');
const toggleNav = document.querySelector('.toggle-dash-nav');

if (hideNavBtn && outerNav && toggleNav) {
  hideNavBtn.addEventListener('click', () => {
    outerNav.style.display = 'none';
    toggleNav.style.display = 'flex';
  });
}

if (window.innerWidth < 768) {
  if (outerNav && toggleNav) {
    toggleNav.addEventListener('click', () => {
      outerNav.style.display = 'flex';
      toggleNav.style.display = 'none';
    });
  }
}

if (window.innerWidth > 768) {
  if (toggleNav && outerNav) {
    toggleNav.addEventListener('mouseenter', () => {
      outerNav.style.display = 'flex';
      toggleNav.style.display = 'none';
    });
  }

  if (outerNav && toggleNav) {
    outerNav.addEventListener('mouseleave', () => {
      outerNav.style.display = 'none';
      toggleNav.style.display = 'flex';
    });
  }
}


const personalContent = document.querySelector('.p-outer');
const familyContent = document.querySelector('.f-outer');
const academicContent = document.querySelector('.a-outer');

const studentInfos = document.querySelectorAll('#std-profile');
const familyInfos = document.querySelectorAll('#std-family');
const academicInfos = document.querySelectorAll('#std-academics');

function setActiveTab(activeType) {
  studentInfos.forEach(tab => tab.style.backgroundColor = activeType === 'personal' ? 'white' : 'aliceblue');
  familyInfos.forEach(tab => tab.style.backgroundColor = activeType === 'family' ? 'white' : 'aliceblue');
  academicInfos.forEach(tab => tab.style.backgroundColor = activeType === 'academic' ? 'white' : 'aliceblue');
}

if (studentInfos.length && familyInfos.length && academicInfos.length && personalContent && familyContent && academicContent) {
  studentInfos.forEach(tab => {
    tab.addEventListener('click', () => {
      personalContent.style.display = 'block';
      familyContent.style.display = 'none';
      academicContent.style.display = 'none';
      setActiveTab('personal');
    });
  });

  familyInfos.forEach(tab => {
    tab.addEventListener('click', () => {
      personalContent.style.display = 'none';
      familyContent.style.display = 'block';
      academicContent.style.display = 'none';
      setActiveTab('family');
    });
  });

  academicInfos.forEach(tab => {
    tab.addEventListener('click', () => {
      personalContent.style.display = 'none';
      familyContent.style.display = 'none';
      academicContent.style.display = 'block';
      setActiveTab('academic');
    });
  });
}

const editButton = document.getElementById('edit-btn');
const showEdit = document.getElementById('e-outer');
const hideEdit = document.getElementById('edit-cancel');

if (editButton && showEdit){
  editButton.addEventListener('click', () => {
    showEdit.style.display = 'block';
  });
}

if (hideEdit && showEdit){
  hideEdit.addEventListener('click', () => {
    showEdit.style.display = 'none';
  });
}