fetch("profile.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Nepodařilo se načíst data.");
    }
    console.log("test");
    return response.json();
  })
  .then(data => {

    // Jméno
    document.querySelector("#name").textContent = data.name;

    // Skills
    const skillsList = document.querySelector("#skills");
    data.skills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    // Interests
    if (data.interests) {
      const interestsSection = document.querySelector("#interests");
      data.interests.forEach(interest => {
        const p = document.createElement("p");
        p.textContent = interest;
        interestsSection.appendChild(p);
      });
    }

    // Projects
    if (data.projects) {
      const projectsSection = document.querySelector("#projects");
      data.projects.forEach(project => {
        const div = document.createElement("div");

        div.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">Zobrazit projekt</a>
        `;

        projectsSection.appendChild(div);
      });
    }

  })
  .catch(error => {
    console.error("Chyba:", error);
  });
